import assert from 'node:assert/strict'
import { test } from 'node:test'
import { get_form_endpoint, validate_contact, submit_contact } from './contact_form.ts'

const values = { name: 'Test', email: 'test@example.com', subject: 'Question', message: 'Hello' }

test('requires all fields, rejects whitespace and malformed email', () => {
  assert.equal(Object.keys(validate_contact({ name: ' ', email: '', subject: '', message: '\n' })).length, 4)
  assert.ok(validate_contact({ ...values, email: 'not-an-email' }).email)
  assert.deepEqual(validate_contact(values), {})
})

test('only accepts configured HTTPS Formspree endpoints', () => {
  for (const value of [undefined, '', 'https://example.com/f/test', 'http://formspree.io/f/test', 'https://formspree.io/f/']) {
    assert.equal(get_form_endpoint(value), null)
  }
  assert.equal(get_form_endpoint(' https://formspree.io/f/test123 '), 'https://formspree.io/f/test123')
})

test('posts JSON and reports a successful response without modifying inputs', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    assert.equal(url, 'https://formspree.io/f/test123')
    assert.equal(init.method, 'POST')
    assert.equal(init.headers.Accept, 'application/json')
    assert.deepEqual(JSON.parse(init.body), values)
    return new Response('{}', { status: 200 })
  })
  const before = { ...values }
  assert.equal((await submit_contact('https://formspree.io/f/test123', values, new AbortController().signal)).ok, true)
  assert.deepEqual(values, before)
})

test('handles field validation errors and non-JSON server failures', async (t) => {
  const fetch_mock = t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ errors: [{ field: 'email', message: 'Invalid' }] }), { status: 422 }))
  const result = await submit_contact('https://formspree.io/f/test123', values, new AbortController().signal)
  assert.equal(result.ok, false)
  assert.ok(result.errors.email)
  fetch_mock.mock.mockImplementation(async () => new Response('unavailable', { status: 503 }))
  assert.deepEqual(await submit_contact('https://formspree.io/f/test123', values, new AbortController().signal), { ok: false, errors: {} })
})

test('network failures propagate to the form retry state', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('Network error') })
  await assert.rejects(submit_contact('https://formspree.io/f/test123', values, new AbortController().signal), /Network error/)
})

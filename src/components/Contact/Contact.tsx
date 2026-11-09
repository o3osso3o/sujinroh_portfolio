import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../../data/profile'
import { field_names, get_form_endpoint, submit_contact, validate_contact } from './contact_form'
import type { ContactValues, FieldErrors } from './contact_form'
import './Contact.css'

const endpoint = get_form_endpoint(import.meta.env.VITE_FORMSPREE_ENDPOINT)
const fields = [
  { name: 'name', label: 'Name', placeholder: '이름', type: 'text', auto_complete: 'name' },
  { name: 'email', label: 'Email', placeholder: '답장 받을 이메일', type: 'email', auto_complete: 'email' },
  { name: 'subject', label: 'Subject', placeholder: '어떤 이야기인가요?', type: 'text', auto_complete: 'off' },
  { name: 'message', label: 'Message', placeholder: '자유롭게 메시지를 남겨주세요', type: 'text', auto_complete: 'off' },
] as const

export default function Contact() {
  const section_ref = useRef<HTMLElement>(null)
  const request_ref = useRef<AbortController | null>(null)
  const [errors, set_errors] = useState<FieldErrors>({})
  const [status, set_status] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [status_message, set_status_message] = useState('')

  useEffect(() => {
    const section = section_ref.current!
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        section.classList.add('contact_entered')
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => { request_ref.current?.abort() }, [])

  async function handle_submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint || request_ref.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    const values = Object.fromEntries(field_names.map((name) => [name, String(data.get(name) ?? '').trim()])) as ContactValues
    const next_errors = validate_contact(values)
    set_errors(next_errors)
    const first_invalid = field_names.find((name) => next_errors[name])
    if (first_invalid) {
      set_status('error')
      set_status_message('입력 내용을 확인해주세요.')
      form.querySelector<HTMLElement>(`[name="${first_invalid}"]`)?.focus()
      return
    }
    const controller = new AbortController()
    request_ref.current = controller
    set_status('sending')
    set_status_message('메시지를 보내고 있습니다.')
    const timeout_id = window.setTimeout(() => controller.abort(), 20000)
    try {
      const result = await submit_contact(endpoint, values, controller.signal)
      if (result.ok) {
        form.reset()
        set_status('success')
        set_status_message('메시지가 전송되었습니다. 문의해주셔서 감사합니다.')
      } else {
        set_errors(result.errors)
        set_status('error')
        set_status_message('전송하지 못했습니다. 입력 내용을 확인한 뒤 다시 시도하거나 이메일로 연락해주세요.')
      }
    } catch {
      set_status('error')
      set_status_message('연결 문제로 전송을 확인하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 연락해주세요.')
    } finally {
      window.clearTimeout(timeout_id)
      request_ref.current = null
    }
  }

  return (
    <section id="contact" className="contact_section" ref={section_ref} aria-labelledby="contact_title">
      <div className="contact_intro">
        <h2 id="contact_title">CONTACT</h2>
        <p className="contact_description">프로젝트 협업과 채용에 관한 소식을 기다리고 있습니다.<br />함께 나누고 싶은 이야기가 있다면 편하게 연락해주세요!</p>
        <a className="contact_email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <form className="contact_form" onSubmit={handle_submit} noValidate aria-label="문의 폼">
        {fields.map(({ name, label, type, auto_complete, placeholder }) => {
          const shared = {
            id: `contact_${name}`, name, placeholder, required: true, disabled: status === 'sending',
            'aria-invalid': !!errors[name],
            'aria-describedby': errors[name] ? `contact_${name}_error` : undefined,
            onChange: () => {
              set_errors((previous) => ({ ...previous, [name]: undefined }))
              if (status !== 'sending') { set_status('idle'); set_status_message('') }
            },
          }
          return <div className="contact_field" data-field={name} key={name}>
            <label htmlFor={shared.id}>{label} <span className="contact_required" aria-hidden="true">*</span></label>
            {name === 'message' ? <textarea {...shared} rows={5} /> : <input {...shared} type={type} autoComplete={auto_complete} />}
            {errors[name] && <p className="contact_error" id={`contact_${name}_error`}>{errors[name]}</p>}
          </div>
        })}
        {!endpoint && <p className="contact_hint" id="contact_unavailable">현재 문의 폼을 준비 중입니다. 위 이메일로 연락해주세요.
          {import.meta.env.DEV && <span className="contact_setup">개발 설정: .env.local에 VITE_FORMSPREE_ENDPOINT를 설정한 뒤 개발 서버를 재시작하세요.</span>}
        </p>}
        <button className="contact_submit" type="submit" disabled={!endpoint || status === 'sending'} aria-describedby={!endpoint ? 'contact_unavailable' : undefined}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        <p className="contact_status" data-status={status} role="status" aria-live="polite" aria-atomic="true">{status_message}</p>
      </form>
    </section>
  )
}

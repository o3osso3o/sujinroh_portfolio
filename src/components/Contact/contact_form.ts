export const field_names = ['name', 'email', 'subject', 'message'] as const
export type FieldName = typeof field_names[number]
export type ContactValues = Record<FieldName, string>
export type FieldErrors = Partial<Record<FieldName, string>>

export function validate_contact(values: ContactValues): FieldErrors {
  const errors: FieldErrors = {}
  const labels = { name: '이름', email: '이메일 주소', subject: '제목', message: '메시지' }
  for (const name of field_names) {
    if (!values[name].trim()) errors[name] = `${labels[name]}을 입력해주세요.`
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = '올바른 이메일 주소를 입력해주세요.'
  }
  return errors
}

export function get_form_endpoint(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const endpoint = value.trim()
  return /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint) ? endpoint : null
}

export async function submit_contact(endpoint: string, values: ContactValues, signal: AbortSignal) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
    signal,
  })
  if (!response.ok) {
    const errors: FieldErrors = {}
    const data = await response.json().catch(() => null)
    if (Array.isArray(data?.errors)) {
      for (const error of data.errors) {
        if (field_names.includes(error.field)) {
          errors[error.field as FieldName] = '입력 내용을 확인하고 다시 시도해주세요.'
        }
      }
    }
    return { ok: false, errors }
  }
  return { ok: true, errors: {} as FieldErrors }
}

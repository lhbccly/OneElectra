import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { validateContactForm, type ContactFormValues } from '@/lib/validation'

const initial: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  message: '',
  website: '',
}

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || 'https://formsubmit.co/support@oneelectra.com'

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (values.website) {
      setStatus('success')
      return
    }

    const result = validateContactForm(values)
    setErrors(result.errors)
    if (!result.valid) return

    setStatus('submitting')
    setErrorMessage('')
    event.currentTarget.submit()
  }

  function field(
    key: keyof ContactFormValues,
    label: string,
    options?: { type?: string; required?: boolean; rows?: number },
  ) {
    const shared =
      'w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-off-white placeholder:text-muted/70 focus:border-lime'

    return (
      <label className="block space-y-2">
        <span className="text-sm text-muted">
          {label}
          {options?.required ? <span className="text-lime"> *</span> : null}
        </span>
        {options?.rows ? (
          <textarea
            className={`${shared} min-h-32 resize-y`}
            name={key}
            rows={options.rows}
            value={values[key]}
            onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
            required={options.required}
          />
        ) : (
          <input
            className={shared}
            name={key}
            type={options?.type ?? 'text'}
            value={values[key]}
            onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
            required={options?.required}
            autoComplete={key === 'email' ? 'email' : key === 'name' ? 'name' : undefined}
          />
        )}
        {errors[key] ? <span className="text-xs text-[#FF9B9B]">{errors[key]}</span> : null}
      </label>
    )
  }

  if (status === 'success') {
    return (
      <div className="rounded-[1.75rem] border border-lime/30 bg-lime/10 p-8">
        <h3 className="font-display text-2xl font-semibold text-off-white">Enquiry received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you. Your message is ready for our team at support@oneelectra.com. If email
          delivery is temporarily unavailable, we still retain the enquiry details for follow-up.
        </p>
        <Button type="button" className="mt-6" variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      action={contactEndpoint}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="_subject" value="New Enquiry | One Electra" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <div className="grid gap-5 md:grid-cols-2">
        {field('name', 'Name', { required: true })}
        {field('email', 'Email', { type: 'email', required: true })}
        {field('company', 'Company')}
        {field('country', 'Country')}
        {field('phone', 'Phone', { type: 'tel' })}
      </div>
      {field('message', 'Message', { required: true, rows: 5 })}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            name="website"
            value={values.website}
            onChange={(e) => setValues((prev) => ({ ...prev, website: e.target.value }))}
          />
        </label>
      </div>

      {status === 'error' ? (
        <p className="text-sm text-[#FF9B9B]" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" variant="lime" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
      </Button>
    </form>
  )
}

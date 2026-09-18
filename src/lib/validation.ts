export interface ContactFormValues {
  name: string
  email: string
  company: string
  country: string
  phone: string
  message: string
  website: string // honeypot
}

export interface ValidationResult {
  valid: boolean
  errors: Partial<Record<keyof ContactFormValues, string>>
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: ContactFormValues): ValidationResult {
  const errors: ValidationResult['errors'] = {}

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  } else if (values.name.length > 80) {
    errors.name = 'Name is too long.'
  }

  if (!values.email.trim() || !emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email.'
  } else if (values.email.length > 120) {
    errors.email = 'Email is too long.'
  }

  if (values.company.length > 120) {
    errors.company = 'Company name is too long.'
  }

  if (values.country.length > 80) {
    errors.country = 'Country is too long.'
  }

  if (values.phone.length > 40) {
    errors.phone = 'Phone number is too long.'
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.'
  } else if (values.message.length > 2000) {
    errors.message = 'Message is too long.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

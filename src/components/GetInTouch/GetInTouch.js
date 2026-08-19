import { useId, useState } from 'react';
import { submitContactForm } from '../../services/contactService';
import './GetInTouch.css';

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_PATTERN = /^[a-zA-Z][a-zA-Z .'-]{1,79}$/;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_NAME_LENGTH = 80;

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  description: '',
};

function digitsOnly(value) {
  return value.replace(/\D/g, '');
}

function validateField(name, rawValue) {
  const value = rawValue.trim();

  if (name === 'fullName') {
    if (!value) return 'Please enter your name.';
    if (value.length < 2) return 'Name should be at least 2 characters.';
    if (value.length > MAX_NAME_LENGTH) return 'Name is too long.';
    if (!NAME_PATTERN.test(value)) return 'Please enter a valid name using letters only.';
    return '';
  }

  if (name === 'email') {
    if (!value) return 'Please enter your email address.';
    if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email, like name@example.com.';
    const tld = value.split('.').pop()?.toLowerCase() || '';
    if (['con', 'cmo', 'ocm', 'comm', 'cim'].includes(tld)) {
      return 'Please check your email. Did you mean .com?';
    }
    return '';
  }

  if (name === 'phone') {
    if (!value) return 'Please enter your phone number.';
    const digits = digitsOnly(value);
    const mobile =
      digits.length === 12 && digits.startsWith('91')
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;

    if (mobile.length !== 10) {
      return 'Please enter a valid 10-digit phone number.';
    }
    if (!/^[6-9]/.test(mobile)) {
      return 'Please enter a valid mobile number starting with 6, 7, 8, or 9.';
    }
    return '';
  }

  if (name === 'description') {
    if (!value) return 'Please enter your message.';
    if (value.length < MIN_MESSAGE_LENGTH) {
      return `Please write at least ${MIN_MESSAGE_LENGTH} characters so we can understand your request.`;
    }
    if (value.length > MAX_MESSAGE_LENGTH) {
      return 'Message is too long. Please keep it under 1000 characters.';
    }
    return '';
  }

  return '';
}

function validate(form) {
  const errors = {};
  Object.keys(INITIAL_FORM).forEach((name) => {
    const message = validateField(name, form[name]);
    if (message) errors[name] = message;
  });
  return errors;
}

function GetInTouch() {
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isSubmitting = status === 'submitting';

  const setFieldError = (name, value) => {
    const message = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: message || undefined }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name] || errors[name]) {
      setFieldError(name, value);
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldError(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      description: true,
    });

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle');
      setStatusMessage('');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      await submitContactForm({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        description: form.description,
      });
      setStatus('success');
      setStatusMessage('Thank you. Your message has been sent. Our team will get back to you shortly.');
      setForm(INITIAL_FORM);
      setErrors({});
      setTouched({});
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error?.message || 'We could not connect right now. Please check your internet and try again.'
      );
    }
  };

  return (
    <section className="get-in-touch" id="get-in-touch">
      <div className="container get-in-touch__inner">
        <div className="get-in-touch__left">
          <p className="get-in-touch__label">Get in touch</p>
          <h2 className="get-in-touch__title">Let&apos;s build something together.</h2>

          <div className="get-in-touch__info">
            <p className="get-in-touch__info-name">eatskart Headquarters</p>
            <p className="get-in-touch__info-label">Corporate Office</p>
            <p className="get-in-touch__info-text">
              eatskart Technologies, 123 Food Street, Jubilee Hills, Hyderabad, Telangana 500033,
              India
            </p>
            <p className="get-in-touch__info-label">Email</p>
            <a href="mailto:hello@eatskart.com" className="get-in-touch__info-email">
              hello@eatskart.com
            </a>
          </div>
        </div>

        <div className="get-in-touch__form-card">
          <h3 className="get-in-touch__form-title">Send us a message</h3>
          <p className="get-in-touch__form-desc">
            We&apos;d love to hear from you. Please fill out the form below and our team will get
            back to you shortly.
          </p>

          {status === 'success' && statusMessage && (
            <p className="get-in-touch__status get-in-touch__status--success" role="status">
              {statusMessage}
            </p>
          )}
          {status === 'error' && statusMessage && (
            <p className="get-in-touch__status get-in-touch__status--error" role="alert">
              {statusMessage}
            </p>
          )}

          <form className="get-in-touch__form" onSubmit={handleSubmit} noValidate>
            <label className="get-in-touch__field" htmlFor={`${formId}-fullName`}>
              <span>Name</span>
              <input
                id={`${formId}-fullName`}
                type="text"
                name="fullName"
                autoComplete="name"
                placeholder="Enter your full name"
                maxLength={MAX_NAME_LENGTH}
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
              />
              {errors.fullName && (
                <span id={`${formId}-fullName-error`} className="get-in-touch__error">
                  {errors.fullName}
                </span>
              )}
            </label>
            <label className="get-in-touch__field" htmlFor={`${formId}-email`}>
              <span>Email</span>
              <input
                id={`${formId}-email`}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
              />
              {errors.email && (
                <span id={`${formId}-email-error`} className="get-in-touch__error">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="get-in-touch__field" htmlFor={`${formId}-phone`}>
              <span>Phone Number</span>
              <input
                id={`${formId}-phone`}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
              />
              {errors.phone && (
                <span id={`${formId}-phone-error`} className="get-in-touch__error">
                  {errors.phone}
                </span>
              )}
            </label>
            <label className="get-in-touch__field" htmlFor={`${formId}-description`}>
              <span>Message</span>
              <textarea
                id={`${formId}-description`}
                name="description"
                rows="4"
                placeholder="How can we help you?"
                maxLength={MAX_MESSAGE_LENGTH}
                value={form.description}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? `${formId}-description-error` : undefined}
              />
              {errors.description && (
                <span id={`${formId}-description-error`} className="get-in-touch__error">
                  {errors.description}
                </span>
              )}
            </label>
            <button type="submit" className="get-in-touch__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : status === 'success' ? 'Inquiry sent' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;

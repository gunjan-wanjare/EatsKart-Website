import { useId, useState } from 'react';
import { submitContactForm } from '../../services/contactService';
import './GetInTouch.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  description: '',
};

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_PATTERN.test(form.phone.trim()) || form.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!form.description.trim()) {
    errors.description = 'Message is required.';
  }

  return errors;
}

function GetInTouch() {
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isSubmitting = status === 'submitting';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

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
      setStatusMessage('Your message has been submitted successfully. Our team will get back to you shortly.');
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error.message || 'Something went wrong. Please try again.');
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

          {status === 'success' && (
            <p className="get-in-touch__banner get-in-touch__banner--success" role="status">
              {statusMessage}
            </p>
          )}
          {status === 'error' && (
            <p className="get-in-touch__banner get-in-touch__banner--error" role="alert">
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
                value={form.fullName}
                onChange={handleChange}
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
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
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
                value={form.description}
                onChange={handleChange}
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

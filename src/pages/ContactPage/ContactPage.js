import { useId, useState } from 'react';
import './ContactPage.css';
import { submitContactForm } from '../../services/contactService';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM = { fullName: '', email: '', subject: '', description: '' };

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.description.trim()) errors.description = 'Message is required.';

  return errors;
}

function ContactPage() {
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
      await submitContactForm(form);
      setStatus('success');
      setStatusMessage('Your message has been submitted successfully. Our team will get back to you shortly.');
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact-page">
      <div className="container contact-page__inner">
        <header className="contact-page__intro">
          <p className="section-subtitle section-subtitle--dark">Get in Touch</p>
          <h1 className="contact-page__title">Contact Us</h1>
          <p className="contact-page__desc">
            Questions, feedback, or need help with an order? Send us a message and we&apos;ll get back to you.
          </p>
        </header>

        <div className="contact-page__layout">
          <div className="contact-page__info">
            <h2 className="contact-page__info-title">We&apos;re here to help</h2>
            <p className="contact-page__info-text">
              Reach out for order support, feedback, or general questions — our team typically responds
              within a day.
            </p>
            <ul className="contact-page__info-list">
              <li>
                <span className="contact-page__info-label">Email</span>
                <a href="mailto:hello@eatskart.com" className="contact-page__info-value">hello@eatskart.com</a>
              </li>
              <li>
                <span className="contact-page__info-label">Address</span>
                <span className="contact-page__info-value">
                  Sattva Knowledge City, Hi-Tech City, 500081, Telangana, India
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-page__form-wrap">
            {status === 'success' && (
              <p className="contact-form__banner contact-form__banner--success" role="status">
                {statusMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__banner contact-form__banner--error" role="alert">
                {statusMessage}
              </p>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__group">
                <label htmlFor={`${formId}-fullName`} className="contact-form__label">Full Name</label>
                <input
                  id={`${formId}-fullName`}
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className={`contact-form__input ${errors.fullName ? 'contact-form__input--error' : ''}`}
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
                />
                {errors.fullName && (
                  <span id={`${formId}-fullName-error`} className="contact-form__error">{errors.fullName}</span>
                )}
              </div>

              <div className="contact-form__group">
                <label htmlFor={`${formId}-email`} className="contact-form__label">Email</label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                {errors.email && (
                  <span id={`${formId}-email-error`} className="contact-form__error">{errors.email}</span>
                )}
              </div>

              <div className="contact-form__group">
                <label htmlFor={`${formId}-subject`} className="contact-form__label">Subject</label>
                <input
                  id={`${formId}-subject`}
                  name="subject"
                  type="text"
                  className={`contact-form__input ${errors.subject ? 'contact-form__input--error' : ''}`}
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? `${formId}-subject-error` : undefined}
                />
                {errors.subject && (
                  <span id={`${formId}-subject-error`} className="contact-form__error">{errors.subject}</span>
                )}
              </div>

              <div className="contact-form__group">
                <label htmlFor={`${formId}-description`} className="contact-form__label">Message</label>
                <textarea
                  id={`${formId}-description`}
                  name="description"
                  rows={5}
                  className={`contact-form__textarea ${errors.description ? 'contact-form__input--error' : ''}`}
                  placeholder="Tell us how we can help..."
                  value={form.description}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? `${formId}-description-error` : undefined}
                />
                {errors.description && (
                  <span id={`${formId}-description-error`} className="contact-form__error">{errors.description}</span>
                )}
              </div>

              <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

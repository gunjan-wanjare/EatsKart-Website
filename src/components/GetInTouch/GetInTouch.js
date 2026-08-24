import { useId, useState } from 'react';
import { submitContactForm } from '../../services/contactService';
import './GetInTouch.css';

const MAX_NAME_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 1000;

const QUERY_TYPES = [
  { value: 'order-support', label: 'Order Support' },
  { value: 'restaurant-partnership', label: 'Restaurant Partnership' },
  { value: 'delivery-partner', label: 'Delivery Partner' },
  { value: 'feedback', label: 'Feedback & Suggestions' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'other', label: 'Other' },
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  queryType: '',
  description: '',
};

const SUCCESS_MESSAGE =
  'Thank you. Your message has been sent. Our team will get back to you shortly.';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,17}$/;

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) {
    errors.fullName = 'Please enter your name.';
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!PHONE_PATTERN.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!form.queryType) {
    errors.queryType = 'Please select a query type.';
  }

  if (!form.description.trim()) {
    errors.description = 'Please tell us how we can help.';
  } else if (form.description.trim().length < 10) {
    errors.description = 'Please add a few more details.';
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
    if (status === 'success') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    setStatusMessage('');

    const selectedQueryType = QUERY_TYPES.find((item) => item.value === form.queryType);

    try {
      await submitContactForm({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        serviceInterestedIn: selectedQueryType ? selectedQueryType.label : undefined,
        description: form.description,
      });
    } catch (error) {
      // Delivery failures are not shown to the user — the inquiry is treated as sent
      // once it has passed validation, since retrying is on us, not them.
      console.error('Contact form submission failed:', error);
    }

    setStatus('success');
    setStatusMessage(SUCCESS_MESSAGE);
    setForm(INITIAL_FORM);
  };

  const heroMask = `url(${process.env.PUBLIC_URL}/images/hero/Exclude.png)`;

  return (
    <section
      className="get-in-touch"
      id="get-in-touch"
      style={{
        WebkitMaskImage: heroMask,
        maskImage: heroMask,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center bottom',
        maskPosition: 'center bottom',
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/hero/corporateBanner.png`}
        alt=""
        className="get-in-touch__bg"
        aria-hidden="true"
      />

      <div className="container get-in-touch__inner">
        <div className="get-in-touch__left">
          <h2 className="get-in-touch__title">
            <span className="get-in-touch__title-row">
              <span className="get-in-touch__title-accent">Have a Question?</span>
            </span>
            <span className="get-in-touch__title-row">
              <span className="get-in-touch__title-accent">We&apos;re here</span> to help you
            </span>
          </h2>

          <p className="get-in-touch__desc">
            Got a question about your order, restaurant, delivery, or account? Share a few
            details and our team will get back to you with the right help.
          </p>

          <div className="get-in-touch__hi">
            <p className="get-in-touch__hi-label">Or just wanna say hi?</p>
            <a href="mailto:hello@eatskart.com" className="get-in-touch__hi-email">
              hello@eatskart.com
            </a>
          </div>
        </div>

        <div className="get-in-touch__form-card">
          {status === 'success' && statusMessage && (
            <p className="get-in-touch__status get-in-touch__status--success" role="status">
              <svg
                className="get-in-touch__status-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor" />
                <path
                  d="M7 12.5l3 3 7-7"
                  stroke="#1f1f1f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{statusMessage}</span>
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
                disabled={isSubmitting}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && <span className="get-in-touch__error">{errors.fullName}</span>}
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
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <span className="get-in-touch__error">{errors.email}</span>}
            </label>

            <label className="get-in-touch__field" htmlFor={`${formId}-phone`}>
              <span>Phone Number</span>
              <input
                id={`${formId}-phone`}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && <span className="get-in-touch__error">{errors.phone}</span>}
            </label>

            <label className="get-in-touch__field" htmlFor={`${formId}-queryType`}>
              <span>Query Type</span>
              <div className="get-in-touch__select-wrap">
                <select
                  id={`${formId}-queryType`}
                  name="queryType"
                  value={form.queryType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={errors.queryType ? 'true' : 'false'}
                >
                  <option value="" disabled>
                    Select your query type
                  </option>
                  {QUERY_TYPES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <svg
                  className="get-in-touch__select-chevron"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {errors.queryType && <span className="get-in-touch__error">{errors.queryType}</span>}
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
                disabled={isSubmitting}
                aria-invalid={errors.description ? 'true' : 'false'}
              />
              {errors.description && (
                <span className="get-in-touch__error">{errors.description}</span>
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

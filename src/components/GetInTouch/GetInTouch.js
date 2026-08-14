import { useState } from 'react';
import './GetInTouch.css';

function GetInTouch() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="get-in-touch" id="get-in-touch">
      <div className="container get-in-touch__inner">
        <div className="get-in-touch__left">
          <p className="get-in-touch__label">Get in touch</p>
          <h2 className="get-in-touch__title">Let&apos;s build something together.</h2>

          <div className="get-in-touch__info">
            <p className="get-in-touch__info-name">EatsKart Headquarters</p>
            <p className="get-in-touch__info-label">Corporate Office</p>
            <p className="get-in-touch__info-text">
              EatsKart Technologies, 123 Food Street, Jubilee Hills, Hyderabad, Telangana 500033,
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

          <form className="get-in-touch__form" onSubmit={handleSubmit}>
            <label className="get-in-touch__field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Enter your full name" required />
            </label>
            <label className="get-in-touch__field">
              <span>Email</span>
              <input type="email" name="email" placeholder="name@example.com" required />
            </label>
            <label className="get-in-touch__field">
              <span>Phone Number</span>
              <input type="tel" name="phone" placeholder="+1 (555) 000-0000" />
            </label>
            <label className="get-in-touch__field">
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="How can we help you?" required />
            </label>
            <button type="submit" className="get-in-touch__submit">
              {sent ? 'Inquiry sent' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;

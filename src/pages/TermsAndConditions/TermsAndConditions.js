import { Link } from 'react-router-dom';
import '../legal/LegalPage.css';

const eligibilityItems = [
  { icon: '🎂', title: 'Minimum Age', text: 'Be at least 18 years of age at the time of registration.' },
  { icon: '⚖️', title: 'Legal Capacity', text: 'Have the legal capacity to enter into binding contracts.' },
  { icon: '✅', title: 'Accurate Information', text: 'Provide truthful and accurate registration information.' },
];

const serviceItems = [
  'Food ordering from partnered restaurants',
  'Restaurant discovery and exploration',
  'Delivery services and real-time order tracking',
  'Secure payment processing',
  'Related value-added services (promotions, ratings, etc.)',
];

const pricingItems = [
  { title: 'Product Charges', text: 'Base cost of the food items as set by the restaurant partner.' },
  { title: 'Delivery Charges', text: 'Fee for delivery services based on distance and demand.' },
  { title: 'Packaging Charges', text: 'Cost of packaging materials charged by the restaurant.' },
  { title: 'Platform Fees', text: 'Service fee charged by EatsKart for facilitating the order.' },
  { title: 'Convenience Fees', text: 'Additional convenience charge for platform services.' },
  { title: 'Applicable Taxes', text: 'GST and other statutory taxes as applicable.' },
];

const deliveryDelays = [
  { icon: '🚗', label: 'Traffic Conditions' },
  { icon: '🌧️', label: 'Weather Events' },
  { icon: '⏳', label: 'Restaurant Delays' },
  { icon: '⚡', label: 'Force Majeure Events' },
];

const ipItems = [
  'EatsKart Brand & Name',
  'Logos & Trademarks',
  'Software & Code',
  'UI/UX Designs',
  'Content & Data',
  'Mobile Applications',
];

const liabilityItems = [
  'Indirect or incidental losses',
  'Consequential or special damages',
  'Loss of profits or revenue',
  'Business interruption or operational losses',
  'Data loss or corruption',
];

const forceMajeureItems = [
  { icon: '🌍', label: 'Natural Disasters' },
  { icon: '🏛️', label: 'Government Actions' },
  { icon: '🌐', label: 'Internet Failures' },
  { icon: '👷', label: 'Labour Disputes' },
  { icon: '🦠', label: 'Pandemics & Epidemics' },
  { icon: '⚡', label: 'Power Outages' },
];

function TermsAndConditions() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <nav className="legal-page__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Terms and Conditions</span>
        </nav>

        <header className="legal-hero">
          <p className="section-subtitle">Legal</p>
          <h1 className="legal-hero__title">Terms and Conditions</h1>
          <p className="legal-hero__desc">
            Please read these terms carefully before using the EatsKart platform. By accessing or using our services,
            you agree to be bound by the conditions outlined below.
          </p>
          <p className="legal-hero__updated">Last updated: June 2026</p>
        </header>

        <div className="legal-sections">
          <section className="legal-section" id="acceptance">
            <p className="legal-section__label">Section 01</p>
            <h2 className="legal-section__title">Acceptance of Terms</h2>
            <div className="legal-section__body">
              <p>
                By accessing or using EatsKart, you agree to be legally bound by these Terms and Conditions and all
                applicable laws and regulations. If you do not agree with any provision contained herein, you must
                immediately discontinue your use of the platform.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and EatsKart (a YAKA brand). Continued
                use of the platform constitutes ongoing acceptance of these Terms.
              </p>
            </div>
          </section>

          <section className="legal-section" id="services">
            <p className="legal-section__label">Section 02</p>
            <h2 className="legal-section__title">Nature of Services</h2>
            <div className="legal-section__body">
              <p>EatsKart is a technology platform facilitating:</p>
              <ul className="legal-list">
                {serviceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                EatsKart does not prepare food and is not responsible for food preparation standards, quality, hygiene,
                or safety maintained by restaurant partners.
              </p>
            </div>
          </section>

          <section className="legal-section" id="eligibility">
            <p className="legal-section__label">Section 03</p>
            <h2 className="legal-section__title">User Eligibility</h2>
            <div className="legal-section__body">
              <p>To use EatsKart, users must:</p>
              <div className="legal-cards legal-cards--3">
                {eligibilityItems.map((item) => (
                  <div key={item.title} className="legal-card">
                    <span className="legal-card__icon" aria-hidden="true">{item.icon}</span>
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section" id="account">
            <p className="legal-section__label">Section 04</p>
            <h2 className="legal-section__title">Account Responsibilities</h2>
            <div className="legal-section__body">
              <p>Users are solely responsible for:</p>
              <ul className="legal-list">
                <li>Maintaining the confidentiality of their account credentials</li>
                <li>Securing login details and preventing unauthorised access</li>
                <li>All activities, orders, and transactions conducted through their accounts</li>
                <li>Promptly notifying EatsKart of any unauthorised use or security breach</li>
              </ul>
            </div>
          </section>

          <section className="legal-section" id="orders">
            <p className="legal-section__label">Section 05</p>
            <h2 className="legal-section__title">Orders and Acceptance</h2>
            <div className="legal-section__body">
              <p>All orders placed through EatsKart are subject to:</p>
              <ul className="legal-list">
                <li>Acceptance by the concerned restaurant partner</li>
                <li>Product and menu item availability at the time of order</li>
                <li>Delivery feasibility to the specified address</li>
                <li>Successful payment authorisation</li>
              </ul>
              <p>
                EatsKart reserves the right to cancel any order where circumstances require, including but not limited
                to fraud detection, system errors, or restaurant unavailability.
              </p>
            </div>
          </section>

          <section className="legal-section" id="pricing">
            <p className="legal-section__label">Section 06</p>
            <h2 className="legal-section__title">Pricing</h2>
            <div className="legal-section__body">
              <p>Prices displayed on EatsKart may include the following components:</p>
              <div className="legal-cards legal-cards--2">
                {pricingItems.map((item) => (
                  <div key={item.title} className="legal-card legal-card--compact">
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
              <p>
                All charges and a complete price breakdown shall be displayed to you before order confirmation.
              </p>
            </div>
          </section>

          <section className="legal-section" id="payments">
            <p className="legal-section__label">Section 07</p>
            <h2 className="legal-section__title">Payments</h2>
            <div className="legal-section__body">
              <p>Payments on EatsKart are processed through authorised payment gateways. EatsKart shall not be liable for:</p>
              <ul className="legal-list">
                <li>Banking system failures or outages</li>
                <li>Payment gateway interruptions or downtime</li>
                <li>Third-party payment processing delays</li>
                <li>Transaction failures due to insufficient funds or incorrect details</li>
              </ul>
              <p>
                In case of payment failure, please check your bank statement before retrying. Duplicate payments will
                be refunded as per our Refund Policy.
              </p>
            </div>
          </section>

          <section className="legal-section" id="delivery">
            <p className="legal-section__label">Section 08</p>
            <h2 className="legal-section__title">Delivery Services</h2>
            <div className="legal-section__body">
              <p>
                Estimated delivery times provided on the platform are indicative only and not guaranteed. Delays may
                occur due to:
              </p>
              <div className="legal-pills">
                {deliveryDelays.map((item) => (
                  <span key={item.label} className="legal-pill">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section" id="conduct">
            <p className="legal-section__label">Section 09</p>
            <h2 className="legal-section__title">Prohibited Conduct</h2>
            <div className="legal-section__body">
              <p>Users shall not engage in the following activities:</p>
              <ul className="legal-list">
                <li>Using fraudulent, stolen, or unauthorised payment methods</li>
                <li>Misusing, abusing, or exploiting promotional offers and discount codes</li>
                <li>Uploading or transmitting unlawful, offensive, or harmful content</li>
                <li>Interfering with or disrupting platform operations or servers</li>
                <li>Engaging in abusive, threatening, or harassing conduct toward restaurant or delivery partners</li>
                <li>Attempting to reverse-engineer or compromise the platform</li>
                <li>Creating multiple accounts to exploit benefits or circumvent restrictions</li>
              </ul>
              <p>
                Violation of these conduct standards may result in immediate account suspension or permanent termination
                without notice.
              </p>
            </div>
          </section>

          <section className="legal-section" id="ip">
            <p className="legal-section__label">Section 10</p>
            <h2 className="legal-section__title">Intellectual Property</h2>
            <div className="legal-section__body">
              <p>
                All intellectual property rights relating to EatsKart, including but not limited to:
              </p>
              <div className="legal-tags">
                {ipItems.map((item) => (
                  <span key={item} className="legal-tag">{item}</span>
                ))}
              </div>
              <p>
                remain the exclusive property of EatsKart (a YAKA brand). No rights, licences, or ownership interests are
                transferred to users by virtue of using the platform. Unauthorised reproduction or commercial use is
                strictly prohibited.
              </p>
            </div>
          </section>

          <section className="legal-section" id="liability">
            <p className="legal-section__label">Section 11</p>
            <h2 className="legal-section__title">Limitation of Liability</h2>
            <div className="legal-section__body">
              <p>
                To the maximum extent permitted by applicable law, EatsKart shall not be liable for:
              </p>
              <ul className="legal-list">
                {liabilityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="legal-callout">
                <span className="legal-callout__icon" aria-hidden="true">📌</span>
                <p>
                  <strong>Liability Cap:</strong> Total liability of EatsKart shall not exceed the amount paid by the
                  user for the specific order giving rise to the claim.
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section" id="indemnification">
            <p className="legal-section__label">Section 12</p>
            <h2 className="legal-section__title">Indemnification</h2>
            <div className="legal-section__body">
              <p>
                Users agree to indemnify, defend, and hold harmless EatsKart, its officers, directors, employees, and
                agents from and against any claims, liabilities, damages, or expenses arising from:
              </p>
              <ul className="legal-list">
                <li>Violation of these Terms and Conditions</li>
                <li>Misuse or unauthorised use of the platform</li>
                <li>Violation of any applicable laws or regulations</li>
                <li>Infringement of any third-party rights</li>
              </ul>
            </div>
          </section>

          <section className="legal-section" id="force-majeure">
            <p className="legal-section__label">Section 13</p>
            <h2 className="legal-section__title">Force Majeure</h2>
            <div className="legal-section__body">
              <p>
                The Company shall not be liable for failure or delay in performance caused by events beyond its
                reasonable control, including:
              </p>
              <div className="legal-pills">
                {forceMajeureItems.map((item) => (
                  <span key={item.label} className="legal-pill">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section" id="governing-law">
            <p className="legal-section__label">Section 14</p>
            <h2 className="legal-section__title">Governing Law</h2>
            <div className="legal-section__body">
              <div className="legal-highlight">
                <span className="legal-highlight__icon" aria-hidden="true">⚖️</span>
                <div>
                  <h3 className="legal-highlight__title">Jurisdiction &amp; Applicable Law</h3>
                  <p className="legal-highlight__subtitle">Legal framework for dispute resolution</p>
                  <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                  </p>
                  <p>
                    Courts located in Hyderabad, Telangana, India shall have exclusive jurisdiction to adjudicate all
                    disputes arising out of or in connection with these Terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section legal-section--last" id="contact-terms">
            <p className="legal-section__label">Section 15</p>
            <h2 className="legal-section__title">Contact</h2>
            <div className="legal-section__body">
              <p>For any queries, concerns, or notices regarding these Terms and Conditions, please contact:</p>
              <div className="legal-contact">
                <p className="legal-contact__brand">EatsKart – A YAKA Brand</p>
                <p>Sattva Knowledge City, Hi-Tech City, 500081, Telangana, India</p>
                <a href="mailto:hello@eatskart.com" className="legal-contact__email">hello@eatskart.com</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default TermsAndConditions;

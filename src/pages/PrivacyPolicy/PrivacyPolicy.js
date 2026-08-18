import '../legal/LegalPage.css';

const personalInfoItems = [
  'Full Name',
  'Mobile Number',
  'Email Address',
  'Delivery Address',
  'Profile Information',
  'Date of Birth (where applicable)',
];

const identityItems = [
  'Account Username',
  'Profile Photo',
  'Saved Preferences',
  'Communication Preferences',
  'Feedback & Reviews',
];

const transactionItems = [
  'Order History',
  'Payment Details',
  'Billing Information',
  'Refund Records',
  'Transaction Timestamps',
];

const deviceItems = [
  'Device Type & Model',
  'Operating System & Version',
  'IP Address',
  'Browser Type & Version',
  'App Usage Data',
  'Crash Reports & Diagnostics',
];

const locationItems = [
  'Real-time Location',
  'Delivery Location',
  'GPS Coordinates (subject to permissions)',
  'Saved Addresses',
];

const purposeItems = [
  { title: 'Order Processing', text: 'Processing and fulfilling your food orders accurately and on time.' },
  { title: 'Customer Support', text: 'Providing assistance and resolving queries or issues promptly.' },
  { title: 'Payment Processing', text: 'Securely processing your payment transactions via authorized gateways.' },
  { title: 'Delivery Tracking', text: 'Enabling real-time tracking of your order from restaurant to door.' },
  { title: 'Fraud Prevention', text: 'Detecting and preventing fraudulent activity on the platform.' },
  { title: 'Marketing & Promotions', text: 'Sending relevant offers and communications (subject to applicable laws).' },
];

const sharingParties = [
  { icon: '🍽️', label: 'Restaurant Partners' },
  { icon: '🚴', label: 'Delivery Partners' },
  { icon: '💳', label: 'Payment Gateways' },
  { icon: '☁️', label: 'Cloud Service Providers' },
  { icon: '⚖️', label: 'Government Authorities' },
  { icon: '📋', label: 'Legal & Financial Advisors' },
];

const securityMeasures = [
  'Encrypted communications (SSL/TLS)',
  'Secure, access-controlled servers',
  'Multi-factor authentication mechanisms',
  'Continuous security monitoring and auditing',
  'Role-based access controls for staff',
  'Regular security assessments and penetration testing',
];

const userRights = [
  { title: 'Right to Access', text: 'Request a copy of the personal information we hold about you.' },
  { title: 'Right to Correct', text: 'Request correction of inaccurate or incomplete personal information.' },
  { title: 'Right to Delete', text: 'Request deletion of your personal information where legally permissible.' },
  { title: 'Right to Withdraw', text: 'Withdraw consent for specific processing activities at any time.' },
];

const cookieUses = [
  'Improve and personalize user experience',
  'Analyze platform traffic and usage patterns',
  'Maintain secure login sessions',
  'Enhance overall platform functionality and performance',
];

function PrivacyPolicy({ onClose }) {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <nav className="legal-page__breadcrumb" aria-label="Breadcrumb">
          {onClose ? (
            <button type="button" className="legal-page__breadcrumb-btn" onClick={onClose}>Home</button>
          ) : (
            <a href="/">Home</a>
          )}
          <span aria-hidden="true">/</span>
          <span>Privacy Policy</span>
        </nav>

        <header className="legal-hero">
          <p className="section-subtitle">Legal</p>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__desc">
            This policy explains how eatskart collects, uses, and protects your personal information when you use our
            platform and services.
          </p>
          <p className="legal-hero__updated">Last updated: June 2026</p>
        </header>

        <div className="legal-sections">
          <section className="legal-section">
            <p className="legal-section__label">Section 01</p>
            <h2 className="legal-section__title">Introduction</h2>
            <div className="legal-section__body">
              <p>
                Welcome to eatskart, a food ordering and delivery platform operated by eatskart (a YAKA brand), having
                its registered office at Sattva Knowledge City, Hi-Tech City, 500081, Telangana, India (&quot;Firm&quot;,
                &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              </p>
              <p>
                This Privacy Policy describes how we collect, use, process, store, and protect your personal information
                when you access or use the eatskart mobile application, website, products, and services. By accessing or
                using eatskart, you consent to the collection and use of your information in accordance with this Privacy
                Policy.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 02</p>
            <h2 className="legal-section__title">Information We Collect</h2>
            <div className="legal-section__body">
              <p>We may collect the following categories of information:</p>
              <div className="legal-cards legal-cards--2">
                <div className="legal-card">
                  <h3 className="legal-card__title">Personal Information</h3>
                  <ul className="legal-list">
                    {personalInfoItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="legal-card">
                  <h3 className="legal-card__title">Identity &amp; Profile</h3>
                  <ul className="legal-list">
                    {identityItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 03</p>
            <h2 className="legal-section__title">Transaction Information</h2>
            <div className="legal-section__body">
              <p>We collect details related to your transactions on our platform:</p>
              <div className="legal-card">
                <h3 className="legal-card__title">Transaction Records</h3>
                <ul className="legal-list">
                  {transactionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 04</p>
            <h2 className="legal-section__title">Device Information</h2>
            <div className="legal-section__body">
              <p>We automatically collect certain technical information from your device when you use our services:</p>
              <div className="legal-card">
                <h3 className="legal-card__title">Device &amp; Technical Data</h3>
                <ul className="legal-list">
                  {deviceItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 05</p>
            <h2 className="legal-section__title">Location Information</h2>
            <div className="legal-section__body">
              <p>To provide accurate delivery services, we may collect location data:</p>
              <div className="legal-card">
                <h3 className="legal-card__title">Location Data</h3>
                <ul className="legal-list">
                  {locationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>
                Location access is only used to facilitate delivery services. You can manage permissions through your
                device settings at any time.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 06</p>
            <h2 className="legal-section__title">Purpose of Collection</h2>
            <div className="legal-section__body">
              <p>We use your information for the following purposes:</p>
              <div className="legal-cards legal-cards--2">
                {purposeItems.map((item) => (
                  <div key={item.title} className="legal-card legal-card--compact">
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 07</p>
            <h2 className="legal-section__title">Sharing of Information</h2>
            <div className="legal-section__body">
              <p>We may share your information with the following parties:</p>
              <div className="legal-pills">
                {sharingParties.map((item) => (
                  <span key={item.label} className="legal-pill">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
              <p>We do not sell your personal information to third parties.</p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 08</p>
            <h2 className="legal-section__title">Data Security</h2>
            <div className="legal-section__body">
              <p>We implement commercially reasonable security measures to protect your information:</p>
              <ul className="legal-list">
                {securityMeasures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                However, no method of transmission over the internet is completely secure. We cannot guarantee absolute
                security of your data.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 09</p>
            <h2 className="legal-section__title">Data Retention</h2>
            <div className="legal-section__body">
              <p>We retain personal information only for as long as necessary to:</p>
              <ul className="legal-list">
                <li>Provide our services to you</li>
                <li>Comply with applicable legal and regulatory obligations</li>
                <li>Resolve disputes or enforce our agreements</li>
                <li>Maintain accurate business records</li>
              </ul>
              <p>
                Upon expiry of the retention period, data is securely deleted or anonymized in accordance with our
                internal data governance policies.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 10</p>
            <h2 className="legal-section__title">User Rights</h2>
            <div className="legal-section__body">
              <p>Subject to applicable laws, you have the following rights:</p>
              <div className="legal-cards legal-cards--2">
                {userRights.map((item) => (
                  <div key={item.title} className="legal-card legal-card--compact">
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
              <p>
                Requests may be submitted to:{' '}
                <a href="mailto:hello@eatskart.com" className="legal-contact__email">hello@eatskart.com</a>
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 11</p>
            <h2 className="legal-section__title">Cookies &amp; Tracking Technologies</h2>
            <div className="legal-section__body">
              <p>We may use cookies and similar technologies to:</p>
              <ul className="legal-list">
                {cookieUses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Users may disable cookies through browser settings. However, disabling cookies may affect some features
                of the platform.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 12</p>
            <h2 className="legal-section__title">Third-Party Services</h2>
            <div className="legal-section__body">
              <p>
                eatskart may integrate with third-party providers including payment gateways, logistics providers, and
                analytics services. Such third-party providers maintain their own privacy policies, which govern the
                collection and use of your information by those providers. We encourage you to review the privacy
                policies of all third-party services you interact with.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 13</p>
            <h2 className="legal-section__title">Children&apos;s Privacy</h2>
            <div className="legal-section__body">
              <p>
                eatskart is not intended for individuals below the age of 18 years. We do not knowingly collect personal
                information from minors. If we become aware that a minor has provided us with personal information, we
                will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 14</p>
            <h2 className="legal-section__title">Changes to Privacy Policy</h2>
            <div className="legal-section__body">
              <p>
                We reserve the right to modify this Privacy Policy at any time. Updated versions shall become effective
                upon publication on our platform. We encourage you to periodically review this Privacy Policy to stay
                informed about how we are protecting your information. Your continued use of eatskart after any changes
                constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </section>

          <section className="legal-section legal-section--last">
            <p className="legal-section__label">Section 15</p>
            <h2 className="legal-section__title">Contact Information</h2>
            <div className="legal-section__body">
              <div className="legal-contact">
                <p className="legal-contact__brand">eatskart – A YAKA Brand</p>
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

export default PrivacyPolicy;

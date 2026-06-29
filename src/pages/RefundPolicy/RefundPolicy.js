import '../legal/LegalPage.css';

const restaurantCancellationReasons = [
  'Specific menu item or product unavailability',
  'Operational issues or temporary closure',
  'Technical failures affecting order processing',
  'Force majeure events beyond the restaurant\'s control',
];

const eatskartCancellationReasons = [
  { icon: '🛡️', title: 'Suspected Fraud', text: 'Orders flagged for fraudulent or suspicious activity.' },
  { icon: '💳', title: 'Payment Failure', text: 'Failure to successfully authorize or capture payment.' },
  { icon: '📍', title: 'Delivery Infeasibility', text: 'Inability to deliver to the specified location.' },
  { icon: '⚖️', title: 'Regulatory Restrictions', text: 'Legal or regulatory requirements preventing fulfillment.' },
];

const refundEligibleSituations = [
  'Failed payment transactions where money was debited but order was not placed',
  'Duplicate payment charges for the same order',
  'Non-delivery of confirmed and paid orders',
  'Delivery of incorrect items not matching the order',
  'Missing items from the delivered order',
  'Verified quality issues confirmed by EatsKart upon review',
];

const nonRefundableSituations = [
  'Change of mind after order preparation has begun',
  'Minor variations in taste, presentation, or portion size',
  'Delivery delays caused by customer unavailability at the delivery address',
  'Incorrect or incomplete delivery address provided by the customer',
  'Refusal to accept delivery without valid reason',
  'Items consumed fully or partially before raising a complaint',
];

const refundTimelines = [
  { icon: '📱', method: 'UPI', timeline: '3 – 7 business days', speed: 'Fastest' },
  { icon: '💳', method: 'Debit / Credit Cards', timeline: '5 – 10 business days', speed: 'Standard' },
  { icon: '🏦', method: 'Net Banking', timeline: '5 – 12 business days', speed: 'Variable' },
];

const walletTerms = [
  { icon: '💰', title: 'No Cash Value', text: 'Promotional credits and coupons cannot be exchanged for cash or transferred to a bank account.' },
  { icon: '🔒', title: 'Non-Transferable', text: 'Credits and reward points are personal to your account and cannot be transferred to another user.' },
  { icon: '❌', title: 'Non-Refundable', text: 'Promotional offers and reward points are generally non-refundable unless otherwise explicitly stated.' },
];

function RefundPolicy({ onClose }) {
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
          <span>Refund Policy</span>
        </nav>

        <header className="legal-hero">
          <p className="section-subtitle">Legal</p>
          <h1 className="legal-hero__title">Refund Policy</h1>
          <p className="legal-hero__desc">
            Understand how cancellations and refunds work on EatsKart, including eligibility, timelines, and how to
            raise a dispute.
          </p>
          <p className="legal-hero__updated">Last updated: June 2026</p>
        </header>

        <div className="legal-sections">
          <section className="legal-section">
            <p className="legal-section__label">Section 01</p>
            <h2 className="legal-section__title">Order Cancellation by User</h2>
            <div className="legal-section__body">
              <p>
                Users may cancel their order only before the restaurant has accepted the order for preparation. Once a
                restaurant begins food preparation, cancellation may not be permitted and a refund may not be applicable.
              </p>
              <p>
                To cancel an order, navigate to &quot;My Orders&quot; in the app and select &quot;Cancel Order&quot;
                while the order status is still &quot;Pending Restaurant Acceptance&quot;.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 02</p>
            <h2 className="legal-section__title">Cancellation by Restaurant</h2>
            <div className="legal-section__body">
              <p>A restaurant partner may cancel an accepted order under the following circumstances:</p>
              <ul className="legal-list">
                {restaurantCancellationReasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                In case of restaurant-initiated cancellation, eligible refunds shall be processed automatically to your
                original payment method.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 03</p>
            <h2 className="legal-section__title">Cancellation by EatsKart</h2>
            <div className="legal-section__body">
              <p>EatsKart reserves the right to cancel orders in the following situations:</p>
              <div className="legal-cards legal-cards--2">
                {eatskartCancellationReasons.map((item) => (
                  <div key={item.title} className="legal-card">
                    <span className="legal-card__icon" aria-hidden="true">{item.icon}</span>
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 04</p>
            <h2 className="legal-section__title">Refund Eligibility</h2>
            <div className="legal-section__body">
              <p>Refunds may be considered and processed for the following verified situations:</p>
              <ul className="legal-list">
                {refundEligibleSituations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Refund approval is subject to thorough review and verification by EatsKart. Claims must be supported
                with relevant evidence such as photos or order screenshots.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 05</p>
            <h2 className="legal-section__title">Non-Refundable Situations</h2>
            <div className="legal-section__body">
              <p>Refunds will generally not be granted in the following cases:</p>
              <ul className="legal-list">
                {nonRefundableSituations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 06</p>
            <h2 className="legal-section__title">Refund Processing Timeline</h2>
            <div className="legal-section__body">
              <p>
                Once a refund is approved, the processing time depends on your original payment method. Below is the
                expected timeline for refunds:
              </p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Payment Method</th>
                      <th>Timeline</th>
                      <th>Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refundTimelines.map((row) => (
                      <tr key={row.method}>
                        <td>
                          <span aria-hidden="true">{row.icon} </span>
                          {row.method}
                        </td>
                        <td>{row.timeline}</td>
                        <td>
                          <span className="legal-table__speed">{row.speed}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Actual timelines depend upon banking partners and may vary. Business days exclude public holidays.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <p className="legal-section__label">Section 07</p>
            <h2 className="legal-section__title">Wallet Credits &amp; Promotional Offers</h2>
            <div className="legal-section__body">
              <p>The following terms apply to wallet credits, coupons, discounts, and reward points:</p>
              <div className="legal-cards legal-cards--3">
                {walletTerms.map((item) => (
                  <div key={item.title} className="legal-card">
                    <span className="legal-card__icon" aria-hidden="true">{item.icon}</span>
                    <h3 className="legal-card__title">{item.title}</h3>
                    <p className="legal-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="legal-section legal-section--last">
            <p className="legal-section__label">Section 08</p>
            <h2 className="legal-section__title">Dispute Resolution</h2>
            <div className="legal-section__body">
              <div className="legal-highlight">
                <span className="legal-highlight__icon" aria-hidden="true">⏱️</span>
                <div>
                  <h3 className="legal-highlight__title">Report Within 48 Hours</h3>
                  <p className="legal-highlight__subtitle">Refund dispute window</p>
                  <p>All refund-related disputes must be raised within 48 hours of order delivery.</p>
                  <p>Disputes reported after 48 hours of delivery may not be eligible for refund review.</p>
                  <p>All claims are reviewed individually on a case-by-case basis.</p>
                </div>
              </div>
              <div className="legal-contact">
                <p className="legal-contact__brand">Contact Support</p>
                <a href="mailto:hello@eatskart.com" className="legal-contact__email">hello@eatskart.com</a>
                <p>
                  EatsKart – A YAKA Brand, Sattva Knowledge City, Hi-Tech City, 500081, Telangana, India
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default RefundPolicy;

import './DeliveringForEveryone.css';

const CARDS = [
  {
    title: 'Restaurant Partners',
    text: 'Unlock endless delivery demands, digital tableside, and real-time orders metrics via Merchant Dashboard.',
  },
  {
    title: 'Delivery Partners',
    text: 'Enjoy flexible shifts, weekly compensation systems, and high-quality safety gear on us.',
  },
  {
    title: 'Business Partners',
    text: 'Integrate APIs, custom food rewards, and corporate event accounts directly into workspace.',
  },
];

function DeliveringForEveryone() {
  return (
    <section className="delivering" id="our-partners">
      <span id="partner-with-us" className="delivering__anchor" />
      <div className="container">
        <div className="delivering__header">
          <p className="delivering__label">Delivering For Everyone</p>
          <h2 className="delivering__title">When our partners grow, we grow.</h2>
        </div>

        <ul className="delivering__grid">
          {CARDS.map((card) => (
            <li key={card.title} className="delivering__card">
              <h3 className="delivering__card-title">{card.title}</h3>
              <p className="delivering__card-text">{card.text}</p>
            </li>
          ))}
        </ul>

        <div className="delivering__cta-wrap">
          <a href="#partner-with-us" className="delivering__cta">
            Become an EatsKart Partner <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DeliveringForEveryone;

import './VisionMission.css';

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

const ITEMS = [
  {
    title: 'Our Vision',
    text: "To become one of India's most trusted food-tech platforms by making food discovery, ordering and delivery effortless for everyone.",
    icon: <EyeIcon />,
  },
  {
    title: 'Our Mission',
    text: 'Build technology that connects people with great food while creating meaningful opportunities for restaurants and delivery partners.',
    icon: <TargetIcon />,
  },
];

function VisionMission() {
  return (
    <section className="vision-mission" id="technology">
      <div className="container vision-mission__inner">
        <div className="vision-mission__copy">
          <p className="vision-mission__label">Our Vision &amp; Our Mission</p>
          <h2 className="vision-mission__title">
            <span className="vision-mission__title-accent">Making every</span>
            <br />
            <span className="vision-mission__title-accent">
              meal moment easier.
            </span>
          </h2>
          <p className="vision-mission__intro">
            EatsKart brings customers, restaurants and delivery partners
            together on one connected platform. From discovering your next
            favourite meal to getting it delivered to your doorstep, we use
            technology to make every step easier.
          </p>

          <div className="vision-mission__list">
            {ITEMS.map((item) => (
              <div key={item.title} className="vision-mission__item">
                <span className="vision-mission__icon">{item.icon}</span>
                <div>
                  <h3 className="vision-mission__item-title">{item.title}</h3>
                  <p className="vision-mission__item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vision-mission__visual">
          <div className="vision-mission__figure">
            <div className="vision-mission__glow" aria-hidden="true" />
            <img
              src="/images/corporate/vision-hand.png"
              alt="Hand holding the glowing EatsKart mark"
              className="vision-mission__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;

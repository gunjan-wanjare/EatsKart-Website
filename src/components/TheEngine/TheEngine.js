import './TheEngine.css';

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16.5L20.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function NavIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 11.2L20 4.5 13.4 20l-2.2-6.3L4.5 11.2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12h4l2.2-5 3.6 10 2.4-5H21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 1 1-8.5 8.5H12V3.5z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5A8.5 8.5 0 0 0 3.5 12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function EngineIcon() {
  return (
    <img src="/vector/engine.svg" alt="" width={18} height={18} aria-hidden="true" />
  );
}

const CARDS = [
  {
    title: 'Smart Discovery',
    text: 'AI-driven recommendation feed mapping perfectly to personal taste and previous order profiles.',
    icon: <SearchIcon />,
  },
  {
    title: 'Intelligent Delivery',
    text: 'Dynamic dispatch algorithm matching delivery routes to ensure food arrives piping hot.',
    icon: <NavIcon />,
  },
  {
    title: 'Real-Time Tracking',
    text: 'GPS routing updates tracking the food preparation progress and dispatcher location live.',
    icon: <PulseIcon />,
  },
  {
    title: 'Restaurant Intelligence',
    text: 'Demand analytics, preparation timelines, and menu performance reports for partners.',
    icon: <ChartIcon />,
  },
  {
    title: 'Scalable Infrastructure',
    text: 'Handling million daily orders securely with high availability cloud architecture.',
    icon: <EngineIcon />,
  },
];

function TheEngine() {
  return (
    <section className="the-engine" id="engine">
      <div className="container">
        <div className="the-engine__header">
          <p className="the-engine__label">The Engine</p>
          <h2 className="the-engine__title">
            <span className="the-engine__title-accent">Technology</span> behind every order.
          </h2>
        </div>

        <ul className="the-engine__grid">
          {CARDS.map((card) => (
            <li key={card.title} className="the-engine__card">
              <span className="the-engine__icon">{card.icon}</span>
              <h3 className="the-engine__card-title">{card.title}</h3>
              <p className="the-engine__card-text">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TheEngine;

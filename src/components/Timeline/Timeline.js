import './Timeline.css';

const MILESTONES = [
  {
    year: '2021',
    title: 'The Beginning',
    text: 'Launched in Ahmedabad with 10 restaurant partners and a small dedicated delivery squad.',
  },
  {
    year: '2022',
    title: 'First Customers',
    text: 'Reached 100k+ organic customers, expanding service zones and dynamic routing updates.',
  },
  {
    year: '2023',
    title: 'Growing the Network',
    text: 'Onboarded thousands of restaurants, launching our optimized merchant dashboard system.',
  },
  {
    year: '2024',
    title: 'Expanding Experience',
    text: 'Introducing AI search predictions, gourmet partner tiers, and subscription programs.',
  },
  {
    year: '2026',
    title: "What's Next",
    text: 'Expanding into micro-fulfillment tech and zero-emissions delivery logistics.',
  },
];

function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <div className="container">
        <div className="timeline__header">
          <p className="timeline__label">Timeline</p>
          <h2 className="timeline__title">From an idea to a growing food ecosystem.</h2>
        </div>

        <ol className="timeline__list">
          {MILESTONES.map((item, index) => (
            <li key={item.year} className="timeline__item">
              <div className="timeline__node">
                {index > 0 ? <span className="timeline__dot" aria-hidden="true" /> : null}
                <p className="timeline__year">{item.year}</p>
                <span className="timeline__seg" aria-hidden="true" />
                {index === MILESTONES.length - 1 ? (
                  <span className="timeline__end-dot" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="timeline__item-title">{item.title}</h3>
              <p className="timeline__item-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;

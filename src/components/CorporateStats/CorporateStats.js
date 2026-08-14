import './CorporateStats.css';

const STATS = [
  { value: 'XX+', label: 'Restaurant Partners' },
  { value: 'XX+', label: 'Delivery Partners' },
  { value: 'XX+', label: 'Cities Served' },
  { value: 'XXM+', label: 'Orders Delivered' },
  { value: 'XXK+', label: 'Daily Orders' },
];

function CorporateStats() {
  return (
    <section className="corp-stats" aria-label="EatsKart in numbers">
      <div className="container corp-stats__inner">
        {STATS.map((stat) => (
          <div key={stat.label} className="corp-stats__item">
            <span className="corp-stats__value">{stat.value}</span>
            <span className="corp-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CorporateStats;

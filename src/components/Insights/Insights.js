import './Insights.css';

const STORIES = [
  {
    image: '/images/insights/city.jpg',
    alt: 'Aerial view of a city with a river and bridges',
    category: 'Company News',
    title: 'EatsKart reaches milestone city coverage expansion',
    date: 'Jan 12, 2026',
    href: '#news-city-coverage',
  },
  {
    image: '/images/insights/search.jpg',
    alt: 'Smartphone showing a search interface',
    category: 'Product Updates',
    title: 'Announcing predictive personalized search features',
    date: 'Feb 05, 2026',
    href: '#news-predictive-search',
  },
  {
    image: '/images/insights/diner.jpg',
    alt: 'Warm-lit diner filled with people dining',
    category: 'Restaurant Stories',
    title: 'How a family-run diner grew sales by 150%',
    date: 'Feb 20, 2026',
    href: '#news-diner-growth',
  },
];

function Insights() {
  return (
    <section className="insights" id="news">
      <div className="container">
        <div className="insights__header">
          <p className="insights__label">Insights</p>
          <h2 className="insights__title">What&apos;s happening at EatsKart</h2>
        </div>

        <ul className="insights__grid">
          {STORIES.map((story) => (
            <li key={story.title} className="insights__card">
              <div className="insights__image-wrap">
                <img src={story.image} alt={story.alt} className="insights__image" />
              </div>
              <p className="insights__category">{story.category}</p>
              <h3 className="insights__card-title">{story.title}</h3>
              <div className="insights__footer">
                <time className="insights__date">{story.date}</time>
                <a href={story.href} className="insights__link">
                  Read story
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Insights;

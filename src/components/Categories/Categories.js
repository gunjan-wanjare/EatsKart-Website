import categories from '../../data/categories';
import './Categories.css';

const MARQUEE_ITEMS = [...categories, ...categories];

function Categories() {
  return (
    <section className="categories" id="popular-cuisines">
      <div className="container categories__inner">
        <div className="categories__header">
          <p className="categories__subtitle">Because Every Mood Deserves Great Food</p>
          <h2 className="categories__title">From Local Favorites to Global Flavors</h2>
        </div>
      </div>

      <div className="categories__marquee" aria-label="Food categories">
        <div className="categories__track">
          {MARQUEE_ITEMS.map((cat, index) => (
            <div key={`${cat.id}-${index}`} className="categories__item">
              <div className="categories__card">
                <span className="categories__icon">
                  <img src={cat.image} alt="" />
                </span>
                <span className="categories__name">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

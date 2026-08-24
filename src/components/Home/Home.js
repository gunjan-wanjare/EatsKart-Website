import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';
import HeroYakaAnchor from '../HeroYakaAnchor/HeroYakaAnchor';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home__hero-wrap">
        <Hero />
        <HeroYakaAnchor />
      </div>
      <Categories />
    </section>
  );
}

export default Home;

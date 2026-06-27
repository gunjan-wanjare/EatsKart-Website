import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <Hero />
      <Categories />
    </section>
  );
}

export default Home;

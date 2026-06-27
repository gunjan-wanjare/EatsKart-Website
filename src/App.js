import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import AppPromo from './components/AppPromo/AppPromo';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Restaurants />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
}

export default App;


import Hero from './components/Hero';
import "./assets/scss/main.scss";
import Service from './components/Services';
import { service } from './assets/HelperFiles';
import Team from './components/Team';
import Footer from './components/Footer';
import Transaction from './components/Transaction';

function App() {
  return (
    <div className="skylark">
      <header className='skylark-header'>
        <Hero />
      </header>
      <section className="skylark-service">
        <Service service={service} />
      </section>
      <section className="skylark-transaction">
        <Transaction />
      </section>
      <section className="skylark-team">
        <Team />
      </section>
      <section className="skylark-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

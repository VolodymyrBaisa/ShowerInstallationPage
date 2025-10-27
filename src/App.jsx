import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
import { Process } from './components/Process.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { Callout } from './components/Callout.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

const App = () => (
  <div className="page">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Callout />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;

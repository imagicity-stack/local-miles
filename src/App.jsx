import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Collective from './components/Collective.jsx';
import Experiences from './components/Experiences.jsx';
import Join from './components/Join.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collective />
        <Experiences />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

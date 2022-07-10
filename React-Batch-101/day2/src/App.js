import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

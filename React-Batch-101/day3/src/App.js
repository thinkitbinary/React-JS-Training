import { useState } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  const [items, setItems] = useState([])

  const handleDecrease = () => {
    if (items.length > 0) {
      let newItems = [...items]
      newItems.pop()
      setItems(newItems)
    }
  }

  const handleIncrease = () => {
    let newItems = [...items]
    newItems.push(newItems.length+1)
    setItems(newItems)
  }

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      &nbsp; {items.length} &nbsp;
      <button onClick={handleIncrease}>+</button>
      <br />
      {items}
      {/* <Navbar name={name} age={12}/>
      <Hero />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

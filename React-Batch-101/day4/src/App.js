import { useState } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  const [name, setName] = useState("") // for text field state

  const handleNameChange = (e) =>{
    const nameValue = e.target.value
    setName(nameValue)
  }

  const [items, setItems] = useState([]) // for Items state

  const handleRemoveItem = () => {
    if (items.length > 0) {
      let newItems = [...items]
      newItems.pop()
      setItems(newItems)
    }
  }

  const handleAddItem = () => {
    if (name){
      let newItems = [...items, name]
      console.log(newItems)
      setItems(newItems)
      setName("")
    }
    else{
      alert("not a valid name")
    }
  }

  return (
    <div>
      <input 
        name="name"
        value={name}
        onChange={(e)=>handleNameChange(e)}
        type="text" 
        placeholder='item name'
      />
      &nbsp;
      <button onClick={handleAddItem}>Add Item</button>
      &nbsp;
      <button onClick={handleRemoveItem} >Remove Item</button>
      <br />
      {items.length>0 
        ? items.map((ele, index) => <p key={index} style={{ fontSize:"2rem"}}>{ele}</p>)
        : <p>No Items Present</p>
      }
      {/* <Navbar name={name} age={12}/>
      <Hero />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

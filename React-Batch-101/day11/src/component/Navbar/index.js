import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Navbar = () => {
  const counter = useSelector(state => state.counter.value)
  return (
    <div style={{ backgroundColor:"gray", padding: '.5rem 1rem'}}>
        <span style={{ color:"white", fontSize:"2rem", fontWeight:600}}>Our Store - {counter}</span>
    </div>
  )
}

export default Navbar
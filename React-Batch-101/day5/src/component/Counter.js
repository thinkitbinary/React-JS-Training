import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCounter] = useState(0)

  const handleDecreae = () => {
    setCounter(cur => cur - 1) // prev is current value
  }
  const handleIncrease = () => {
    setCounter(cur => cur + 1)
  }

// lifecycle of a component
// Mount  -- component mounts
// Update -- component updates
// Unmount -- compnent unmounts

  const message = () =>{
    console.log("Hello")
  } 

  useEffect(()=>{
    message()
  }, [count])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem", gap: "1rem" }}>
      <h2>Counter Application</h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}>
        <button onClick={handleDecreae}>Decrease</button>
        <h2>{count}</h2>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
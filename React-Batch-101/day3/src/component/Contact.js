import React from 'react'
import { styles } from './styles'

const Contact = () => {
  return (
    <div style={{ ...styles.box, ...styles.contact}}>
      <div style={{ ...styles.contact_header}}>
        Contact Us
      </div>
      <div style={{ ...styles.contact_form}}>
        <input type="email" placeholder='Enter your email' style={{ ...styles.input}}/>
        <button style={{ ...styles.button}}>Contact</button>
      </div>
    </div>
  )
}

export default Contact
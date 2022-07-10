import React from 'react'
import { styles } from './styles'
import about from '../assets/about.svg'

const About = () => {
  return (
    <div style={{ ...styles.box, ...styles.about}}>
      <div style={{ ...styles.section_left}}>
        <img src={about} alt="about" width="300px"/>
      </div>
      <div style={{ ...styles.section_right, ...styles.about_text_box}}>
        <div style={{...styles.about_header}}>
          About Me
        </div>
        <div style={{ ...styles.about_desc}}>
          I am a Frontend Developer with 2+ years of Experience. 
          Having hands on experience with Reat JS, HTML, CSS, JS ..etc 
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import { styles } from './styles'
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <div style={{ ...styles.hero, ...styles.box }}>
      <div style={{ ...styles.section_left, ...styles.header_text }}>
        Hey!!! This is Rahul
      </div>
      <div style={{ ...styles.section_right }}>
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
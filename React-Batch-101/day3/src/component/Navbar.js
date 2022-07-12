import React from 'react'
import { styles } from './styles'
import './style.css'

const Navbar = (props) => {
    const {name, age} = {...props}
    console.log(name, age)
    return (
        <div style={{...styles.navbar, ...styles.box}}>
            {name}
        </div>
    )
}

export default Navbar
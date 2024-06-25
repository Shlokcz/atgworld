import React from 'react'
import Styles from "./header.module.css"

const Header = () => {
  return (
    <div className={Styles.header}>
        <h3>Computer Engineering</h3>
        <p>142,765 Computer Engineers follow this</p>
    </div>
  )
}

export default Header;
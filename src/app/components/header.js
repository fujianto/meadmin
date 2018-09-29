import React from 'react'
import styles from './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to='/'><h1 className="site-title">Dashboard App</h1></Link>
    </header>
  )
}

export default Header;
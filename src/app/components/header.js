import React from 'react'
import styles from './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <button className="toggle-drawer d-md-none" onClick={() => {}}><i className="fa fa-bars"></i></button>
      <Link to='/'><h1 className="site-title">Dashboard App</h1></Link>
    </header>
  )
}

export default Header;
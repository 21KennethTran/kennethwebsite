import React from 'react'
import { useState } from 'react'
import closeIcon from "../img/closeIcon.png";
import menuIcon from "../img/menuIcon.png";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="NavBar">
      <a className="Title" href="/">Portfolio</a>
      <div className='Menu'>
        <img
          className='MenuBtn'
          src={
            menuOpen
              ? closeIcon : menuIcon
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`MenuItems ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

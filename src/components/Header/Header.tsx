import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  const openClose = isOpen ? 'open' : 'close';
  const hamburger = `line ${isOpen ? 'line-rotate' : ''}`;

  return (
    <header>
      <nav className={`nav ${openClose}`}>
        <div className="nav__options">
          <NavLink className="logo" to="/">
            lunar
          </NavLink>
          <ThemeToggle />
          <div className="menu" onClick={closeMenu}>
            <span className={hamburger}></span>
            <span className={hamburger}></span>
            <span className={hamburger}></span>
          </div>
        </div>
        <ul className={`nav__list ${openClose}`}>
          <li className="nav__item">
            <NavLink to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/zodiac" activeClassName="active" onClick={closeMenu}>
              Zodiac Signs
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/tarot" activeClassName="active" onClick={closeMenu}>
              Tarots
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/numerology"
              activeClassName="active"
              onClick={closeMenu}
            >
              Numerology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

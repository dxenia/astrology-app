import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  const openClose = isOpen ? 'open' : 'close';
  const hamburger = `line ${isOpen ? 'line-rotate' : ''}`;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <header>
      <nav className={'nav'}>
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
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'active' : 'nav__link'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={
                location.pathname === '/about' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/zodiac"
              className={
                location.pathname === '/zodiac' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Zodiac Signs
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/tarot"
              className={
                location.pathname === '/tarot' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Tarots
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/numerology"
              className={
                location.pathname === '/numerology' ? 'active' : 'nav__link'
              }
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

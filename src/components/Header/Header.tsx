import { NavLink, useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';

import { ThemeContext } from '../../App';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const hamburger = isOpen ? 'line line-rotate' : 'line';

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="nav">
        <NavLink className="logo" to="/">
          lunar
        </NavLink>
        <button onClick={toggleTheme} className="theme-button">
          {theme === 'dark' ? (
            <span>🌞 Switch to light mode</span>
          ) : (
            <span>🌚 Switch to dark mode</span>
          )}
        </button>
        <div
          className="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={hamburger}></span>
          <span className={hamburger}></span>
          <span className={hamburger}></span>
        </div>
        <ul className={isOpen ? 'nav__list open' : 'nav__list'}>
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
              className={location.pathname === '/' ? 'active' : 'nav__link'}
              onClick={closeMenu}
            >
              Zodiac Signs
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/tarot"
              className={
                location.pathname === '/about' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Tarot Card Library
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/reading"
              className={
                location.pathname === '/reading' ? 'active' : 'nav__link'
              }
              onClick={closeMenu}
            >
              Card Reading
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

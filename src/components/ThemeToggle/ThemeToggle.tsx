import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle">
      <label className="toggle__switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="toggle__slider round"></span>
      </label>
    </div>
  );
}

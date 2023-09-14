import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from '../src/pages/Home/Home';
import About from './pages/About/About';
import Tarot from './pages/Tarot/Tarot';
import Zodiac from './pages/Zodiac/Zodiac';

import './App.css';

type ThemeContextType = {
  theme: string;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/tarot" element={<Tarot />} />
        </Routes>
        <button onClick={toggleTheme}>Switch theme</button>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

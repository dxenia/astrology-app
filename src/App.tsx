// App.js
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from '../src/pages/Home/Home';
import About from './pages/About/About';
import Tarot from './pages/Tarot/Tarot';
import Zodiac from './pages/Zodiac/Zodiac';
import ZodiacSignDetails from './pages/ZodiacSignDetails/ZodiacSignDetails';
import NotFound from './pages/NotFound/NotFound';
import CardReading from './pages/CardReading/CardReading';

import './App.css';

type Theme = 'light' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/zodiac/:id" element={<ZodiacSignDetails />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/reading" element={<CardReading />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

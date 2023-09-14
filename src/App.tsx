import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from '../src/pages/Home/Home';
import About from './pages/About/About';
import Tarot from './pages/Tarot/Tarot';
import Zodiac from './pages/Zodiac/Zodiac';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/tarot" element={<Tarot />} />
      </Routes>
    </>
  );
}

export default App;

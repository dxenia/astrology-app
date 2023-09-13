import { Route, Routes } from 'react-router-dom';

import Home from '../src/pages/Home/Home';
import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

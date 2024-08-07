import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gadgets from './pages/Gadgets';
import './styles/style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gadgets" element={<Gadgets />} />
      </Routes>
    </Router>
  );
}

export default App;

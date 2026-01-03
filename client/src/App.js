// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Advisory from './pages/Advisory';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Professional Header */}
      <header style={{
        background: '#0A1A2F',
        padding: '15px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>
          Consultancy Firm
        </div>
        <nav>
          <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <Link to="/team" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' }}>Team</Link>
          <Link to="/advisory" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' }}>Advisory</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
        </nav>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
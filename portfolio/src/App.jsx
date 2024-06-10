import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Footer from './pages/footer';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
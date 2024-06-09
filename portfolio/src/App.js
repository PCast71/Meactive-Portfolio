import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';
import About from './pages/About';
import LiveMusic from './pages/LiveMusic';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Cake from './pages/Cake';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<LiveMusic />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
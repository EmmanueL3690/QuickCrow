import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Order from './pages/Order';
import Service from './pages/Service';
import Profile from './pages/Profile';

function App() {
  return (
   <Router basename="/vite-project--QuickCrow">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/order" element={<Order />} /> 
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;






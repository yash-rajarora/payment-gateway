import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Home from './Components/Home/Home';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} exact path='/' />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

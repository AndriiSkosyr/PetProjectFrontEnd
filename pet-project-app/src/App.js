import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Settings from './Pages/settings';
import Profile from './Pages/profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;

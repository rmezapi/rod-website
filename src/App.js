import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Cs from './components/pages/Cs'
import Arts from './components/pages/Arts';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/computer-science' exact Component={Cs} />
          <Route path='/arts' exact Component={Arts} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

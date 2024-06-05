import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Cs from './components/pages/Cs'
import Arts from './components/pages/Arts';
import Digital from './components/pages/Digital';
import Film from './components/pages/Film';
import Printmaking from './components/pages/Printmaking';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/computer-science' exact Component={Cs} />
          <Route path='/arts' exact Component={Arts} />
          <Route path='/arts/digital' exact Component={Digital} />
          <Route path='/arts/film' exact Component={Film} />
          <Route path='/arts/printmaking' exact Component={Printmaking} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

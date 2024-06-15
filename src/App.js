import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Cs from './components/pages/Cs'
import Arts from './components/pages/Arts';
import Digital from './components/pages/Digital';
import Film from './components/pages/Film';
// import Printmaking from './components/pages/Printmaking';
import Contact from './components/pages/Contact';
import Climbing from './components/pages/DigitalClimbing';
import BikingAdv from './components/pages/BikingAdv';
import DFriends from './components/pages/DFriends';
import Grad from './components/pages/Grad';
import InConversation from './components/pages/InConversation';
import Kt from './components/pages/Kt';
import Night from './components/pages/Night';
import Scuba from './components/pages/Scuba';
import Yosemite from './components/pages/Yosemite';
import FilmBiking from './components/pages/FilmBiking';
import Bouldering from './components/pages/Bouldering';
import FilmMtb from './components/pages/FilmMtb';
import FilmRoad from './components/pages/FilmRoad';
import SaintSimon from './components/pages/SaintSimon';
import FilmFriends from './components/pages/FilmFriends';



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
          <Route path='/arts/digital/climbing' exact Component={Climbing} />
          <Route path='/arts/digital/biking-adventures' exact Component={BikingAdv} />
          <Route path='/arts/digital/friends' exact Component={DFriends} />
          <Route path='/arts/digital/graduation' exact Component={Grad} />
          <Route path='/arts/digital/in-conversation' exact Component={InConversation} />
          <Route path='/arts/digital/kt' exact Component={Kt} />
          <Route path='/arts/digital/night' exact Component={Night} />
          <Route path='/arts/digital/scuba' exact Component={Scuba} />
          <Route path='/arts/digital/yosemite' exact Component={Yosemite} />

          <Route path='/arts/film' exact Component={Film} />
          <Route path='/arts/film/biking' exact Component={FilmBiking} />
          <Route path='/arts/film/bouldering' exact Component={Bouldering} />
          <Route path='/arts/film/friends' exact Component={FilmFriends} />
          <Route path='/arts/film/road-cycling' exact Component={FilmRoad} />
          <Route path='/arts/film/mtb' exact Component={FilmMtb} />
          <Route path='/arts/film/st-simon' exact Component={SaintSimon} />
          


          {/* <Route path='/arts/printmaking' exact Component={Printmaking} /> */}

          <Route path='/contact' exact Component={Contact} />

        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;

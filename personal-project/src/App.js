import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import React from 'react';
import PersonalLife from './Components/AboutMe/PersonalLife.jsx';
import WorkLife from './Components/AboutMe/WorkLife.jsx';
import Rugby from './Components/AboutMe/Rugby.jsx';
import DisplayScoreboard from './Components/Scoreboards/DisplayScoreboard.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <div class="p-3 mb-2 bg-warning text-dark" style={{ overflow: "auto" }}>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-item nav-link active" to="/Home">Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-item nav-link active" to='/AboutMe'>About Me</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-item nav-link active" to='/DisplayScoreboard'>Scoreboard</Link>
              </li>
            </div>
          </div>
        </nav>
        <div >
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Home' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/PersonalLife' element={<PersonalLife />} />
            <Route path='/WorkLife' element={<WorkLife />} />
            <Route path='/Rugby' element={<Rugby />} />
            <Route path='/DisplayScoreboard' element={<DisplayScoreboard/>} />
            
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
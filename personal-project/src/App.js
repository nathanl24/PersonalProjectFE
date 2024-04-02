import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home.jsx';
import Creations from './Components/Creations/Creations.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import React from 'react';
// Logo import


function App() {
  return (
  <div class="p-3 mb-2 bg-warning text-dark" style={{ overflow: "auto" }}>
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#"></a>
        <Link to="/Home">
            <img src={Logo} alt='Logo Icon' className="navbar-brand" width="75px" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-item nav-link active" to="/Home">Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-item nav-link active" to='/Creations'>Creations</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-item nav-link active" to='/AboutMe'>About Me</Link>
              </li>
          </div>
          </div>
      </nav>
      <div >
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Creations' element={<Creations/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
        </Routes>
      </div>

    </Router>
  </div>
  );
}

export default App;
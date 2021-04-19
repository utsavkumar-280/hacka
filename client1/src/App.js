import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import './App.css';
import HomeImg from './assets/home.svg';
import AboutImg from './assets/about.svg';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navBar">
          <div className="navHead">
            <i className="fas fa-bars"></i>
            <div >1806359</div>
          </div>
        <ul>
            <li>
              
						<Link to="/"><img src={HomeImg} alt="" /> Home</Link>
            </li>
            <li>
              <Link to="/about"><img src={AboutImg} alt="" /> About me</Link>
            </li>
          </ul>
        </nav>
				
        <div className="mainContent">
          <Switch>
					<Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
				</Switch>
        </div>
				
			</div>
		</Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Main from './Pages/Main'
import SavePage from './Pages/SavePage'
import SearchPage from './Pages/SearchPage'

class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/saved">Saved</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/saved" component={SavePage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path='/' component={Main} />
            </div>
      </div>
      </Router>

    );
  }
}

export default App;

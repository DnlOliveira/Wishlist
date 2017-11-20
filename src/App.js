import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className='container-fluid' id='main-wrap'>
        <Router>
          <div>
            <Route exact path='/' component={ Welcome } />
            <Route path='/home' component= { Home } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Header from './components/shared/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';

class App extends Component {

  state = {
    LoggedUser: ''
  }

  componentDidUpdate() {
    console.log(this.state.LoggedUser);
  }

  updateState(user) {
    this.setState({
      LoggedUser: user
    });
  }

  render() {
    return (
      <div className='container-fluid' id='main-wrap'>
        <Router>
          <div>
            <Header LoggedUser={this.state.LoggedUser} />
            <Route exact path='/' render={ data => {
              return <Welcome updateState={this.updateState.bind(this)} />
            }} />
            <Route path='/home' render= { data => {
              return <Home LoggedUser={this.state.LoggedUser} />
            } } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

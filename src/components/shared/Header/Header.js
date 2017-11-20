import React, { Component } from 'react'

// css
import './Header.css';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  } //constructor

  render() {
    if (this.state.loggedIn) {
      return (
        <div className='container-fluid nav'>
          <div id='logo'>
            <img src='' />
          </div>

          <div id='log-status'>
            <a href='#'>Log out</a>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='container-fluid nav'>
          <div id='logo'>
            <a href='#'>Wishlists</a>
          </div>

          <div id='log-status'>
            <a href='#'>Log In</a>
          </div>
        </div>
      );
    }

  } // render function

} // Class Main

export default Main

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Login.css';


class Login extends Component {

  handleLogin(event) {
    event.preventDefault();

    console.log("login submitted")

    window.location.replace("/home");

  }

  render() {
    return (
      <div className='container-fluid' id='#login-wrap'>
        <div id='login-box'>
          <span>Login</span>
          <form onSubmit={this.handleLogin}>
            <input type='text' placeholder='Username' name='username' />
            <input type='text' placeholder='Password' name='password' />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login

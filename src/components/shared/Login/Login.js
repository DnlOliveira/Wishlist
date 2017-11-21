import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Login.css';

import utils from '../../../helpers/utils';


class Login extends Component {

  handleLogin(event) {
    event.preventDefault();

    let user = event.target.username.value;
    let pass = event.target.password.value;
    const cred = {
      "user": user,
      "pass": pass
    }

    utils.checkCred(user)
    .then( (response) => {
      console.log(response)
      let dbpass = response.data.credentials.password;

      if (dbpass === pass) {
        window.location.replace("/home/family");
      }
      else {
        alert ("wrong password");
      }

    });
  }

  render() {
    return (
      <div className='container-fluid' id='login-wrap'>
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

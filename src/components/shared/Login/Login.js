import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'

import './Login.css';

import utils from '../../../helpers/utils';


class Login extends Component {
  state = {
    fireRedirect: false
  }

  handleLogin(event) {
    event.preventDefault();   

    let user = event.target.username.value;
    let pass = event.target.password.value;
    const cred = {
      user: user,
      pass: pass
    }

    utils.checkCred(cred)
    .then( (response) => {

      let err = response.data.error;
      if (err) {
        alert(err);
      }
      else {
        this.props.updateState(response);
        this.setState({fireRedirect: true});
      }

    });
  }

  render() {
    const { fireRedirect } = this.state;

    return (
      <div className='container-fluid' id='login-wrap'>
        <div id='login-box'>
          <span>Login</span>
          <form onSubmit={this.handleLogin.bind(this)}>
            <input type='text' placeholder='Username' name='username' required />
            <input type='text' placeholder='Password' name='password' required />
            <button type='submit'>Login</button>
          </form>
          {fireRedirect && (
            <Redirect to={'/home/family'} />
          )}         
        </div>
      </div>
    );
  }
}

export default Login

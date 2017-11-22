import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    if (this.props.LoggedUser) {
      this.state = {
        url: this.props.LoggedUser.data.credentials.username
      }
    }
    else {
      this.state = {
        url: "notloggedin"
      }
    }

    
  }
  

  render() {
    return (
      <div id='navi'>
        <ul>
          <li><Link to='/home/family'>Family</Link></li>
          <li><Link to={`/home/list/${this.state.url}`}>My Wishlist</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav

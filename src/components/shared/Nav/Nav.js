import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div id='navi'>
        <ul>
          <li><Link to='/home/family'>Family</Link></li>
          <li><Link to='/home/mylist'>My Wishlist</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav

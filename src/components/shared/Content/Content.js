import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Content.css';

import Nav from '../Nav/Nav';
import List from '../List/List';
import ListGroups from '../ListGroups/ListGroups';


class Content extends Component {
  render() {
    return (
      <div id='content'>
        <Nav />
        <Route exact path='/home/family' component={ ListGroups } />
        <Route exact path='/home/mylist' component={ List } />
        <Route exact path='/home/list/:name' component={ List } />
      </div>
    );
  }
}

export default Content

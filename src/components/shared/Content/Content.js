import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Content.css';

import Nav from '../Nav/Nav';
import List from '../List/List';
import ListGroups from '../ListGroups/ListGroups';

import utils from '../../../helpers/utils';


class Content extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    utils.getAllLists()
    .then( res => {
      let arr = []

      res.data.forEach( object => {
        arr.push(object);
      })

      this.setState({
        users: arr
      });

    })
  }

  render() {
    return (
      <div id='content'>
        <Nav />
        <Route exact path='/home/family' render={ val => {
          return <ListGroups users={this.state.users} />
        }} />
        <Route exact path='/home/list/:name' component={ List } />
      </div>
    );
  }
}

export default Content

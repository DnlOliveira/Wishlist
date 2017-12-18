import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Content.css';

import Nav from '../Nav/Nav';
import List from '../List/List';
import ListGroups from '../ListGroups/ListGroups';

import utils from '../../../helpers/utils';


class Content extends Component {

  state = {
    users: [],
    list: ''
  }

  componentDidMount() {
    utils.getAllLists()
    .then( res => {
      let arr = []

      res.data.forEach( object => {
        arr.push(object);
      });

      this.setState({ users: arr });
    });
  }

  listUpdate(list) {
    this.setState({ list: list });
  }

  render() {
    return (
      <div id='content'>
        <Nav LoggedUser={this.props.LoggedUser} />
        <Route exact path='/home/family' render={ val => {
          return <ListGroups listUpdate={this.listUpdate.bind(this)} users={this.state.users} />
        }} />
        <Route exact path='/home/list/:name' render={ val => {
          return <List users={this.state.users} />
        }} />
      </div>
    );
  }
}

export default Content

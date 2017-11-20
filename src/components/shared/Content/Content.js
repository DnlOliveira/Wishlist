import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import List from '../List/List';
import ListGroups from '../ListGroups/ListGroups';


class Content extends Component {
  render() {
    return (
      <div>
        <Route exact path='/home/family' component={ ListGroups } />
        <Route exact path='/home/mylist' component={ List } />
      </div>
    );
  }
}

export default Content

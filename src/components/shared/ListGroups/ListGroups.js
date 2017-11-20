import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './ListGroups.css';

import PersonCard from '../PersonCard/PersonCard';


class ListGroups extends Component {
  state = {
    name: "Daniel"
  }

  render() {
    return (
      <div id='list-group'>
        <span>Wishlists</span>
        <Link to={ `/home/list/${this.state.name}` }><PersonCard /></Link>
      </div>
    );
  }
}

export default ListGroups

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import PersonCard from '../PersonCard/PersonCard';


class ListGroups extends Component {
  render() {
    return (
      <div>
        listGroups component
        <PersonCard />
      </div>
    );
  }
}

export default ListGroups

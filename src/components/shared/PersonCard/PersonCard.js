import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './PersonCard.css';


class PersonCard extends Component {
  render() {
    return (
      <div id='person-card'>
        <div id='card-wrapper'>
          <div id='avatar'></div>
          <span>fName Lname</span>
        </div>
      </div>
    );
  }
}

export default PersonCard

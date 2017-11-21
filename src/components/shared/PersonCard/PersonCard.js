import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './PersonCard.css';


class PersonCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div id='person-card'>
        <div id='card-wrapper'>
          <div id='avatar'></div>
          <div id='name-wrap'>
            <span>fName Lname</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard

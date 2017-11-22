import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Home.css';

import Content from '../shared/Content/Content';


class Home extends Component {
  render() {
    return (
      <div className='container-fluid' id='home'>
        <div id='content-holder'>
          <Content LoggedUser={this.props.LoggedUser} />
        </div>
      </div>
    )
  }
  
}

export default Home

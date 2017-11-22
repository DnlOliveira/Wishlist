import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Welcome.css';

// Components
import Login from '../shared/Login/Login';


class Welcome extends Component {

  render() {
    return (
      <div className='container-fluid' id='welcome'>
        <Login updateState={this.props.updateState.bind(this)}/>
      </div>
    )
  }
}

export default Welcome

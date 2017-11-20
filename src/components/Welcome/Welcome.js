import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Welcome.css';

// Components
import Header from '../shared/Header/Header';
import Login from '../shared/Login/Login';

const Welcome = () => (
  <div className='container-fluid' id='welcome'>
    <Header />
    <Login />
  </div>
)

export default Welcome

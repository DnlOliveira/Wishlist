import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Home.css';

import Header from '../shared/Header/Header';
import Content from '../shared/Content/Content';


const Home = () => (
  <div className='container-fluid' id='home'>
    <Header />

    <div id='content-holder'>
      <Content />
    </div>
  </div>
)

export default Home

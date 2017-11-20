import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Home.css';

import Header from '../shared/Header/Header';
import Nav from '../shared/Nav/Nav';
import Content from '../shared/Content/Content';


const Home = () => (
  <div className='container-fluid'>
    <Header />
    <Nav />
    <Content />
  </div>
)

export default Home

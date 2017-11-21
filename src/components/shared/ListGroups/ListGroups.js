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
        {this.props.users.map( (res, i) => {
          return (
            <div className='row'>
              <div className='col-md-12'>
                <Link to={ `/home/list/${this.props.users[i].credentials.username}` }><PersonCard key={this.props.users[i]._id} users={this.props.users[i]} /></Link>
              </div>
            </div>
          )
        })}
        
      </div>
    );
  }
}

export default ListGroups

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './ListGroups.css';

import PersonCard from '../PersonCard/PersonCard';


class ListGroups extends Component {

  render() {
    
    return (
      <div id='list-group'>
        <span>Wishlists</span>
        {this.props.users.map( (res, i) => {
          return (
            <div className='row'>
              <div className='col-md-12'>
                <Link to={ `/home/list/${this.props.users[i].credentials.username}` }>
                  <PersonCard listUpdate={this.props.listUpdate} key={this.props.users[i]._id} user={this.props.users[i]} />
                </Link>
              </div>
            </div>
          )
        })}
        
      </div>
    );
  }
}

export default ListGroups

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './List.css';


class List extends Component {
  constructor(props) {
    super(props);
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  state = {
    buttonClass: 'modified',
    field: false,
    input: ''
  }

  handleAddNew(){
    if (!this.state.field) {
      this.setState(
        {
          field: true,
          input: <div><input type='text' /><button>Save</button></div>
        });
      } else {
        this.setState(
          {
            field: false,
            input: ''
          });
      }  
  }
   

  render() { 
    return (
      <div id='list'>
        <div id='list-title'>
          <div>thumbnail</div>
          <h1>{this.props.match.params.name}</h1>
        </div>

        <div id='list-items'>
          <ul>
            
          </ul>
        </div>

        <div id='list-add'>
          <span>
            <button className={this.state.buttonClass} onClick={this.handleAddNew}>+</button><h3>Add new</h3>
          </span>

          <div id='add-new'>
            {this.state.input}
          </div>
        </div>
        
      </div>
    );
  }
}

export default List

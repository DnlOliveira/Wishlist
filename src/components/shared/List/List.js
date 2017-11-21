import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './List.css';

import utils from '../../../helpers/utils';


class List extends Component {
  constructor(props) {
    super(props);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  state = {
    buttonClass: 'modified',
    field: false,
    input: '',
    buttonLabel: 'Add New Gift'
  }

  handleAddNew(){
    if (!this.state.field) {
      this.setState(
        {
          field: true,
          input:
            <form onSubmit={this.handleSave}>
              <input name='item' type='text' /><button type='submit'>Save</button>
            </form>,
          buttonClass: 'regular',
          buttonLabel: 'Cancel'
        });
      } else {
        this.setState(
          {
            field: false,
            input: '',
            buttonClass: 'modified',
            buttonLabel: 'Add New Gift'
          });
      }  
  }

  handleSave(event) {
    event.preventDefault();
    console.log(event.target.item.value);
    this.setState(
      {
        field: false,
        input: '',
        buttonClass: 'modified',
        buttonLabel: 'Add New Gift'
      }
    );
    utils.saveItem(event.target.item.value);
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
            <button className={this.state.buttonClass} onClick={this.handleAddNew}>+</button><h5>{this.state.buttonLabel}</h5>
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

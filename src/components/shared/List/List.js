import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class List extends Component {
  render() {
    return (
      <div>
        <div>
          <div>thumbnail</div>
          <h1>{this.props.match.params.name}</h1>
        </div>

        <div>
          <ul>
            
          </ul>
        </div>
        
      </div>
    );
  }
}

export default List

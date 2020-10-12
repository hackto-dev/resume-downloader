import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='button-container'>
          <Link className='btn'>
            <span>Open Document</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default App;

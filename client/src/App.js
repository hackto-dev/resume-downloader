import React, { Component } from 'react';
import './App.css';
import MyPDF from './files/Resume.pdf';
import Draggable from 'react-draggable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Draggable onDrag={this.handleEvent}>
          <div className="button-container">
            <a href={MyPDF} download="Resume.pdf">
              <button class="btn">
                <span>Download Document</span>
              </button>
            </a>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;

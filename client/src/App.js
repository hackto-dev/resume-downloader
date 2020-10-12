import React, { Component } from 'react';
import './App.css';
import MyPDF from './files/Resume.pdf';


class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="button-container">
            <a href={MyPDF} download="Resume.pdf">
              <button class="btn">
                <span>Open Document</span>
              </button>
            </a>
          </div>
        </div>
    );
  }
}

export default App;

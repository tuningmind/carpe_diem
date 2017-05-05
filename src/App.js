import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="myapp">
        <header>
          <h1>Carpe Diem</h1>
          <a href="#">Instructions</a>
          <p>How much can you get from <span className="italic">your</span> day?</p>
        </header>
        <main>
            <div id="gameplay">
              <div id="display">
                <p>energy</p>
                <p>dollars</p>
                <p>time</p>
                <p>days</p>
              </div>
              <div id="hand">
                <div className="card" id="card1"></div>
                <div className="card" id="card2"></div>
                <div className="card" id="card3"></div>
                <div className="card" id="card4"></div>
              </div>
            </div>
        </main>
        <footer>
          <div id="footer">
            <p>links</p>
            <p>links</p>
            <p>links</p>
            <p>links</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;

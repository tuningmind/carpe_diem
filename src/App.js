import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <body className="column-container">
        <header className="column-item-top column-container">
          <h1>Carpe Diem</h1>
          <a href="#">Instructions</a>
          <p>How much can you get from <span className="italic">your</span> day?</p>
        </header>
        <main className="column-item-center">
          <section className="row-container" id="gameplay">
              <div className="column-container" id="display">
                <p className="column-item">energy</p>
                <p className="column-item">dollars</p>
                <p className="column-item">time</p>
                <p className="column-item">days</p>
              </div>
              <div className="row-container" id="hand">
                <div className="card" id="card1">card</div>
                <div className="card" id="card2">card</div>
                <div className="card" id="card3">card</div>
                <div className="card" id="card4">card</div>
              </div>
          </section>
          <section id="instructions">
          </section>
        </main>
        <footer className="column-item-bottom">
        </footer>
      </body>
    )
  }
}

export default App;

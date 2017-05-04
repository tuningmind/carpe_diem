import React, { Component } from 'react'
import './App.css';
import CardOne from './components/CardOne.js'
import CardTwo from './components/CardTwo.js'
import CardThree from './components/CardThree.js'
import CardFour from './components/CardFour.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to Carpe Diem</h2>
        </div>
        <main className="main">
          <div id="card1" className="card">
            <CardOne />
            <CardTwo />
          </div>
          <div id="card2" className="card">
            <CardTwo />
          </div>
          <div id="card3" className="card">
            <CardThree />
          </div>
          <div id="card4" className="card">
            <CardFour />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

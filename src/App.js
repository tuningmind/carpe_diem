import React, { Component } from 'react'
import './App.css';
import CardOne from './components/CardOne.js'
import CardTwo from './components/CardTwo.js'
import CardThree from './components/CardThree.js'
import CardFour from './components/CardFour.js'

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
          <h1>Carpe Diem</h1>
        </header>
        <main>
          <section id="gameplay">
          </section>
          <section id="instructions">
          </section>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;

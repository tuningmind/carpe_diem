import React, { Component } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
import Footer from './components/Footer'
import Header from './components/Header'
import Deck from './components/Deck'
import Instructions from './components/Instructions'

class App extends Component {
  render() {
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard />
          <Deck />
          <Instructions />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App

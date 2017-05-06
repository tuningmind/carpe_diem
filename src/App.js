import React, { Component } from 'react'
import './App.css'

import Gameplay from './components/Gameplay'
import Footer from './components/Footer'
import Header from './components/Header'
import Deck from './components/Deck'

class App extends Component {
  render() {
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameplay />
          <Deck />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'

import Gameplay from './components/Gameplay'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameplay />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App

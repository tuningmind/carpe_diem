import React, { Component } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
import Footer from './components/Footer'
import Header from './components/Header'
import Instructions from './components/Instructions'
import Cards from './components/Cards'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      used: []
    }
  }
  
  getInitialState() {
    return (
      this.state = {used: this.makeFour}
    )
  }

  makeFour() {
    let fourRandoms = []
    let number
    let cardInUsed
    for (let i=0; i<4; i++) {
      number = this.randomize(1,38)
      cardInUsed = this.state.used.indexOf(number) > -1
      if (cardInUsed) { number = this.randomize(1,38) }
      fourRandoms.push(number)
    }
    return fourRandoms
  }

  randomize(min, max) {
    // getRandomIntInclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setUsed(card) {
    const revisedUsed = this.state.used
    revisedUsed.push(card)
    this.setState({used: revisedUsed}) 
  }

  makeHand(fourRandoms) {
    return (
      fourRandoms.map((cardIndex) => (
      Cards[cardIndex]
    )))
  }

  render() {
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard hand={this.makeHand([5, 8, 24, 37])} />
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

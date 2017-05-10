import React, { Component } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
import Footer from './components/Footer'
import Header from './components/Header'
import Deck from './components/Deck'
import Instructions from './components/Instructions'
import Cards from './components/Cards'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      used: []
    }
  }

  randomize(min, max) {
    // getRandomIntInclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chooseCard() {
    let newIndex = this.randomize(1, 40)
    console.log("newIndex: ", newIndex)
    // let cardInUsed = this.state.used.indexOf(newIndex) > -1
    // if (cardInUsed) { this.randomize(1, 48) }
    // let revisedUsed = this.state.used
    // this.setState({used: revisedUsed}) 
    // revisedUsed.push(newIndex)
    return newIndex
  }

  makeHand(Cards) {
    // choose four cards here and send them down to Hand
    console.log("Cards inside makeHand call: ", Cards)
    let fourrandoms = []
    for (let i=0; i<4; i++) {
      fourrandoms.push(this.randomize(1,40))
    }
    console.log("fourrandoms: ", fourrandoms)
    let hand = fourrandoms.map((cardIndex) => (
      Cards[cardIndex]
    ))
    return hand
  }

  render() {
    console.log("Cards inside render: ", Cards)
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard hand={this.makeHand(Cards)}
                     randomize={this.randomize.bind(this)}/>
          <Deck />
          <h4>Instructions</h4>
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

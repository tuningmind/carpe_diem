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
      unused: this.shuffledeck(),
      hand: [],
      energy: 3,
      dollars: 8,
      victory: 0,
      day: 13,
      time: 5,
      nsf: false,
      tired: false,
      msg: ''
    }
  }

  calc(card) {
    let newTotals = {
      energy: this.state.energy + card.energy,
      dollars: this.state.dollars + card.dollars,
      time: 4 - this.state.hand.indexOf(card),
      day: this.state.day-1,
      victory: this.state.victory + card.victory
    }

    this.setState(newTotals)
  }

  showMessage(msg) {
    this.setState({msg: msg})
  }

  unplayableCard(card) {
    let unplayablecard = false 
    if (this.state.energy + card.energy -1 < 0) {
      unplayablecard = true 
    }
    if (this.state.dollars + card.dollars -4 < 0) {
      unplayablecard = true 
    }
    return unplayablecard
  }

  shuffledeck() {
    let array = 
              [ 
                0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 
               10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
               20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
               30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
               40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
               50, 51
              ]
    let counter = array.length
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter)
      counter--
      let temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
    return array
  }

  makeHand(deck) {
    console.log("deck inside makeHand: ", this.deck)
    let handNumbers = deck.splice(-4, 4)
    let handArray = handNumbers.map((num) => Cards[num]) 
    this.setState({
      hand: handArray
    })
    return handArray
  }

  componentDidMount() {
    
    this.setState({
      hand: this.makeHand(this.state.unused)
    })
  }

  shouldComponentMount() {
  }

  gameOver() {
    console.log("game over")
  }

  render() {

    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard 
            energy={this.state.energy}
            dollars={this.state.dollars}
            time={this.state.time}
            day={this.state.day}
            victory={this.state.victory}
            hand={this.state.hand}
            unused={this.state.unused}
            makeHand={this.makeHand.bind(this)}
            calc={this.calc.bind(this)}
            unplayableCard={this.unplayableCard.bind(this)}
            showMessage={this.showMessage.bind(this)}
          />
          <div id="msg">
            
          </div>
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

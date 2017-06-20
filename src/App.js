import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Display from './components/Display'
import Hand from './components/Hand'
import Cards from './components/Cards'
import Instructions from './components/Instructions'
import Footer from './components/Footer'
import NewHandButton from './components/NewHandButton'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      unused: this.shuffledeck(),
      hand: [],
      energy: 3,
      dollars: 8,
      time: 5,
      day: 13,
      victory: 0,
      msg: 'Seize the card',
      playableHand: true,
      card: {} 
    }
    this.isPlayableCard = this.isPlayableCard.bind(this)
  }

  setCurrentCard(card) {
    this.setState({card: card})
  }

  showProspectivePoints(card) {
    let prospectivePoints = {
      energy: this.state.energy + card.energy - 1,
      dollars: this.state.dollars + card.dollars - 4,
      time: 4 - this.state.hand.indexOf(card),
      day: this.state.day - 1,
      victory: this.state.victory + card.victory,
    }
    return prospectivePoints 
  }

  applyCard(card) {
    let newTotals = this.showProspectivePoints(card)
    this.setState(newTotals)
  }

  isPlayableCard(card) {
    if (this.state.dollars + card.dollars - 4 < 0) {
      return false
    }
    else if (this.state.energy + card.energy - 1 < 0) {
      return false
    }
    else {
      return true
    }
  }

  setHandPlayability(hand) {
    // return false only if no cards are playable
    let playable = hand.some(this.isPlayableCard)
    this.setState({playableHand: playable})
  }

  makeHand(deck) {
    let handNumbers = deck.slice(-4)
    let handArray = handNumbers.map((num) => Cards[num]) 
    let unused = deck.slice(0, deck.length -4)
    this.setState({
      hand: handArray,
      unused: unused,
      msg: 'Seize the card'
    })
    this.setHandPlayability(handArray)
    return handArray
  }

  componentDidMount() {
    this.setState({
      hand: this.makeHand(this.state.unused)
    })
  }

  showMessage(msg) {
    this.setState({msg: msg})
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

  render() {

    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
           <div id="gameboard"> 
            <Display gamestate={this.state} />
            <Hand 
              gamestate={this.state}
              applyCard={this.applyCard.bind(this)}
              showMessage={this.showMessage.bind(this)}
              isPlayableCard={this.isPlayableCard}
              showProspectivePoints={this.showProspectivePoints}
              setCurrentCard={this.setCurrentCard.bind(this)}
              setHandPlayability={this.setHandPlayability.bind(this)}
            />
          </div>
          <div id="msg">
            {this.state.msg}
          </div>
          <div id="newHand">
            <NewHandButton 
              makeHand={this.makeHand.bind(this)}
              unused={this.state.unused}
            />            
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

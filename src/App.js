import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Display from './components/Display'
import Hand from './components/Hand'
import Cards from './components/Cards'
import Instructions from './components/Instructions'
import Footer from './components/Footer'
import NewHandButton from './components/NewHandButton'
import Trade from './components/Trade'
import Victory from './components/Victory'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      unused: [],
      used: [],
      hand: [],
      energy: 3,
      dollars: 8,
      time: 5,
      day: 0,
      victory: 0,
      msg: '',
      playableHand: true,
      gameover: false,
      offerTrade: false,
      showNewHandButton: false,
      card: {} 
    }
    this.applyCard = this.applyCard.bind(this)
    this.isPlayableCard = this.isPlayableCard.bind(this)
    this.makeHand = this.makeHand.bind(this)
    this.showProspectivePoints = this.showProspectivePoints.bind(this)

    this.setCurrentCard = this.setCurrentCard.bind(this)
    this.setDollars= this.setDollars.bind(this)
    this.setEnergy = this.setEnergy.bind(this)
    this.setGameover = this.setGameover.bind(this)
    this.setHandPlayability = this.setHandPlayability.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.setNewHandButton = this.setNewHandButton.bind(this)
    this.setOfferTrade = this.setOfferTrade.bind(this)
    this.setTime = this.setTime.bind(this)
  }

  setCurrentCard(card) {
    this.setState({card: card})
  }

  setDollars(dollars) {
    this.setState({dollars: dollars})
  }

  setEnergy(energy) {
    this.setState({energy: energy})
  }

  setGameover() {
    this.setState({gameover: true})
  }

  setHandPlayability(playable) {
    this.setState({playableHand: playable})
  }

  setMessage(msg) {
    this.setState({msg: msg})
  }

  setNewHandButton(bool) {
    this.setState({showNewHandButton: bool})
  }

  setOfferTrade(bool) {
    this.setState({offerTrade: bool})
  }

  setTime(time) {
    this.setState({time: time})
  }

  applyCard(card) {
    const newTotals = this.showProspectivePoints(card)
    this.setState(newTotals)
  }

  checkCardsPlayability(hand) {
    // return false only if no cards are playable
    return hand.some(this.isPlayableCard) 
  }

  componentDidMount() {
    const unused = this.shuffledeck()
    this.setState({
      hand: this.makeHand(unused),
      msg: 'Seize the card'
    })
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
  
  makeHand(deck) {
    const handNumbers = deck.slice(-4)
    const handArray = handNumbers.map((num) => Cards[num]) 
    const unused = deck.slice(0, deck.length -4)
    const playable = this.checkCardsPlayability(handArray)
    this.setHandPlayability(playable)

    this.setState({
      hand: handArray,
      unused: unused,
      day: this.state.day + 1,
      msg: 'Seize another card',
      showNewHandButton: !playable
    })
    return handArray
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
  showProspectivePoints(card) {
    let prospectivePoints = {
      energy: this.state.energy + card.energy - 1,
      dollars: this.state.dollars + card.dollars - 4,
      time: 4 - this.state.hand.indexOf(card),
      victory: this.state.victory + card.victory,
      offerTrade: true,
      msg: ''
    }
    return prospectivePoints 
  }

  render() {

    return (
      <div id='myapp'>
        <header>
          <Header />
        </header>
        <main>
          <Victory 
            gamestate={this.state} 
          />
          <div id='msg'>
            {this.state.msg}
          </div>
           <div id='gameboard'> 
            <Display gamestate={this.state} />
            <Hand 
              gamestate={this.state}
              applyCard={this.applyCard}
              setMessage={this.setMessage}
              isPlayableCard={this.isPlayableCard}
              showProspectivePoints={this.showProspectivePoints}
              setCurrentCard={this.setCurrentCard}
              setHandPlayability={this.setHandPlayability}
            />
          </div>
          <Trade 
            gamestate={this.state}
            setEnergy={this.setEnergy}
            setDollars={this.setDollars}
            setTime={this.setTime}
            setOfferTrade={this.setOfferTrade}
            setNewHandButton={this.setNewHandButton}
          />
          <div>
            <NewHandButton 
              setMessage={this.setMessage}
              makeHand={this.makeHand}
              setHandPlayability={this.setHandPlayability}
              setGameover={this.setGameover}
              gamestate={this.state}
              setOfferTrade={this.setOfferTrade}
            />            
          </div>
          <h2 id='rules-title'>Rules</h2>
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

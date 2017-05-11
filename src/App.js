import React, { Component } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
import Footer from './components/Footer'
import Header from './components/Header'
import Progress from './components/Progress'
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

  setUsed(card) {
    let revisedUsed = this.state.used
    revisedUsed.push(card)
    this.setState({used: revisedUsed}) 
    console.log("this.state.used: ", this.state.used)
  }

  makeHand(Cards) {
    let fourrandoms = []
    let number
    let cardInUsed
    for (let i=0; i<4; i++) {
      number = this.randomize(1,38)
      cardInUsed = this.state.used.indexOf(number) > -1
      if (cardInUsed) { number = this.randomize(1,38) }
      fourrandoms.push(number)
    }
    let hand = fourrandoms.map((cardIndex) => (
      Cards[cardIndex]
    ))
    return hand
  }

  render() {
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard hand={this.makeHand(Cards)}
                     setUsed={this.setUsed.bind(this)}
                     />
          <Progress />
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

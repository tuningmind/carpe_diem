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
  
  makeFour() {
    let fourRandoms = []
    let number
    let cardInUsed
    for (let i=0; i<4; i++) {
      number = this.randomize(0,51)
      cardInUsed = fourRandoms.indexOf(number) > -1
      if (cardInUsed) { number = this.randomize(0,51) }
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

  makeHand(fourRandoms) {
    return (
      fourRandoms.map((cardIndex) => (
      Cards[cardIndex]
    )))
  }

  setUsed(cardIndex) {
    const used = this.state.used
    used.push(cardIndex)
    console.log("used: ", used)
    this.setState({used: used})
  }

  render() {
    let four = this.makeFour()
    let hand = this.makeHand(four)
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard 
            four={four}
            hand={hand}
            setUsed={this.setUsed.bind(this)}
          />
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

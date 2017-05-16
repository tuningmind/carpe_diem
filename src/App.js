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

  getRandomNum(used) {
    let randomize= (min, max) => {
      // getRandomIntInclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let number = randomize(1, 51)
    let cardInUsed = used.indexOf(number) > -1
    while (cardInUsed) { number = randomize(1, 51) }
    return number 
  }

  makeHand() {
    let random = this.getRandomNum
    let hand = [1,2,3,4].map((num) => (Cards[random(this.state.used)]))
    return hand 
  }

  setUsed(four) {
    const used = this.state.used
    four.map((num) => used.push(num))
    this.setState({used: used})
    console.log("used: ", used)
  }

  render() {
    let hand = this.makeHand()
    return (
      <div id="myapp">
        <header>
          <Header />
        </header>
        <main>
          <Gameboard 
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

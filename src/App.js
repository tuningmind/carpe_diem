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
      unused: [ 
                0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 
               10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
               20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
               30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
               40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
               50, 51
              ]
    }
  }

  getRandomNum(unused) {
    let randomize= (min, max) => {
      // getRandomIntInclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let number = randomize(0, 51)
    let cardUsed = unused.indexOf(number) === -1
    if (cardUsed) { number = randomize(0, 51) }
    if (cardUsed) { number = randomize(0, 51) }
    return number 
  }

  makeHand() {
    let random = this.getRandomNum
    let hand = [1,2,3,4].map((num) => (Cards[random(this.state.unused)]))
    return hand 
  }

  setUsed(four) {
    const unused = this.state.unused
    four.map((num) => {
      let toremove = unused.indexOf(num)
      return unused.splice(toremove, 1)
    })
    this.setState({unused: unused})
    console.log("unused: ", unused)
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

import React, { Component } from 'react'

class Deck extends Component {

  render() {
    const numbers = []
    for (let i=0; i<53; i++) {
      numbers.push(i)
    }
    return (
      <div id="deck">
        {numbers.map((number, i) => <div key={i} className='deckcard'></div>)} 
      </div>
    )
  }
}

module.exports = Deck

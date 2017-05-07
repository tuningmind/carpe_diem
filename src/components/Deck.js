import React, { Component } from 'react'

class Deck extends Component {

  render() {
    const numbers = [1,2,3,4,]
    return (
      <div id="deck">
        {numbers.map((number, i) => <div key={i} className='deckcard'></div>)} 
      </div>
    )
  }
}

module.exports = Deck

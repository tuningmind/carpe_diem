import React, { Component } from 'react'

class Deck extends Component {

  makedeck() {
    let deck = []
    for (var i = 1; i < 53; i++) {
      deck.push(
        "<div className='deckcard'></div>")
    }
    return deck.join("")
  }
  

  render() {
    return (
      <div id="deck">
        
      </div>
    )
  }
}

module.exports = Deck

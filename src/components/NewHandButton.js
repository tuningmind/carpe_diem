import React, { Component } from 'react'

class NewHand extends Component {

  clickHandler() {
    if (this.props.gamestate.unused.length) {
      this.props.makeHand(this.props.gamestate.unused) 
    } else {
      this.props.setMessage('Game Over')
      this.props.setGameover()
    }
  }

  render() {
    return(
      <button id="newHand"
        onClick={ () => {
          const bool = false
          this.props.setOfferTrade(bool) 
          this.clickHandler()}}
      >
        new hand
      </button>
    )
  }
}

module.exports = NewHand

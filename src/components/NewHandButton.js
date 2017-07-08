import React, { Component } from 'react'

class NewHand extends Component {

  clickHandler() {
    this.props.setOfferTrade(false) 
    if (this.props.gamestate.unused.length) {
      this.props.makeHand(this.props.gamestate.unused) 
    } else {
      this.props.setMessage('Game Over')
      this.props.setGameover()
    }
  }

  render() {
    const gamestate = this.props.gamestate
    const classname = gamestate.gameover || !gamestate.showNewHandButton ? 'hide' : 'show'
    return(
      <button 
        id="newHand"
        className={classname}
        onClick={ () => {
          this.clickHandler()}}
      >
        new hand
      </button>
    )
  }
}

module.exports = NewHand

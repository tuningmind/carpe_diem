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
    const classname = this.props.gamestate.newHandButton ? 'active' : 'inactive'
    return(
      <button 
        id="newHand"
        className={classname}
        onClick={ () => {
          this.props.setOfferTrade(false) 
          this.clickHandler()}}
      >
        new hand
      </button>
    )
  }
}

module.exports = NewHand

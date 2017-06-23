import React, { Component } from 'react'

class NewHand extends Component {

  clickHandler() {
    if (this.props.gamestate.unused) {
      this.props.makeHand(this.props.gamestate.unused) 
    } else {
      this.props.setMessage('Game Over')
    }
  }

  render() {
    return(
      <button id="newHand"
        onClick={ () => {
          this.clickHandler()}}
      >
        new hand
      </button>
    )
  }
}

module.exports = NewHand

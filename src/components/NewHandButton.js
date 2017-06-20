import React, { Component } from 'react'

class NewHand extends Component {

  

  render() {
    return(
      <button
        onClick={ () => {this.props.makeHand(this.props.unused) }} 
      >
        new hand
      </button>
    )
  }
}

module.exports = NewHand

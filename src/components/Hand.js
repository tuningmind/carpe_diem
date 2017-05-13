import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {

  render () {
    let hand = this.props.hand
    console.log("hand: ", hand)
    const card1 = hand[0]
    const card2 = hand[1]
    const card3 = hand[2]
    const card4 = hand[3]

    return (
      <div id="hand">
        <Card card={card1}/>
        <Card card={card2}/>
        <Card card={card3}/>
        <Card card={card4}/>
      </div>
    )
  }
}
module.exports = Hand 

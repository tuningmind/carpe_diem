import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {

  render () {
    let hand = this.props.hand
    let unused = this.props.unused 
    let cardJsx = hand.map((card, i) => {
       return (
          <Card 
            unused={unused}
            className="card"
            key={i} 
            card={hand[i]}
            makeHand={this.props.makeHand}
          />
        )
      }
    )

    return (
      <div id="hand">
        {cardJsx}  
      </div>
    )
  }
}
module.exports = Hand 

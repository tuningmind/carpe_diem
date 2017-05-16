import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {

  render () {
    let hand = this.props.hand
    let four = hand.map((card) => card.index)
    let cardJsx = hand.map((card, i) => {
       return (
          <Card 
            four={four}
            className="card"
            key={i} 
            card={hand[i]}
            setUsed={this.props.setUsed}
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

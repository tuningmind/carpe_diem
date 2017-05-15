import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {

  render () {
    let hand = this.props.hand

    let cardJsx = hand.map((card, i) => {
       return (
          <Card 
            className="card"
            key={i} 
            card={hand[i]}
            four={this.props.four}
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

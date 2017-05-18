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
            calc={this.props.calc}
            unused={this.props.unused}
            card={this.props.hand[i]}
            hand={this.props.hand}
            makeHand={this.props.makeHand}
            showMessage={this.props.showMessage}
            energy={this.props.energy}
            dollars={this.props.dollars}
            time={this.props.time}
            day={this.props.day}
            victory={this.props.victory}
            cardchosen={this.props.cardchosen}
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

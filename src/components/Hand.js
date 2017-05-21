import React, { Component } from 'react'
import Card from './Card'

class Hand extends Component {

  render () {
    let hand = this.props.gamestate.hand
    let cardJsx = hand.map((card, i) => {
       return (
          <Card 
            className="card"
            key={i} 
            gamestate={this.props.gamestate}
            applyCard={this.props.applyCard}
            card={card}
            makeHand={this.props.makeHand}
            showMessage={this.props.showMessage}
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

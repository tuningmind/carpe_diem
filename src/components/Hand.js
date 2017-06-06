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
            card={card}
            applyCard={this.props.applyCard}
            makeHand={this.props.makeHand}
            showMessage={this.props.showMessage}
            isPlayableCard={this.props.isPlayableCard}
            showProspectivePoints={this.props.showProspectivePoints}
            setCurrentCard={this.props.setCurrentCard}
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

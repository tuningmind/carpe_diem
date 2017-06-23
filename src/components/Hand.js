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
            setMessage={this.props.setMessage}
            isPlayableCard={this.props.isPlayableCard}
            showProspectivePoints={this.props.showProspectivePoints}
            setCurrentCard={this.props.setCurrentCard}
            checkHandPlayability={this.props.checkHandPlayability}
            setHandPlayability={this.props.setHandPlayability}
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

import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.playCard = this.playCard.bind(this)
  }

  playCard = (card) => {
    this.props.applyCard(card)
    this.props.makeHand(this.props.gamestate.unused)
  }

  unplayableMessage = (card) => {
    let msg
    if (card.tired && card.nsf) {
      msg = "This card is not playable because energy and dollars are too low" 
    }
    else if (card.nsf) {
      msg = "This card is not playable because dollars are too low"
    }
    else if (card.tired) {
      msg = "This card is not playable because energy is too low"
    }
    this.props.showMessage(msg)
  }

  render() {
    let card = this.props.card
    let gamestate = this.props.gamestate

    return (
        <div className="card"
          onClick={
            () => {
                this.playCard(card)
            }
          }
        >
          <div className={card.color}>
            {card.corner}
              <br />
            {card.suit}
          </div>

          {(card.src) 
            ? <img src={card.src} alt='' /> 
            : <img src='./img/white.png' alt='' /> }
           
          {
            card.classnames.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card.suit}</div>
              )
            )
          }
        </div>
    )
  }
}
module.exports = Card

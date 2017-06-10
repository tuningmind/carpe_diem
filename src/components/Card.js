import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.playCard = this.playCard.bind(this)
    this.setTired = this.setTired.bind(this)
    this.setNsf = this.setNsf.bind(this)
  }
  
  setTired(card) {
    if (this.props.gamestate.energy + card.energy - 1 < 0) {
      card.tired = true
    } else {card.tired = false}
  }

  setNsf(card) {
    if (this.props.gamestate.dollars + card.dollars - 4 < 0) {
      card.nsf = true
    } else {card.nsf = false}
  }

  playCard(card) {
    this.props.applyCard(card)
    this.props.makeHand(this.props.gamestate.unused)
  }

  unplayableMessage(card) {
    let msg
    if (this.props.gamestate.unused.length === 4) {
      msg = "Game over"
    }
    if (this.props.gamestate.playableHand === false) {
      msg = "None of these cards are playable. Click any card to get the next hand."
    }
    else if (card.tired && card.nsf) {
      msg = "This card is not playable because energy and dollars are too low" 
    }
    else if (card.nsf) {
      msg = "This card is not playable because dollars are too low"
    }
    else if (card.tired) {
      msg = "This card is not playable because energy is too low"
    }
    else {
      msg = 'Seize the card'
    }
    this.props.showMessage(msg)
  }

  handleClick(card) {
    this.props.setCurrentCard(card)
    this.setTired(card)
    this.setNsf(card)
    this.unplayableMessage(card)
    this.props.setHandPlayability(this.props.gamestate.hand)

    if (!this.props.gamestate.playableHand) {
      this.props.makeHand(this.props.gamestate.unused)
    } 
    else if (this.props.isPlayableCard(card)) {
      this.props.makeHand(this.props.gamestate.unused)
      this.props.applyCard(card)
    } 
  }


  render() {
    let card = this.props.card

    return (
        <div className="card"
          onClick={
            () => {
              this.handleClick(card)
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

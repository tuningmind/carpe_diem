import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
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

  setPlayableCard(card) {
    card.playable = this.props.isPlayableCard(card)
  }

  unplayableMessage(card) {
    let msg
    if (this.props.gamestate.playableHand === false) {
      msg = "None of these cards are playable."
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
    this.props.setMessage(msg)
  }

  handleClick(card) {
    if (this.props.gamestate.playableHand) {
      this.setTired(card)
      this.setNsf(card)
      this.setPlayableCard(card)
      this.props.setCurrentCard(card)

      if (this.props.isPlayableCard(card)) {
        this.props.applyCard(card)
        this.props.setHandPlayability(false)
      } else {this.unplayableMessage(card)}
    } else {this.props.setMessage('Please click for new hand')}
  }

  handleMouseOver(card) {
    if (this.props.gamestate.playableHand) {
      const prospectivePoints = this.props.showProspectivePoints(card)
      this.props.setMessage(
        "This would result in " + prospectivePoints.energy + " energy, " 
        + prospectivePoints.dollars + " dollars, and " 
        + prospectivePoints.victory + " victory points"
      )
    }
  }

  render() {
    let card = this.props.card

    return (
        <div className='card'
          onMouseOver={ () => {this.handleMouseOver(card)}}
          onClick={ () => {this.handleClick(card)}}
          onMouseLeave={ () => {this.props.setMessage('')}}
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

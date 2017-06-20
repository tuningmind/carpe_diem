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
    this.setTired(card)
    this.setNsf(card)
    this.setPlayableCard(card)
    this.props.setCurrentCard(card)
    this.unplayableMessage(card)
    this.props.setHandPlayability(this.props.gamestate.hand)

    if (!this.props.gamestate.playableHand) {
      this.props.makeHand(this.props.gamestate.unused)
    } 
    else if (this.props.isPlayableCard(this.props.gamestate.card)) {
      this.props.applyCard(card)
      this.props.makeHand(this.props.gamestate.unused)
    } 
  }

  handleMouseOver(card) {
    const prospectivePoints = {
      energy: this.props.gamestate.energy + card.energy - 1,
      dollars: this.props.gamestate.dollars + card.dollars - 4,
      time: 4 - this.props.gamestate.hand.indexOf(card),
      day: this.props.gamestate.day - 1,
      victory: this.props.gamestate.victory + card.victory,
    }
    this.props.showMessage(
      "This would result in " + prospectivePoints.energy + " energy, " + prospectivePoints.dollars + " dollars"
    )
  }

  render() {
    let card = this.props.card

    return (
        <div className='card'
          onMouseOver={ () => {this.handleMouseOver(card)}}
          onClick={ () => {
            console.log("gamestate: ", this.props.gamestate)
            this.handleClick(card)}}
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

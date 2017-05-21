import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.callMakeHand =   this.callMakeHand.bind(this)
    this.callApplyCard=       this.callApplyCard.bind(this)
  }
  callMakeHand = (unused) => {
    this.props.makeHand(unused)
  }
  callApplyCard = (card) => {
    this.props.applyCard(card) 
  }

  isPlayableCard = (card) => {
    if ((this.props.gamestate.energy + card.energy - 1 < 0) && (this.props.gamestate.dollars + card.dollars -4 < 0)) {
      card.tired = true
      card.nsf = true
      card.playable = false
    }
    else if (this.props.gamestate.dollars + card.dollars - 4 < 0) {
      card.nsf = true
      card.playable = false
    }
    else if (this.props.gamestate.energy + card.energy -1 < 0) {
      card.tired = true
      card.playable = false
    }
    console.log("card.tired: ", card.tired)
    console.log("card.nsf: ", card.nsf)
    console.log("card.playable: ", card.playable)
    return card.playable
  }


  render() {
    let card = this.props.card
    let gamestate = this.props.gamestate

    return (
        <div className="card"
          onClick={
            () => {
              this.isPlayableCard(card)
              this.callApplyCard(card)
              this.callMakeHand(gamestate.unused)
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

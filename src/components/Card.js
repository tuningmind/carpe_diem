import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.callMakeHand =   this.callMakeHand.bind(this)
    this.callCalc =       this.callCalc.bind(this)
  }
  callMakeHand = (unused) => {
    this.props.makeHand(unused)
  }
  unplayableCard(card) {
    let unplayablecard = false 
    if (this.props.energy + card.energy -1 < 0) {
      unplayablecard = true 
    }
    if (this.props.dollars + card.dollars -4 < 0) {
      unplayablecard = true 
    }
    return unplayablecard
  }
  callCalc = (card) => {
    if (this.unplayableCard(card)) {
      this.props.showMessage('This card is unplayable. Try another card')
    } else { 
      this.props.calc(card) 
      this.props.showMessage('')
    }
  }

  render() {
    const card = this.props.card
    const classnames = card.classnames
    let unused = this.props.unused
    return (
        <div className="card"
          onClick={
            () => {
              this.callCalc(card)
              this.callMakeHand(unused)
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
            classnames.map( (classname, i) => 
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

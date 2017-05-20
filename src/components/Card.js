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
  callCalc = (card) => {
    this.props.calc(card) 
    this.props.showMessage('This is a message.')
    console.log("days at callCalc: ", this.props.day)
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

  render() {
    let unused = this.props.unused
    let card = this.props.card
    let classnames = card.classnames

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

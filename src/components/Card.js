import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.callMakeHand = this.callMakeHand.bind(this)
    this.callCalc = this.callCalc.bind(this)
  }
  callMakeHand = () => {
    this.props.makeHand(this.props.unused)
  }
  callCalc = (card) => {
    this.props.calc(card)
  }

  render() {
    const card = this.props.card
    const classnames = card.classnames
    return (
        <div className="card"
          onClick={
            () => {
              this.callMakeHand()
              this.callCalc(card)
              console.log("card.index: ", card.index)
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

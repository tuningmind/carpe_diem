import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.callSetUsed = this.callSetUsed.bind(this)
  }
  callSetUsed = () => {
    this.props.setUsed(this.props.card.index)
  }

  render() {
    const card = this.props.card
    const classnames = card.classnames
    return (
        <div className="card"
          onClick={
            () => this.callSetUsed(card.index)
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

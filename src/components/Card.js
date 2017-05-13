import React, { Component } from 'react'

class Card extends Component {

  render() {
    const card = this.props.card
    const classnames = card.classnames
    return (
        <div className="card">
          <div className={card.color}>{card.index}<br />{card.suit}</div>
          {(card.src) ? <img src={card.src} alt='' /> : <img src='./img/white.png' alt='' /> }
           
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

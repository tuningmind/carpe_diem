import React, { Component } from 'react'

class Card extends Component {

  render() {
    const card = this.props.card
    const classnames = this.props.card.classnames
    console.log("classnames: ", classnames)
    return (
        <div className="card">
          {<div className={card.color}>{card.rank}<br />{card.suit}</div>}
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

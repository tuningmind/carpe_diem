import React, { Component } from 'react'

class Hand extends Component {

  constructor() {
    super()
    this.callSetUsed = this.callSetUsed.bind(this)
  }

  callSetUsed() {
    let hand = this.props.hand
    hand.forEach((card) => { this.props.setUsed(card) })
  }

  render () {

    let hand = this.props.hand
    const card1 = hand[0]
    const card2 = hand[1]
    const card3 = hand[2]
    const card4 = hand[3]
    const classnames1 = card1.classnames
    const classnames2 = card2.classnames
    const classnames3 = card3.classnames
    const classnames4 = card4.classnames

    return (
      <div id="hand">
        <div className="card">
          {<div className={card1.color}>{card1.rank}<br />{card1.suit}</div>}
          {
            classnames1.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card1.suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {<div className={card2.color}>{card2.rank}<br />{card2.suit}</div>}
          {
            classnames2.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card2.suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {<div className={card3.color}>{card3.rank}<br />{card3.suit}</div>}
          {
            classnames3.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card3.suit}</div>
              )
            )
          }
       </div>
        <div className="card">
          {<div className={card4.color}>{card4.rank}<br />{card4.suit}</div>}
          {
            classnames4.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card4.suit}</div>
              )
            )
          }
        </div>
      </div>
    )
  }
}
module.exports = Hand 

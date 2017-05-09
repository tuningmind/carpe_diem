import React, { Component } from 'react'
import Cards from './Cards'

class Hand extends Component {

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  render () {
    const card1 = Cards[this.getRandomIntInclusive(0, 40)]
    const card2 = Cards[this.getRandomIntInclusive(0, 40)]
    const card3 = Cards[this.getRandomIntInclusive(0, 40)]
    const card4 = Cards[this.getRandomIntInclusive(0, 40)]

    const classnames1 = card1.classnames
    const classnames2 = card2.classnames
    const classnames3 = card3.classnames
    const classnames4 = card4.classnames
    return (
      <div id="hand">
        <div className="card">
          {
            classnames1.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card1.suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames2.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card2.suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames3.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{card3.suit}</div>
              )
            )
          }
       </div>
        <div className="card">
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

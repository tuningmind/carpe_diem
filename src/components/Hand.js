import React, { Component } from 'react'

class Hand extends Component {


  render () {
    console.log("this.props.hand: ", this.props.hand)
    let hand = this.props.hand
    const classnames1 = hand[0].classnames
    const classnames2 = hand[1].classnames
    const classnames3 = hand[2].classnames
    const classnames4 = hand[3].classnames

    return (
      <div id="hand">
        <div className="card">
          {
            classnames1.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{hand[0].suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames2.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{hand[1].suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames3.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{hand[2].suit}</div>
              )
            )
          }
       </div>
        <div className="card">
          {
            classnames4.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{hand[3].suit}</div>
              )
            )
          }
        </div>
      </div>
    )
  }
}
module.exports = Hand 

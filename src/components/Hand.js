import React, { Component } from 'react'

class Hand extends Component {

  render () {
    return (
      <div id="hand">
        <div className="card">
          <div className="spotB1">♠</div>
          <div className="spotB5">♠</div>
        </div>
        <div className="card">
          <div className="spotB1">♣</div>
          <div className="spotB5">♣</div>
        </div>
        <div className="card">
          <div className="spotB1 red">♥</div>
          <div className="spotB5 red">♥</div>
       </div>
        <div className="card">
          <div className="spotB1 red">♦</div>
          <div className="spotB5 red">♦</div>
        </div>
      </div>
    )
  }
}
module.exports = Hand 

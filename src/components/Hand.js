import React, { Component } from 'react'

class Hand extends Component {

  render () {
    return (
      <div id="hand">
        <div className="card" id="card1"></div>
        <div className="card" id="card2"></div>
        <div className="card" id="card3"></div>
        <div className="card" id="card4"></div>
      </div>
    )
  }
}
module.exports = Hand 

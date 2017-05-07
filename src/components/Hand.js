import React, { Component } from 'react'
import CardFour from './CardFour'
import CardThree from './CardThree'
import CardTwo from './CardTwo'
import CardOne from './CardOne'

class Hand extends Component {

  render () {
    return (
      <div id="hand">
        <div className="card" id="card1"><CardOne /></div>
        <div className="card" id="card2"><CardTwo /></div>
        <div className="card" id="card3"><CardThree /></div>
        <div className="card" id="card4"><CardFour/></div>
      </div>
    )
  }
}
module.exports = Hand 

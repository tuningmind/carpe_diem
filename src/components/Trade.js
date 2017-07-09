import React, { Component } from 'react'

class Trade extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
    this.tradeenergy = this.tradeenergy.bind(this)
    this.tradedollars = this.tradedollars.bind(this)
  }

  componentDidMount() {
    this.props.setNewHandButton(false) 
  }
  tradeenergy() {
    const energy = this.props.gamestate.energy + this.props.gamestate.time
    this.props.setEnergy(energy)
    this.props.setTime(0)
    this.props.setNewHandButton(true) 
    this.props.setOfferTrade(false)
  }

  tradedollars() {
    const dollars = this.props.gamestate.dollars + this.props.gamestate.time
    this.props.setDollars(dollars)
    this.props.setTime(0)
    this.props.setNewHandButton(true) 
    this.props.setOfferTrade(false)
  }

  render() {
    const gamestate = this.props.gamestate
    const classname = gamestate.offerTrade ? 'show' : 'hide'
    const unit = gamestate.time === 1 ? 'unit' : 'units'

    return(
      <div 
        id='trade'
        className={classname}
      >
        <p>Trade your {gamestate.time} time {unit} for</p>
        <p>
          {gamestate.time} 
          <button id='energy' onClick={this.tradeenergy}>energy</button> 
          or {gamestate.time} 
          <button id='dollars' onClick={this.tradedollars}>dollars</button>
        </p>
      </div>
    )
  }
}
module.exports = Trade

import React, { Component } from 'react'

class Trade extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
    this.tradeenergy = this.tradeenergy.bind(this)
    this.tradedollars = this.tradedollars.bind(this)
  }

  tradeenergy() {
    const energy = this.props.gamestate.energy + this.props.gamestate.time
    this.props.setEnergy(energy)
    this.props.setTime(0)
    this.props.setOfferTrade(false)
  }
  tradedollars() {
    const dollars = this.props.gamestate.dollars + this.props.gamestate.time
    this.props.setDollars(dollars)
    this.props.setTime(0)
    this.props.setOfferTrade(false)
  }

  render() {
    const classname = this.props.gamestate.offerTrade ? "show" : "hide"
    const unit = this.props.gamestate.time === 1 ? "unit" : "units"

    return(
      <div 
        id='trade'
        className={classname}
      >
        <p>Trade your {this.props.gamestate.time} time {unit} for</p>
        <p>
          {this.props.gamestate.time} 
          <button onClick={this.tradeenergy}>energy</button> 
          or {this.props.gamestate.time} 
          <button onClick={this.tradedollars}>dollars</button>
        </p>
      </div>
    )
  }
}
module.exports = Trade

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
    console.log("energy was clicked ", this.props.gamestate.energy + this.props.gamestate.time )
  }
  tradedollars() {
    console.log("dollars was clicked ", this.props.gamestate.energy + this.props.gamestate.time )
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

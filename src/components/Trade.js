import React, { Component } from 'react'

class Trade extends Component {

  render() {
    const classname = this.props.gamestate.offerTrade ? "show" : "hide"
    const unit = this.props.gamestate.time === 1 ? "unit" : "units"
    const andor = this.props.gamestate.time === 1 ? "or" : "and"
    return(
      <div 
        id='trade'
        className={classname}
      >
        <p>Trade your {this.props.gamestate.time} time {unit} for</p>
        <p>X energy {andor} X dollars</p>
      </div>
    )
  }
}
module.exports = Trade

import React, { Component } from 'react'

class Trade extends Component {

  render() {
    const classname = this.props.gamestate.offerTrade ? "show" : "hide"
    return(
      <div 
        id='trade'
        className={classname}
      >
        <p>Trade your {this.props.gamestate.time} time units for</p>
        <p>X energy and X dollars</p>
      </div>
    )
  }
}
module.exports = Trade

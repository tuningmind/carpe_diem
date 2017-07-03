import React, { Component } from 'react'

class Trade extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
    this.tradeclick = this.tradeclick.bind(this)
  }

  tradeclick(e) {
    console.log("this was clicked " )
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
          <button onClick={this.tradeclick}>energy</button> 
          or {this.props.gamestate.time} 
          <button onClick={this.tradeclick}>dollars</button>
        </p>
      </div>
    )
  }
}
module.exports = Trade

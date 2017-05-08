import React, { Component } from 'react'

class CardOne extends Component {

  render () {
    return (
      <div className="front black">
        <div className="spotA1">{this.props.suit}</div>
        <div className="spotA2">{this.props.suit}</div>
        <div className="spotA4">{this.props.suit}</div>
        <div className="spotA5">{this.props.suit}</div>
        <div className="spotB2">{this.props.suit}</div>
        <div className="spotB4">{this.props.suit}</div>
        <div className="spotC1">{this.props.suit}</div>
        <div className="spotC2">{this.props.suit}</div>
        <div className="spotC4">{this.props.suit}</div>
        <div className="spotC5">{this.props.suit}</div>
      </div>
    )
  }
}
module.exports = CardOne

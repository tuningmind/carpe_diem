import React, { Component } from 'react'

class Display extends Component {

  render () {
    return (
      <div id="display">
        <p id="energy">{this.props.energy} energy</p>
        <p id="dollars">{this.props.dollars} dollars</p>
        <p id="time">{this.props.time} time</p>
        <p id="days">{this.props.day} days</p>
      </div>
    )
  }
}
module.exports = Display 

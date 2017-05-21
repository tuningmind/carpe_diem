import React, { Component } from 'react'

class Display extends Component {

  render () {
    let gamestate = this.props.gamestate
    return (
      <div id="display">
        <p id="energy">{gamestate.energy} energy</p>
        <p id="dollars">{gamestate.dollars} dollars</p>
        <p id="time">{gamestate.time} time</p>
        <p id="days">{gamestate.day} days</p>
      </div>
    )
  }
}
module.exports = Display 

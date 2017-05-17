import React, { Component } from 'react'

class Display extends Component {

  render () {
    let energy = this.props.energy
    let dollars = this.props.dollars
    let time = this.props.time
    let day = this.props.day
    console.log("energy inside display: ", energy)
    return (
      <div id="display">
        <p id="energy">{energy} energy</p>
        <p id="dollars">{dollars} dollars</p>
        <p id="time">{time} time</p>
        <p id="days">{day} days</p>
      </div>
    )
  }
}
module.exports = Display 

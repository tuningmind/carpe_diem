import React, { Component } from 'react'

class Display extends Component {

  render () {
    console.log("this.energy inside display: ", this.energy)
    return (
      <div id="display">
        <p id="energy">{this.energy} energy</p>
        <p id="dollars">{this.dollars} dollars</p>
        <p id="time">{this.time} time</p>
        <p id="days">{this.day} days</p>
      </div>
    )
  }
}
module.exports = Display 

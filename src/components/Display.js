import React, { Component } from 'react'

class Display extends Component {

  render () {
    return (
      <div id="display">
        <p id="energy">energy</p>
        <p id="dollars">dollars</p>
        <p id="time">time</p>
        <p id="days">days</p>
      </div>
    )
  }
}
module.exports = Display 

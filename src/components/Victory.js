import React, { Component } from 'react'

class Victory extends Component {

  render() {
    return (
      <div id='victory'>
        <p>victory</p>
        <p>points:</p>
        <p id='points'>{this.props.gamestate.victory}</p>
    </div>
    )
  }
}

module.exports = Victory

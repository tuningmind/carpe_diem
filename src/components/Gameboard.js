import React, { Component } from 'react'
import Hand from './Hand'
import Display from './Display'

class Gameboard extends Component {

  render () {
    return (
      <div id="gameboard">
        <Display />
        <Hand />
      </div>
    )
  }
}
module.exports = Gameboard

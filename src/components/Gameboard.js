import React, { Component } from 'react'
import Hand from './Hand'
import Display from './Display'

class Gameboard extends Component {

  render () {
    return (
      <div id="gameboard">
        <Display />
        <Hand hand={this.props.hand}
              chooseCard={this.props.chooseCard} 
              randomize={this.props.randomize}/>
      </div>
    )
  }
}
module.exports = Gameboard

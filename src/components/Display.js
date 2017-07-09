import React, { Component } from 'react'

class Display extends Component {

  render () {
    let gamestate = this.props.gamestate

    const display = 
      gamestate.gameover 
        ?
      ( 
        <div id='display-final'>
          <p>Final total:</p>
          <p id='dollars'>{gamestate.dollars + gamestate.victory} dollars</p>
        </div>
      )
        :
      ( 
        <div id='display'>
          <p id='energy'>{gamestate.energy} energy</p>
          <p id='dollars'>{gamestate.dollars} dollars</p>
          <p id='time'>{gamestate.time} time</p>
          <p id='days'>day {gamestate.day}</p>
        </div>
      )
    return display

  }
}
module.exports = Display 

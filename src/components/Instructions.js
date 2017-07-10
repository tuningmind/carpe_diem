import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const days = [   'You have thirteen days to play.', 
                     'Each day consumes 1 energy and 4 dollars in addition to other points.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const energy = [ 'Hearts give 1 energy point.', 
                     'Diamonds give 0 energy points.',
                     'Clubs cost 1 energy point to choose.',
                     'Spades cost 3 energy points to choose.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const dollars = ['At the end of the game, dollars convert directly to points.',
                     'Numbered cards give you their number in dollar points.', 
                     'Face cards and Aces cost 5 dollars to choose.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const victory = ['Face cards give victory points.', 
                     'Victory points are added directly to points at the end of the game and are not playable during the game.',
                     'Jack gives 10 victory points.', 
                     'Queen gives 20 victory points.', 
                     'King gives 30 victory points.', 
                     'Ace gives 50 victory points.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const time = [   'You get 5 time units each day.', 
                     'Card 1 consumes 1 time unit to play.', 
                     'Card 2 consumes 2 time units.', 
                     'Card 3 consumes 3 time units.', 
                     'Card 4 consumes 4 time units.', 
                     'That leaves you at least one time unit left over each day, and you may trade time for money or trade time for energy.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const instructionElement = [
      { name: "playability",
        inst: 'Cards are playable when they result in energy or dollars being zero or above.'
      },
      {
        name: "days",
        inst: days
      },
      {
        name: "energy",
        inst: energy
      },
      {
        name: "dollars",
        inst: dollars
      },
      {
        name: "victory points",
        inst: victory
      },
      {
        name: "time",
        inst: time
      }
    ].map((element, i) =>
      (
        <div key={i} className="instelem">
          <div className="category">
            {element.name}
          </div>
          <div className="instruction">
            {element.inst}
          </div>
        </div>
      )
    )

    return (
      <div id='instructions'  style={this.props.gamestate.showRules 
                                      ? {visibility: 'visible'} 
                                      : {display: 'none'}}>
        {instructionElement}
      </div>
    )
  }
}
module.exports = Instructions 

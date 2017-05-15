import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const energy = [ 'Hearts give +1 energy points.', 
                     'Diamonds give 0 energy points.',
                     'Clubs give -1 energy points.',
                     'Spades give -3 energy points.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const dollars =  'Numbered cards give you their number in dollar points.'
    const victory = ['Face cards give victory points:', 
                     'Ace gives 50 victory points.', 
                     'Jack gives 10 victory points.', 
                     'Queen gives 20 victory points.', 
                     'King gives 30 victory points.', 
                     'Victory points are changed directly to dollars at the end of the game.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const time = [   'You get 5 time units each day.', 
                     'Card 1 consumes 1 time unit to play.', 
                     'Card 2 consumes 2 time units.', 
                     'Card 3 consumes 3 time units.', 
                     'Card 4 consumes 4 time units.', 
                     'That leaves you at least one time unit left over each day, and you may freelance (trade time for money) or recuperate (trade time for energy).'].map((elem, i) => (<div key={i}>{elem}</div>))
    const days = [   'You have thirteen days to play.', 
                     'Each day consumes 1 energy and 1 dollar in addition to your other choices.'].map((elem, i) => (<div key={i}>{elem}</div>))
    const instructionElement = [
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
      },
      {
        name: "days",
        inst: days
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
      <div id="instructions">
        {instructionElement}
      </div>
    )
  }
}
module.exports = Instructions 

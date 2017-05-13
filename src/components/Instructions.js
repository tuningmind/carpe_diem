import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const energy = 'Hearts: +1 energy points'
    const dollars = 'Numbered cards get their number in dollar points'
    const victory = 'Face cards get victory points: Ace gets 10, Jack gets 20'
    const time = 'You get 5 time units each day. Card 1 consumes 1 time unit to play. Card 2 consumes 2 time units, Card 3 consumes 3, Card 4 consumes 4. That leaves you one left over each day, and you may freelance (trade time for money) or recuperate (trade time for energy)'
    const days = 'You have thirteen days to play. Each day consumes 1 energy and 1 dollar in addition to your other choices.'

    const instructionElements = [
      {
        category: "energy", 
        instruction: energy
      }, 
      {
        category: "dollars", 
        instruction: dollars
      },
      {
        category: "victory points",
        instruction: victory
      },
      {
        category: "time", 
        instruction: time
      },
      {
        category: "days", 
        instruction: days
      }
    ]

    return (
      <div id="instructions">
          {instructionElements.map((element, i) => 
            (<div key={i} className='instructionElement'>
               <div className='instructionCategory'>{element.category}</div>
               <div className='instruction'>{element.instruction}</div>
             </div>
            )
          )} 
      </div>
    )
  }
}
module.exports = Instructions 

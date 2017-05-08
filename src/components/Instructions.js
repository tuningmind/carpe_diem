import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const energy = 'Hearts: +1 energy points'
    const dollars = 'Numbered cards get their number in dollar points'
    const victory = 'Face cards get victory points: Ace gets 10, Jack gets 20'
    const time = 'You get 5 time units each day. Card 1 consumes 1 time unit to play. Card 2 consumes 2 time units, Card 3 consumes 3, Card 4 consumes 4. That leaves you one left over each day, and you may freelance (trade time for money) or recuperate (trade time for energy)'
    const days = 'You have thirteen days to play. Each day consumes 1 energy and 1 dollar in addition to your other choices.'

    const instructionCategories = [
      {
        name: "energy", 
        words: energy
      }, 
      {
        name: "dollars", 
        words: dollars
      },
      {
        name: "victory points",
        words: victory
      },
      {
        name: "time", 
        words: "days"
      }]

    return (
      <table id="instructions">
          {instructionCategories.map((category, i) => 
            <tr key={i} className='instructionCategory'>
                  <tr>
                    <td>{category.name}</td>
                    <td>{category.words}</td>
                  </tr>
             </tr>
          )} 
      </table>
    )
  }
}
module.exports = Instructions 

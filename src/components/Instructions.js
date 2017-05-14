import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const energy = ['Hearts give +1 energy points', 'Diamonds give 0 energy points','Clubs give -1 energy points','Spades give -3 energy points']
    const dollars = 'Numbered cards get their number in dollar points'
    const victory = 'Face cards get victory points: Ace gives 50, Jack gives 10, Queen gives 20, King gives 30. Victory points are changed directly to dollars at the end of the game.'
    const time = 'You get 5 time units each day. Card 1 consumes 1 time unit to play. Card 2 consumes 2 time units, Card 3 consumes 3, Card 4 consumes 4. That leaves you one left over each day, and you may freelance (trade time for money) or recuperate (trade time for energy)'
    const days = 'You have thirteen days to play. Each day consumes 1 energy and 1 dollar in addition to your other choices.'
    const categories = ["energy", "dollars", "victory points","time", "days" ]
    const instructions = [energy, dollars, victory, time, days]
    const categoryDivs = 
          categories.map((category, i) => 
            ( 
              <div key={i} className="category">
                {category}
              </div>
            )
          ) 
    const instructionDivs = 
          instructions.map((instruction, i) =>
            (
              <div key={i} className="instruction">
                {instruction}
              </div>
            )
          )

    return (
      <div id="instructions">
        <div className='categoryDiv'>
          {categoryDivs}
        </div>
        <div className='instructionDiv'>
          {instructionDivs}
        </div>
      </div>
    )
  }
}
module.exports = Instructions 

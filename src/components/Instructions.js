import React, { Component } from 'react'

class Instructions extends Component {

  render () {
    const instructions = ["energy", "dollars", "victory points", "time", "days" ]
    return (
      <div id="instr">
        <h3>Instructions</h3>
        <div id="instructions">
          {instructions.map((instr, i) => 
            <div key={i} 
                 className='instructions'
                 >
                  {instr}
            </div>)
          } 
        </div>
      </div>
    )
  }
}
module.exports = Instructions 

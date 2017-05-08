import React, { Component } from 'react'

const spotDivs = {
  1:  [
        "spotB3"
      ],
  2:  [
        "spotB1", "spotB5",
      ],
  3:  [
        "spotB1", "spotB3", "spotB5",
      ],
  4:  [
        "spotA1", "spotA5", 
        "spotC1", "spotC5", 
      ],
  5:  [
        "spotA1", "spotA5", 
        "spotB3",
        "spotC1", "spotC5", 
      ],
  6:  [
        "spotA1", "spotA3", "spotA5",
        "spotC1", "spotC3", "spotC5"
      ],
  7:  [
        "spotA1", "spotA3", "spotA5",
        "spotB2",
        "spotC1", "spotC3", "spotC5"
      ],
  8:  [
        "spotA1", "spotA3", "spotA5",
        "spotB2", "spotB4", 
        "spotC1", "spotC3", "spotC5"
      ],
  9:  [
        "spotA1", "spotA2", "spotA4","spotA5",
        "spotB3",
        "spotC1", "spotC2", "spotC4", "spotC5"
      ],
  10: [
        "spotA1", "spotA2", "spotA4","spotA5",
        "spotB2", "spotB4", 
        "spotC1", "spotC2", "spotC4", "spotC5"
      ]
}
const suits = {
  "hearts": "♥",
  "diamonds":"♦",
  "spades": "♠",
  "clubs": "♣"
}

class Spots extends Component {

  render () {
    let spotClassNames = spotDivs[this.props.rank]
    let suit = suits[this.props.suit]
    return (
      <div id="spots">
      {spotClassNames.map((classname, i) => {
          (<div key={i} className={classname}>{suit}</div>)
          })
      }
      </div>
    )
  }
}
module.exports = Spots 

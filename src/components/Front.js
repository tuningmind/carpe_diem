import React, { Component } from 'react'

class Front extends Component {

  constructor(props) {
    super(props){
      this.state = {
        suit: suit,
        rank: rank,
        energy: suit_energies.suit,
        isFacecard: ([1, 11, 12, 13].indexOf(rank) > -1),
        isPlayable: true,
        dollars: -5,
        victoryPoints: 0,
        isTired: false,
        isNSF: false,
        time: 0,
        facepoints: {
          1:  50,
          11: 10,
          12: 20,
          13: 30
        },
        facenames: {
          1:  'Ace',
          2:  '2',
          3:  '3',
          4:  '4',
          5:  '5',
          6:  '6',
          7:  '7',
          8:  '8',
          9:  '9',
          10: '10',
          11: 'Jack',
          12: 'Queen',
          13: 'King'
        },
        suitenergies: {
          "hearts":   1,
          "diamonds": 0,
          "clubs":   -1,
          "spades":  -3
        }

      }
    }
  }
  getFacecardPoints(this.state.isFacecard) {
    if (this.state.isFacecard) {
      this.setState.dollars(-5)
      this.setState.victoryPoints(facepoints.rank)
    } 
    else {
      this.setState.dollars(this.state.rank)
      this.setState.victoryPoints(0)
    }
  }

  render () {
    return (
      <div className="front">
        <div className="spotA1">&clubs;</div>
        <div className="spotA2">&clubs;</div>
        <div className="spotA4">&clubs;</div>
        <div className="spotA5">&clubs;</div>
        <div className="spotB2">&clubs;</div>
        <div className="spotB4">&clubs;</div>
        <div className="spotC1">&clubs;</div>
        <div className="spotC2">&clubs;</div>
        <div className="spotC4">&clubs;</div>
        <div className="spotC5">&clubs;</div>
      </div>
    )
  }
}
module.exports = Front

import React from 'react'
import Hand from './Hand'
import Display from './Display'
 
const Gameboard = (props) => {

    return (
      <div id="gameboard">
        <Display 
          gamestate={props.gamestate}
        />
        <Hand 
          gamestate={props.gamestate}
          applyCard={props.applyCard}
          makeHand={props.makeHand}
          showMessage={props.showMessage}
        />
      </div>
    )
}
module.exports = Gameboard

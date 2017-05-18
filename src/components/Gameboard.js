import React from 'react'
import Hand from './Hand'
import Display from './Display'
 
const Gameboard = (props) => {

    return (
      <div id="gameboard">
        <Display 
          energy={props.energy}
          dollars={props.dollars}
          time={props.time}
          day={props.day}
        />
        <Hand 
          calc={props.calc}
          unused={props.unused}
          hand={props.hand}
          makeHand={props.makeHand}
          showMessage={props.showMessage}
          energy={props.energy}
          dollars={props.dollars}
          time={props.time}
          day={props.day}
          victory={props.victory}
        />
      </div>
    )
}
module.exports = Gameboard

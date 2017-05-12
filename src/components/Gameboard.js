import React from 'react'
import Hand from './Hand'
import Display from './Display'
 
const Gameboard = (props) => {

    return (
      <div id="gameboard">
        <Display />
        <Hand hand={props.hand}/>
      </div>
    )
}
module.exports = Gameboard

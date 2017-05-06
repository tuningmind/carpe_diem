import React, { Component } from 'react'
import Hand from './Hand'
import Display from './Display'

class Gameplay extends Component {

  render () {
    return (
      <div id="gameplay">
        <Display />
        <Hand />
      </div>
    )
  }
}
module.exports = Gameplay 

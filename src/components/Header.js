import React, { Component } from 'react'

class Header extends Component {

  render () {
    return (
      <div id='header'>
        <h1>Carpe Diem</h1>
        <h2>How much can you get from your day?</h2>
        <a href='#rules-title' id='rules-link'>Rules</a>
      </div>
    )
  }
}
module.exports = Header  

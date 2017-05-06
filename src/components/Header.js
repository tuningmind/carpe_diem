import React, { Component } from 'react'

class Header extends Component {

  render () {
    return (
      <div id="header">
        <h1>Carpe Diem</h1>
        <a href="#">Instructions</a>
        <p>How much can you get from <span className="italic">your</span> day?</p>
      </div>
    )
  }
}
module.exports = Header  

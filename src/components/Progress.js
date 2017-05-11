import React, { Component } from 'react'

class Progress extends Component {

  render() {
    const numbers = []
    for (let i=0; i<53; i++) {
      numbers.push(i)
    }
    return (
      <div id="progress">
        {numbers.map((number, i) => <div key={i} 
                   className='progress'></div>)} 
      </div>
    )
  }
}

module.exports = Progress 

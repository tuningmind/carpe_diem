import React, { Component } from 'react'
import Cards from './Cards'

class Hand extends Component {

  render () {
    const classnames1 = Cards[1].classnames
    const classnames2 = Cards[2].classnames
    const classnames3 = Cards[3].classnames
    const classnames4 = Cards[4].classnames
    return (
      <div id="hand">
        <div className="card">
          {
            classnames1.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{Cards[1].suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames2.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{Cards[2].suit}</div>
              )
            )
          }
        </div>
        <div className="card">
          {
            classnames3.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{Cards[2].suit}</div>
              )
            )
          }
       </div>
        <div className="card">
          {
            classnames4.map( (classname, i) => 
              ( 
                <div key={i} className={classname}>{Cards[3].suit}</div>
              )
            )
          }
        </div>
      </div>
    )
  }
}
module.exports = Hand 

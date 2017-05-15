import React, { Component } from 'react'

class Footer extends Component {

  render () {
    return (
      <div id="footer">
        <p className="footlink">
          <a href="https://thezvi.wordpress.com/2015/03/17/carpe-diem-the-optimization-game-level-1/">
             origin of the game</a>
        </p>
        <p className="footlink">
          <a href="https://thezvi.wordpress.com/2015/05/01/carpe-diem-the-problem-of-scarcity-and-abundance/">
             strategy</a>
        </p>
        <p className="footlink">
          <a href="https://www.amazon.com/gp/product/B00IIDK5PQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00IIDK5PQ&linkCode=as2&tag=zvimows-20&linkId=ZGCW4GT2K6AW5Z3B">
             the cost of scarcity</a>
        </p>
        <p className="footlink">
          <a href="https://github.com/tuningmind/carpe_diem">
             tuningmind</a>
        </p>
      </div>
    )
  }
}
module.exports = Footer  

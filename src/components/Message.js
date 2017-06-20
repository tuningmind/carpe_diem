import React, { Component } from 'react'

class Message extends Component {

  render() {
    return (
      <div id='msg'>
        {this.props.msg}
      </div>
    )
  }
}

module.exports = Message

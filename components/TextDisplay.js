import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return <div>I am displaying text from my parent: {this.props.text}</div>
  }

}

export default TextDisplay

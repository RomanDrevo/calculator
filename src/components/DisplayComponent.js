import React, { Component } from 'react'
class DisplayComponent extends Component {
  render() {
    const string = this.props.data.join('')
    return <div className="display"> {string} </div>
  }
}
export default DisplayComponent

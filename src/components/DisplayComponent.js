import React, { Component } from 'react'
class DisplayComponent extends Component {
  render() {
    const symbols = this.props.data.join('')
    return <div className="display"> {symbols} </div>
  }
}
export default DisplayComponent

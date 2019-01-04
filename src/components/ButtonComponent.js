import React, {Component} from 'react'

class ButtonComponent extends Component {
    render() {
        return (
            <div
                onClick={this.props.onClick}
                className="action-button"
                size={this.props.size}
                action={this.props.value}
            >
                {this.props.symbol}
            </div>
        )
    }
}

export default ButtonComponent

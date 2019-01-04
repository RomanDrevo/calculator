import React, {Component} from 'react'

class DisplayComponent extends Component {

    state = {
        symbol: ''
    }


    render() {
        // console.log('display props: ', this.props)
        const symbols = this.props.data
        return (
            <div className="display">
                {symbols}
            </div>
        )
    }
}

export default DisplayComponent

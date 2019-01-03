import React, {Component} from 'react'
import math from 'mathjs'
import './App.css'
import DisplayComponent from './components/DisplayComponent'
import ButtonComponent from './components/ButtonComponent'

class App extends Component {
    state = {
        symbols: []
    }

    calculate = () => {
        let result = this.state.symbols.join('')
        console.log(this.state.symbols)
        if (result) {
            result = eval(result)
            // console.log(eval(result))
            this.setState({
                symbols: [result],
            })
        }
    }
    handleOnClick = e => {
        const value = e.target.getAttribute('action')
        // console.log(value)
        switch (value) {
            case 'clear':
                this.setState({
                    symbols: [],
                })
                break
            case 'equal':
                this.calculate()
                break
            default:
                this.setState({
                    symbols: [...this.state.symbols, value]
                })
                break
        }
    }

    render() {
        return (
            <div className="App">
                <DisplayComponent data={this.state.symbols}/>
                <div className="buttons-wrapper flex flex-wrap flex-column">
                    <ButtonComponent onClick={this.handleOnClick} symbol="C" value="clear"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="7" value="7"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="4" value="4"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="1" value="1"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="0" value="0"/>

                    <ButtonComponent onClick={this.handleOnClick} symbol="/" value="/"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="8" value="8"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="5" value="5"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="2" value="2"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="." value="."/>

                    <ButtonComponent onClick={this.handleOnClick} symbol="*" value="*"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="9" value="9"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="6" value="6"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="3" value="3"/>
                    <ButtonComponent symbol="" value="null"/>

                    <ButtonComponent onClick={this.handleOnClick} symbol="-" value="-"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="+" size="2" value="+"/>
                    <ButtonComponent onClick={this.handleOnClick} symbol="=" size="2" value="equal"/>
                </div>
            </div>
        )
    }
}

export default App

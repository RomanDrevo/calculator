import React, {Component} from 'react'
import update from 'immutability-helper'
import math from 'mathjs'
import './App.css'
import DisplayComponent from './components/DisplayComponent'
import ButtonComponent from './components/ButtonComponent'

class App extends Component {
    state = {
        operations: []
    }

    calculate = () => {
        let result = this.state.operations.join('')
        console.log(result)
        if (result) {
            result = eval(result)
            console.log(eval(result))
            this.setState({
                operations: [result],
            })
        }
    }
    handleClick = e => {
        const value = e.target.getAttribute('action')
        console.log(value)
        switch (value) {
            case 'clear':
                this.setState({
                    operations: [],
                })
                break
            case 'equal':
                this.calculate()
                break
            default:
                const newOperations = update(this.state.operations, {
                    $push: [value],
                })
                this.setState({
                    operations: newOperations,
                })
                break
        }
    }

    render() {
        return (
            <div className="App">
                <DisplayComponent data={this.state.operations}/>
                <div className="buttons-wrapper flex flex-wrap flex-column">
                    <ButtonComponent onClick={this.handleClick} label="C" value="clear"/>
                    <ButtonComponent onClick={this.handleClick} label="7" value="7"/>
                    <ButtonComponent onClick={this.handleClick} label="4" value="4"/>
                    <ButtonComponent onClick={this.handleClick} label="1" value="1"/>
                    <ButtonComponent onClick={this.handleClick} label="0" value="0"/>

                    <ButtonComponent onClick={this.handleClick} label="/" value="/"/>
                    <ButtonComponent onClick={this.handleClick} label="8" value="8"/>
                    <ButtonComponent onClick={this.handleClick} label="5" value="5"/>
                    <ButtonComponent onClick={this.handleClick} label="2" value="2"/>
                    <ButtonComponent onClick={this.handleClick} label="." value="."/>

                    <ButtonComponent onClick={this.handleClick} label="x" value="*"/>
                    <ButtonComponent onClick={this.handleClick} label="9" value="9"/>
                    <ButtonComponent onClick={this.handleClick} label="6" value="6"/>
                    <ButtonComponent onClick={this.handleClick} label="3" value="3"/>
                    <ButtonComponent label="" value="null"/>

                    <ButtonComponent onClick={this.handleClick} label="-" value="-"/>
                    <ButtonComponent onClick={this.handleClick} label="+" size="2" value="+"/>
                    <ButtonComponent onClick={this.handleClick} label="=" size="2" value="equal"/>
                </div>
            </div>
        )
    }
}

export default App

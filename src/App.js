import React, {Component, useState} from 'react'
import './App.css'
import DisplayComponent from './components/DisplayComponent'
import ButtonComponent from './components/ButtonComponent'
import {debounce} from "lodash"
import Test from "./components/Test";



class App extends Component {

    state = {
        // symbols: [],
        operation: '',
        result: 0
    }


    calculate = () => {
        let res = this.state.operation
        if(res){
            res = eval(res)
            console.log(eval(res))
            this.setState({
                result: res,
            })
        }
    }

    handleOnClick = debounce(
        value => {
            // const value = str.target.getAttribute('action')
            switch (value) {
                case 'clear':
                    this.setState({
                        operation: '',
                        result: 0
                    })
                    break
                case 'equal':
                    this.calculate()
                    break
                default:
                    this.setState({
                        operation: this.state.operation + value
                    })
                    break
            }
        }, 300
    )

    handleOnChange = debounce(value => {

        if(value === '='){
            console.log('equal')
            this.calculate()
            return null
        }else {
            this.setState({
                operation: value,
            })
        }
    }, 500)


    handleKeyPress = (e)=> {
        if (e.key === 'Enter' || e.key === '=') {
            this.calculate()
        }
    }

    render() {
        console.log('App rendering...')
        return (
            <div className="App">
                {/*<Test />*/}
                {/*<input onChange={(e) => this.handleOnChange(e.target.value)} />*/}
                <DisplayComponent data={this.state.result}/>
                <div className="display">
                    <input
                        onKeyPress={this.handleKeyPress}
                        value={this.state.operation}
                        onChange={(e) => this.handleOnChange(e.target.value)}
                    />
                    {/*{symbols}*/}
                </div>
                <div className="buttons-wrapper flex flex-wrap flex-column">
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="C" value="clear"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="7" value="7"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="4" value="4"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="1" value="1"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="0" value="0"/>

                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="/" value="/"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="8" value="8"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="5" value="5"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="2" value="2"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="." value="."/>

                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="*" value="*"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="9" value="9"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="6" value="6"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="3" value="3"/>
                    <ButtonComponent symbol="" value="null"/>

                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="-" value="-"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="+" size="2" value="+"/>
                    <ButtonComponent onClick={(e)=>this.handleOnClick(e.target.getAttribute('action'))} symbol="=" size="2" value="equal"/>
                </div>
            </div>
        )
    }
}

export default App

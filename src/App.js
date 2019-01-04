import React, {Component} from 'react'
import './App.css'
import DisplayComponent from './components/DisplayComponent'
import ButtonComponent from './components/ButtonComponent'
import {debounce} from "lodash"

class App extends Component {

    state = {
        // symbols: [],
        operation: ''
    }

    calculate = () => {
        // let result = this.state.symbols.join('')
        // // console.log(this.state.symbols)
        // if (result) {
        //     result = eval(result)
        //     console.log(eval(result))
        //     this.setState({
        //         symbols: [result],
        //     })
        // }

        let res = this.state.operation

        if(res){
            res = eval(res)
            console.log(eval(res))
            this.setState({
                operation: res,
            })
        }
    }




    handleOnClick = debounce(
        value => {
            // const value = str.target.getAttribute('action')
            console.log('value: ', value)

            switch (value) {
                case 'clear':
                    this.setState({
                        operation: '',
                    })
                    break
                case 'equal':
                    this.calculate()
                    break
                default:
                    this.setState({
                        // symbols: [...this.state.symbols, value],
                        operation: this.state.operation + value
                    })
                    break
            }
        }, 300
    )

    handleOnChange = debounce(value => {
        console.log('value: ', value)


        // switch (symbol) {
        //     case 'clear':
        //         this.setState({
        //             symbols: [],
        //         })
        //         break
        //     case '=':
        //         this.calculate()
        //         break
        //     default:
        //
        //         this.setState({
        //             operation: symbol
        //         })
        //         break
        // }

        if(value === '='){
            console.log('equal')
            this.calculate()
            return null
        }else {
            // console.log('value: ', value)
            this.setState({
                operation: value,
                // symbols: [...this.state.symbols, value]
            })
        }

    }, 500)


    handleKeyPress = (e)=> {
        // console.log('e.key: ', e.key);
        if (e.key === 'Enter' || e.key === '=') {

            this.calculate()
        }
    }

    render() {
        return (
            <div className="App">
                {/*<input onChange={(e) => this.handleOnChange(e.target.value)} />*/}
                <DisplayComponent data={this.state.operation}/>
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

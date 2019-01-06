import React, {Component, useState} from 'react'
import './App.css'
import DisplayComponent from './components/DisplayComponent'
import ButtonComponent from './components/ButtonComponent'
import {debounce} from "lodash"
import Test from "./components/Test";



const App  = () => {

    // state = {
    //     // symbols: [],
    //     operation: '',
    //     result: 0
    // }

    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)


    const calculate = () => {
        let res = operation
        if(res){
            res = eval(res)
            console.log(eval(res))
            // this.setState({
            //     result: res,
            // })
            setResult(res)
        }
    }

    const handleOnClick = debounce(
        value => {
            // const value = str.target.getAttribute('action')
            switch (value) {
                case 'clear':
                    setOperation('')
                    setResult(0)
                    break
                case 'equal':
                    calculate()
                    break
                default:
                    setOperation(operation + value)
                    break
            }
        }, 300
    )

    const handleOnChange = debounce(value => {
        if(value === '='){
            calculate()
            return null
        }else {

            setOperation(value)
        }
    }, 500)


    const handleKeyPress = (e)=> {
        if (e.key === 'Enter' || e.key === '=') {
            calculate()
        }
    }


        return (
            <div className="App">
                <Test />
                {/*<input onChange={(e) => this.handleOnChange(e.target.value)} />*/}
                <DisplayComponent data={result}/>
                <div className="display">
                    <input
                        onKeyPress={()=>handleKeyPress()}
                        value={operation}
                        onChange={(e) => handleOnChange(e.target.value)}
                    />
                    {/*{symbols}*/}
                </div>
                <div className="buttons-wrapper flex flex-wrap flex-column">
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="C" value="clear"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="7" value="7"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="4" value="4"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="1" value="1"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="0" value="0"/>

                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="/" value="/"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="8" value="8"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="5" value="5"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="2" value="2"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="." value="."/>

                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="*" value="*"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="9" value="9"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="6" value="6"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="3" value="3"/>
                    <ButtonComponent symbol="" value="null"/>

                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="-" value="-"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="+" size="2" value="+"/>
                    <ButtonComponent onClick={(e)=>handleOnClick(e.target.getAttribute('action'))} symbol="=" size="2" value="equal"/>
                </div>
            </div>
        )

}

export default App


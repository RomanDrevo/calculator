import React, {Component, useState} from 'react'

const Test = () => {

    // state = {
    //     x: 666
    // }

    const addToX = () =>{
        setX(666)
    }


    const [x, setX] = useState(444)
    // const [count, setCount] = useState(0);
    return (
        <div className="display">
            <h1 onClick={()=> addToX()}>{x}</h1>
            {/*{data}*/}
        </div>
    )

}

export default Test
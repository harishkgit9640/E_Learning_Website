import React, { useState } from 'react'

const Counter = () => {
    // const [data, setData] = useState()
    const name = 'javascript'
    const incFunction = () => {
    }
    const decFunction = () => {
    }
    return (
        <div>
            <h1>Hello {name} </h1>
            <button onClick={incFunction} >+</button>
            <button onClick={decFunction} >-</button>
        </div>
    )
}

export default Counter;

import React, { useState } from 'react'

const Counter = () => {
    const [data, setData] = useState(0)
    const incFunction = () => {
        if (data <= 9 || data > 0) {
            setData((data + 1));
        }
    }
    const decFunction = () => {
        if (data === 0) {
            setData(data)
        } else {
            setData(data - 1)
        }

    }
    return (
        <div className='container mt-5 mx-auto'>
            <h1> {data} </h1>
            <button className='btn btn-success' onClick={incFunction} >+</button>
            <button className='btn btn-danger' onClick={decFunction} >-</button>
        </div>
    )
}

export default Counter;

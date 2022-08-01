import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { decrement, increment } from '../../features/counter/counterSlice'

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div style={{ minHeight: "100px", display: "flex", paddingTop: "5rem", justifyContent: "center" }}>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button> &nbsp; 
                <span>{counter}</span>
                &nbsp; 
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter
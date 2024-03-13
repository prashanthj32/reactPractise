import React from 'react'
import { useReducer } from 'react'

const intialValue = {
    firstCounter: 0,
    secondCounter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Inc':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'Dec':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'Reset': return {
            ...state,
            firstCounter: 0,
        };
        case 'Inc2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'Dec2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'Reset2':
            return {
                ...state,
                secondCounter: 0
            };
        default:
            return state
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, intialValue)
    return (
        <div>
            Counter -- {count.firstCounter}

            <button type='button' onClick={() => dispatch({ type: 'Inc', value: 1 })}>Increment</button>
            <button type='button' onClick={() => dispatch({ type: 'Dec', value: 1 })}>Decrement</button>

            <button type='button' onClick={() => dispatch({ type: 'Inc', value: 5 })}>Increment 5</button>
            <button type='button' onClick={() => dispatch({ type: 'Dec', value: 5 })}>Decrement 5</button>
            <button type='button' onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
            <br />
            ----------------------------------------------------------------------------------
            <br />
            Counter ------ {count.secondCounter}

            <button type='button' onClick={() => dispatch({ type: 'Inc2', value: 1 })}>Increment</button>
            <button type='button' onClick={() => dispatch({ type: 'Dec2', value: 1 })}>Decrement</button>

            <button type='button' onClick={() => dispatch({ type: 'Inc2', value: 5 })}>Increment 5</button>
            <button type='button' onClick={() => dispatch({ type: 'Dec2', value: 5 })}>Decrement 5</button>
            <button type='button' onClick={() => dispatch({ type: 'Reset2' })}>Reset</button>

        </div>
    )
}

export default Counter2

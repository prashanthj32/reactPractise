import React from 'react'
import { useReducer } from 'react'

const intialValue = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'Inc' : 
            return state+1;
        case 'Dec' :
            return state - 1;
        case 'Reset' :
            return intialValue;
        default: 
            return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, intialValue)
    return (
        <div>
            Counter -- {count}

            <button type='button' onClick={()=>dispatch('Inc')}>Increment</button>
            <button type='button' onClick={()=>dispatch('Dec')}>Decrement</button>
            <button type='button' onClick={()=>dispatch('Reset')}>Reset</button>

        </div>
    )
}

export default Counter
import React, { useMemo } from 'react'
import { useState } from 'react'

function UseMemoExample() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // const isEven = () =>{
    //     console.log('is even checker')
    //     for(let i=0 ; i < 200000000 ; i++){}
    //     return counter%2 === 0 ? true : false
    // }

    const isEven = useMemo(()=>{
        console.log('is even checker')
        for(let i=0 ; i < 200000000 ; i++){}
        return counter%2 === 0 ? true : false
    },[counter])

    return (
        <div>
            UseMemoExample
            <br />

            <button onClick={()=>{
                setCounter(counter + 1)
            }}>Counter1 {counter}</button> {isEven ? 'Even' : 'Odd'}
            <br />
            <button onClick={()=>{
                setCounter2(counter2 + 1)
            }}>Counter2 {counter2}</button>


        </div>
    )
}

export default UseMemoExample
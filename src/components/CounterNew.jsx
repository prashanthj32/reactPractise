import React, { useState } from 'react'

function CounterNew() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>CounterNew</div>
            <div>
                <h1>Counter {count}</h1>

                <button onClick={() => {
                    setCount(prevCount => prevCount + 1);

                }}>Increase 1</button>

                <button onClick={() => {
                    setCount(prevCount => prevCount - 1);

                }}> Decrease 1</button>

                <button onClick={() => {
                    for (let i = 0; i < 5; i++) {
                        console.log(i);
                        setCount(prevCount => prevCount + 1);
                    }
                }}>Increase 5</button>
            </div>
        </>
    )
}

export default CounterNew
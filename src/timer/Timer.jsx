import React, { useEffect, useState } from 'react'

function Timer() {

    const [timer, setTimer] = useState(0);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    useEffect(() => {
        let intervel = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => {
            clearInterval(intervel);
        }
    }, [timer]);

    useEffect(() => {
        console.log('count1');
    }, [count1, count2]);

    useEffect(() => {
        console.log('count2');
    }, [count2]);


    return (
        <div>
            Timer -- {timer}


            <button onClick={() => {
                setCount1(count1 + 1);
            }}>Counter1</button>

            <button onClick={() => {
                setCount2(count2 + 1);
            }}>Counter2</button>
        </div>
    )
}

export default Timer
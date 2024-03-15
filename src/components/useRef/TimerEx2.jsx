import React, { useEffect, useRef, useState } from 'react'

function TimerEx2() {
    const [timer, setTimer] = useState(0);
    const intervelRef = useRef();

    useEffect(() => {
        intervelRef.current = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => {
            clearInterval(intervelRef.current);
        }
    }, [timer]);
    return (
        <div>
            Timer -- {timer}

            <button onClick={()=>{
                clearInterval(intervelRef.current)
                setTimer(0);
            }}>Clear</button>
        </div>
    )
}

export default TimerEx2
import React, {useEffect, useState} from 'react'

function Timer() {

    const [timer, setTimer]= useState(0);

    useEffect(()=>{
        let intervel = setInterval(()=>{
            console.log('timer effect', timer, 'count')
            setTimer(prevTimer => prevTimer + 1);
        },1000);
        console.log('timer effect');
        return () =>{
            clearInterval(intervel);
        }
    },[]);

    


    return (
        <div>
            Timer -- {timer}
        </div>
    )
}

export default Timer
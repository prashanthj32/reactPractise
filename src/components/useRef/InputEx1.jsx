import React, { useEffect, useRef } from 'react'

function InputEx1() {

    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef}/>
        </div>
    )
}

export default InputEx1
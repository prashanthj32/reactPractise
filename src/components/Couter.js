import React, { useState } from 'react'
import NameHandler from './NameHandler';




function Couter() {

    const [count, setCount] = useState(0);

    function updateCount(type,value){
        if(type === 'INC'){
            setCount(count + value);
        } else{
            setCount(count - value);
        }
    }

    return (
        <div>
            <h1>
                Couter ----- {count}
            </h1>
            <button onClick={()=>updateCount('INC',1)}>Increment 1</button>
            <button onClick={() =>updateCount('DEC',1)}>Decrement 1</button>

            <h1>on counter </h1>
            <NameHandler />
            --------------------------------------------------
        </div>
    )
}

export default Couter
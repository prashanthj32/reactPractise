import React, { useContext } from 'react'
import { AddressContext, CounterContext, UserContext } from '../../App'

function CompC(props) {

    const user = useContext(UserContext);
    const address = useContext(AddressContext);
    const counter = useContext(CounterContext);
    return (
        <div>
            CompC -- {props.userName} --- {user} --- {address}
            counter in C === {counter.counterCount}
            <button type='button' onClick={()=>counter.counterDispatch('Inc')}>Increment</button>
            <button type='button' onClick={()=>counter.counterDispatch('Dec')}>Decrement</button>
            <button type='button' onClick={()=>counter.counterDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default CompC
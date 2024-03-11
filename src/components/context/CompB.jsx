import React from 'react'
import CompC from './CompC'

function CompB(props) {
    return (
        <div>
            CompB ---- {props.userName}
            <CompC  userName = {props.userName}/>
        </div>
    )
}

export default CompB
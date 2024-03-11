import React, { useContext } from 'react'
import CompB from './CompB'
import { UserContext } from '../../App'

function CompA(props) {

    const user = useContext(UserContext)
    return (
        <div>
            CompA --- {props.userName} ---- {user}

            <CompB userName = {props.userName}/>
        </div>
    )
}

export default CompA
import React, { useContext } from 'react'
import { AddressContext, UserContext } from '../../App'

function CompC(props) {

    const user = useContext(UserContext);
    const address = useContext(AddressContext);
    return (
        <div>
            CompC -- {props.userName} --- {user} --- {address}
        </div>
    )
}

export default CompC
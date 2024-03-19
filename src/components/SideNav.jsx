import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
    return (
        <div  style={{backgroundColor:'lightgray',display:'flex', margin:'10px', padding:'10px'}}>
            {/* <button style={{margin:'10px'}}>Use memo</button>
            <button style={{margin:'10px'}}>Timer</button> */}

            <Link to="/" style={{margin:'10px'}}>Use memo</Link>
            <Link to="/timer" style={{margin:'10px'}}>Timer</Link>

        </div>
    )
}

export default SideNav
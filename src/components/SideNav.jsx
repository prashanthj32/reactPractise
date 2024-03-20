import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function SideNav() {
    return (
        <div  style={{backgroundColor:'lightgray',display:'flex', margin:'10px', padding:'10px'}}>
            {/* <button style={{margin:'10px'}}>Use memo</button>
            <button style={{margin:'10px'}}>Timer</button> */}

            {/* <Link to="/" style={{margin:'10px'}}>Use memo</Link>
            <Link to="/timer" style={{margin:'10px'}}>Timer</Link> */}

            <NavLink to='/' style={{margin:'10px'}}>Home</NavLink>
            <NavLink to='products' style={{margin:'10px'}}>Products</NavLink>
            <NavLink to='users' style={{margin:'10px'}}>Users</NavLink>


        </div>
    )
}

export default SideNav
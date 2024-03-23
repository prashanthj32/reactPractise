import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext, GetUsername, UseAuth } from '../shared/AuthToken'

function SideNav() {
    // const authContext = useContext(AuthContext);
    const useAuth = UseAuth()
    return (
        <div style={{ backgroundColor: 'lightgray', display: 'flex', margin: '10px', padding: '10px' }}>
            {/* <button style={{margin:'10px'}}>Use memo</button>
            <button style={{margin:'10px'}}>Timer</button> */}

            {/* <Link to="/" style={{margin:'10px'}}>Use memo</Link>
            <Link to="/timer" style={{margin:'10px'}}>Timer</Link> */}

            <NavLink to='/' style={{ margin: '10px' }}>Home</NavLink>
            <NavLink to='products' style={{ margin: '10px' }}>Products</NavLink>
            <NavLink to='users' style={{ margin: '10px' }}>Users</NavLink>
            <NavLink to='about' style={{ margin: '10px' }}>About</NavLink>
            {
                !useAuth.user && <NavLink to='login' style={{ margin: '10px' }}>Login</NavLink>
            }

            {
                useAuth.user && <button onClick={()=>useAuth.Logout()}>Logout</button>
            }
        </div>
    )
}

export default SideNav
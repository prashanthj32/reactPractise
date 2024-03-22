import React from 'react'
import { Outlet } from 'react-router-dom'

function Cars() {
    return (
        <div>
            Cars
            <div>
                khkdfgkfhgkjfgkjdfkgjdfjkgdf
            </div>

            <Outlet />

            <div>
                sfhskfhksdhfkjsdhfkshfkjsh
            </div>
        </div>
    )
}

export default Cars
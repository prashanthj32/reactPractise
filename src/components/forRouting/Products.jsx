import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Products() {
    const navigate = useNavigate()
  return (
    <div>
        <p>Products</p>
        <button type='button' onClick={()=>navigate(-1)}>Back</button>
        
        <div>
            <Link to='book' style={{margin:'10px'}}>Books</Link>
            <Link to='car' style={{margin:'10px'}}>Cars</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Products
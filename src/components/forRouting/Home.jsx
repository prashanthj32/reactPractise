import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const navigateToProducts = () =>{
    
        navigate('/Products')
    }

    return (
        <div>
            <p>Home</p>
            <button type='button' onClick={()=>navigateToProducts()}>Products</button>
        </div>
    )
}

export default Home
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
    const navigate = useNavigate()
    return (
        <div>
            <p>Users</p>
            <div>
                <p onClick={()=>navigate('/users/1')}>user1</p>
                <p  onClick={()=>navigate('/users/2')}>user2</p>
                <p  onClick={()=>navigate('/users/admin')}>admin</p>

            </div>
        </div>
    )
}

export default Users
import React, { useState } from 'react'
import { SetUsername, UseAuth } from '../../shared/AuthToken';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [userName, setUserName] = useState(null);
    const auth = UseAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.Login(userName);
        navigate('/',{replace : true});
    }

    return (
        <div>
            Login

            <input onChange={(event)=>setUserName(event.target.value)} type='text' placeholder='Enter userName' />
            <button onClick={()=>handleLogin()}>
                Login
            </button>
        </div>
    )
}

export default Login
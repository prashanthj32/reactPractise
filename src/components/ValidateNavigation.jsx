import React from 'react'
import { UseAuth } from '../shared/AuthToken'
import { Navigate, useNavigate } from 'react-router-dom';

function ValidateNavigation(props) {
    const auth = UseAuth();
    const user = auth.GetUsername();
    const navigate = useNavigate();

    if(user){
        return (
            props.children
        )
    }else{
        return (<Navigate to={'/login'} />)
    }
}

export default ValidateNavigation
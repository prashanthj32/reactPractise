import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'


const intialValue = {
    data: null,
    isLoading: false,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case 'Fail':
            return {
                data: null,
                isLoading: false,
                error: action.error
            }
        case 'Loading':
            return {
                data: null,
                isLoading: true,
                error: null
            }
        default:
            return state
    }
}

function Apicallwithreducer() {

    const [state, dispatch] = useReducer(reducer, intialValue);

    useEffect(() => {
        dispatch({
            type: 'Loading',
            data: {},
            error: {},
            isLoading: true
        })
        axios.get('https://jsonplaceholder.typicod.com/posts/1').then((result) => {
            console.log(result.data);
            dispatch({
                type: 'Success',
                isLoading: false,
                error: {},
                data: result.data
            })
        }).catch((error) => {
            console.log(error);
            dispatch({
                type: 'Fail',
                isLoading: false,
                error: 'Something went wrong',
                data: {}
            })
        })
    }, [])

    return (
        <div>
            Apicallwithreducer

            {
                state.isLoading && 
                    <p>Loading .....</p>
                
            }

            {
                !state.isLoading && state.data  && 
                     <p>{JSON.stringify(state.data)}</p>
                
            }

            {
                !state.isLoading && state.error &&
                    <p style={{color : 'red'}}>{state.error}</p>
                
            }
        </div>
    )
}

export default Apicallwithreducer
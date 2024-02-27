import React, { useState } from 'react'

function NameHandler() {
    const [name, setName] = useState({
        firstName: '',
        lastName: '',
        
    });
    return (
        <div>
            <h1>NameHandler</h1>

            <input onChange={(event) => {
                setName({ ...name, firstName: event.target.value })
            }} />

            <input onChange={(event) => {
                setName({ ...name, lastName: event.target.value })
            }} />

            <div>
                <h2>firstName : {name.firstName} - lastName : {name.lastName}</h2>
            </div>
            <div>{JSON.stringify(name)}</div>
        </div>
    )
}

export default NameHandler
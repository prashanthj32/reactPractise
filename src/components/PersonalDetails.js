import React, { useState } from 'react'

function PersonalDetails() {
    const [name, setName] = useState({
        firstName: '',
        lastName: '',

    });

    let details = {
        name: 'Manasa',
        age: 92,
        gender: 'FEMALE',
        number: 9988776655,
        email: 'ma@gmail.com'
    }

    const [personalDetails, setPersonalDetails] = useState({
        name: 'Manasa',
        age: 92,
        gender: 'MALE',
        number: 9988776655,
        email: 'ma@gmail.com'
    })
    return (
        <div>
            <h1>Profile</h1>
            {/* <form> */}
            <input type="text" placeholder='name' value={personalDetails.name} onChange={(event) => {
                setPersonalDetails({ ...personalDetails, name: event.target.value })
            }} />

            <input type='number' placeholder='age' value={personalDetails.age} onChange={(event) => {
                setPersonalDetails({ ...personalDetails, age: event.target.value })
            }} />

            <div>
                gender
                <input type='radio' name='GENDER' checked={personalDetails.gender === "FEMALE"}
                    value={personalDetails.gender} onChange={(event) => {
                        setPersonalDetails({ ...personalDetails, gender: 'FEMALE' })
                    }} /><span>FEMALE</span>

                <input type='radio' name='GENDER' checked={personalDetails.gender === "MALE"}
                    value={personalDetails.gender} onChange={(event) => {
                        setPersonalDetails({ ...personalDetails, gender: 'MALE' })
                    }} /><span>MALE</span>

            </div>

            <input type='number' placeholder='number' value={personalDetails.number} onChange={(event) => {
                setPersonalDetails({ ...personalDetails, number: event.target.value })
            }} />

            <input type='email' placeholder='Email' value={personalDetails.email} onChange={(event) => {
                setPersonalDetails({ ...personalDetails, email: event.target.value })
            }} />

            {/* <div>
                <h2>firstName : {name.firstName} - lastName : {name.lastName}</h2>
            </div> */}
            <div>{JSON.stringify(personalDetails)}</div>
            {/* </form> */}
        </div>
    )
}

export default PersonalDetails
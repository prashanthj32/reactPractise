import { DevTool } from '@hookform/devtools';
import React from 'react'
import { useForm } from 'react-hook-form'

function BasicForm() {
    const form = useForm({
        defaultValues : {
            username: 'Qwerty',
            email: 'qwerty@gmail.com',
            number: '',
            address: {
                line:'201, ',
                buildname: 'sreman Vlite',
                city: 'Hyderabad'
            }
        }
    });
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState
    // const {name, ref, onChange} = register('username');

    const formSubmit = (data) => {
        console.log(data, "Form submited")
    }

    return (
        <>
            <div>BasicForm</div>
            <div>
                <form onSubmit={handleSubmit(formSubmit)} noValidate>
                    <input {
                        ...register("username", {
                            required: {
                                value: true,
                                message: "UserName is required"
                            }
                        })
                    } id="username" type='text' placeholder='username' /><br />
                    <p className='error-message'>{errors.username?.message}</p>

                    <input {
                        ...register("email", {
                            // pattern: {
                            //     value: /^[A-Za-z]+$/i,
                            //     message: "InValid Email"
                            // },
                            // validate: (value) => {
                            //     if (value === 'kumar@gmail.com') {
                            //         return 'Email invalid'
                            //     }
                            //     else {
                            //         return true
                            //     }
                            // }

                            validate : {
                                notUser : (value) =>{
                                    if (value === 'kumar@gmail.com') {
                                        return 'Email invalid'
                                    }else{
                                        return true
                                    }
                                },
                                onlyGmail : (value) =>{
                                    if(value.split('@')[1] === 'gmail.com'){
                                        return true;
                                    }else{
                                        return 'only gmail is valid';
                                    }
                                }
                            }
                        })
                    } type='email' id="email" placeholder='email' /><br />

                    <p className='error-message'>{errors.email?.message}</p>

                    <input {
                        ...register("number", {
                            max: {
                                value: 9999999999,
                                message: "Invalid Number"
                            },
                            minLength: {
                                value: 10,
                                message: "Invalid Number"
                            }
                        })
                    } type='number' id="number" placeholder='number' /><br />
                    {/* {JSON.stringify(errors.number)} */}
                    <p className='error-message'>{errors.number?.message}</p>

                    <input {
                        ...register("address.line", {
                            // required: {
                            //     value: true,
                            //     message: "UserName is required"
                            // }
                        })
                    } id="username" type='text' placeholder='line' /><br />

<input {
                        ...register("address.buildname", {
                            // required: {
                            //     value: true,
                            //     message: "UserName is required"
                            // }
                        })
                    } id="username" type='text' placeholder='buildname' /><br />

<input {
                        ...register("address.city", {
                            // required: {
                            //     value: true,
                            //     message: "UserName is required"
                            // }
                        })
                    } id="username" type='text' placeholder='username' /><br />


                    <button type='submit'>Submit</button>
                </form>
            </div>
            <DevTool control={control} />

        </>
    )
}

export default BasicForm
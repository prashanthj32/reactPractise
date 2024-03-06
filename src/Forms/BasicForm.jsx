import { DevTool } from '@hookform/devtools';
import React from 'react'
import { useForm } from 'react-hook-form'

function BasicForm() {
    const form = useForm({
        defaultValues: {
            username: 'Qwerty',
            email: 'qwerty@gmail.com',
            number: '',
            address: {
                line: '201, ',
                buildname: 'sreman Vlite',
                city: 'Hyderabad'
            },
           
            dob: ''
        },
    });
    const { register, handleSubmit, control, formState, watch, getValues, setValue, reset, trigger } = form;
    const { errors, dirtyFields, touchedFields, isSubmitSuccessful, isSubmitted, isSubmitting, submitCount } = formState
    // const {name, ref, onChange} = register('username');

    // console.log(dirtyFields,'Dirty');
    // console.log(touchedFields,'touched');

    const formSubmit = (data) => {
        console.log(data, "Form submited")
    }

    console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});

    function getFormData(){
        console.log('get form data', getValues())
    }

    function setFormData(){
        console.log('set form data', setValue('username','praneeth'))
    }

    
    const watchAge = watch()

    return (
        <>
            <div>BasicForm</div>
            <p>{JSON.stringify(watchAge)}</p>
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

                            validate: {
                                notUser: (value) => {
                                    if (value === 'kumar@gmail.com') {
                                        return 'Email invalid'
                                    } else {
                                        return true
                                    }
                                },
                                onlyGmail: (value) => {
                                    if (value.split('@')[1] === 'gmail.com') {
                                        return true;
                                    } else {
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


                    <input {
                        ...register("age", {
                            valueAsNumber: true,
                            disabled: true,
                            required:{
                                value: true
                            }
                        })
                    } id="age" type='number' placeholder='age' /><br />

                    <input {
                        ...register("dob", {
                            valueAsDate : true
                        })
                    } id="dob" type='date' placeholder='dob' /><br />


                    <button  disabled={isSubmitting} type='submit'>Submit</button>
                    <button type='button' onClick={()=>getFormData()}>Get Data</button>
                    <button type='button' onClick={()=>setFormData()}>Set Data</button>
                    <button disabled={!isSubmitSuccessful} type='button' onClick={()=>reset()}>Reset</button>
                    <button type='button' onClick={()=>trigger()}>Validation Trigger</button>

                </form>
            </div>
            <DevTool control={control} />

        </>
    )
}

export default BasicForm
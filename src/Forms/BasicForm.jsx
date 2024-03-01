import { DevTool } from '@hookform/devtools';
import React from 'react'
import { useForm } from 'react-hook-form'

function BasicForm() {
    const form = useForm();
    const {register, handleSubmit, control, formState } = form;
    const {errors} = formState
    // const {name, ref, onChange} = register('username');

    const formSubmit = (data)=>{
        console.log(data,"Form submited")
    }

    return (
        <>
            <div>BasicForm</div>
            <div>
                <form onSubmit={handleSubmit(formSubmit)} noValidate>
                    <input {
                        ...register("username",{
                            required : {
                                value: true,
                                message: "UserName is required"
                            }
                        })
                    } id="username" type='text' placeholder='username'/><br />
                    <p className='error-message'>{errors.username?.message}</p>

                    <input {
                        ...register("email",{
                            pattern:{
                                value:/^[A-Za-z]+$/i,
                                message:"InValid Email"
                            }
                        })
                    } type='email'  id="email" placeholder='email'/><br />

                    <p className='error-message'>{errors.email?.message}</p>

                    <input {
                        ...register("number",{
                            max:{
                                value:9999999999,
                                message: "Invalid Number"
                            },
                            minLength:{
                                value: 10,
                                message: "Invalid Number"
                            }
                        })
                    } type='number' id="number" placeholder='number'/><br />
                    {/* {JSON.stringify(errors.number)} */}
                    <p className='error-message'>{errors.number?.message}</p>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <DevTool control={control}  />

        </>
    )
}

export default BasicForm
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

function AddressBook() {
    const addressBook = useForm({
        defaultValues: {
            address: [
                {
                    line: '',
                    city: ''
                }
            ]
        }
    });

    const { register, handleSubmit, control } = addressBook;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'address'
    });

    const addressBookSubmit = (formValues) => {
        console.log('address', formValues);
    }

    return (
        <>
            <div>AddressBook</div>

            <form onSubmit={handleSubmit(addressBookSubmit)}>
                <button type='button' onClick={() => {
                    append({
                        line: '',
                        city: ''
                    })
                }}>Add Address</button>

                {
                    fields.map((feild, index) => (
                        <div key={index}>
                            <div>
                                <p>{`address.${index}.line`}</p>
                                <input {...register(`address.${index}.line`)} placeholder='line' />
                            </div>
                            <div>
                                <input {...register(`address.${index}.city`)} placeholder='city' />
                            </div>
                            <button type='button'onClick={()=>{
                                remove(index)
                            }}>Remove</button>
                        </div>
                    ))
                }

                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddressBook
import React, { useState } from 'react'

function AddAndUpdateUser(props) {
    const [formData, setFormData]= useState(props.selectedUser);
    return (
        <>
            <div>AddAndUpdateUser</div>
            <div>
                <input placeholder='name' type='text' value={formData.name} onChange={(event)=>setFormData({...formData,name:event.target.value})}/>
                <input placeholder='Contact' type='number' value={formData.contact} onChange={(event)=>setFormData({...formData,contact:event.target.value})}/>
                <input placeholder='Country' type='text' value={formData.country} onChange={(event)=>setFormData({...formData,country:event.target.value})}/>
                
                <button onClick={()=>{
                    if(formData.name && formData.contact && formData.country){
                        props.handleSubmit(formData);
                    }else{
                        window.alert('All feilds are required');
                    }
                }}>Submit</button>
                
                <button onClick={()=>{
                    props.closePopup()
                }}>Close</button>
            </div>
        </>
    )
}

export default AddAndUpdateUser
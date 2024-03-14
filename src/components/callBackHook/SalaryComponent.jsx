import React, { useCallback, useState } from 'react'
import TextViewer from './TextViewer';
import Button from './Button';

function SalaryComponent() {
    console.log('iam in salary ')
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(100000);

    // const handleAge = useCallback(()=>{
    //     setAge(age  + 1);
    // },[age])

    const handleAge = useCallback(() =>{
        setAge(age  + 1);
    },[age]);

    const handleSalary = useCallback(() =>{
        setSalary(salary  + 100000);
    },[salary]);

    return (
        <div>
            <p>SalaryComponent</p>
            
            <TextViewer age={age}/>

            <Button handleClick={handleAge} > Increase Age</Button>

            <TextViewer salary = {salary} />

            <Button handleClick={handleSalary} > Increase Salary</Button>





        </div>
    )
}

export default React.memo(SalaryComponent)
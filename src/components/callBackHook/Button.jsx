import React from 'react'

function Button(props) {
    console.log(`Iam in  button`)
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}

export default React.memo(Button)
import React from 'react'

function TextViewer(props) {
    console.log('iam in textViewer')
    return (
        <div>
            {props.age} ---------- {props.salary}
        </div>
    )
}

export default React.memo(TextViewer)
import React from 'react'

function ProductCard(props) {
    console.log(props)
    return (
        <><div>ProductCard</div>
            {props.product &&
                (<div style={{ height: '150px', width: '200px', border: '1px solid black' }}>
                    <h1>{props.product.name}</h1>
                    <h3>Rs. {props.product.rate}</h3>
                </div>) 
                // :
                // <p>no product</p>
            }
           <button onClick={() => props.handleProduct(props.product.name)}>Select Product</button>
        </>
    )

    // return React.createElement('div', {id:'mainDiv'} , React.createElement('h1',{},'hello prashanth'),'hello prashanth')
}

export default ProductCard
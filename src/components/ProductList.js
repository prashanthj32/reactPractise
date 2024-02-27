import React, { useState } from 'react'
import ProductCard from './ProductCard';

function ProductList() {

    let arr = [1, 2, 3, 4]
    const [products, setProducts] = useState([
        {
            name : 'saop',
            rate:20
        },
        {
            name : 'bat',
            rate:200
        },
        {
            name : 'ball',
            rate:50
        },
    ]);

    const [name, setName]= useState('')
    const [rate, setRate]= useState()
 
    function addProduct(){
        if(!name || !rate){
            return;
        }
        setProducts([...products ,{
            name : name,
            rate: rate
        }]);
        setName('');
        setRate(0);
    }
    const handleProduct = (productName) => {
        console.log('Selected product:', productName);
        // Handle the selected product logic here
      };
    
    let names=['as','abhi','manasa','praneeth','abhi'];
    return (
        <div>
            ProductList
            <input placeholder='name' value={name} onChange={(event)=>{
                setName(
                    event.target.value
                )
            }} />
             <input placeholder='rate' value={rate} type='number' onChange={(event)=>{
                setRate(
                    event.target.value
                )
            }} />
            <button onClick={()=>addProduct()}>Submit</button>
            <div style={{display : 'flex', }}>
                {
                    products.map((product, index) => {
                        return (
                            <div key={index}>
                                {/* <div style={{height:'150px', width:'200px', border:'1px solid black'}}>
                                    <h1>{product.name}</h1>
                                    <h3>Rs. {product.rate}</h3>
                                </div> */}
                                <ProductCard product={product} handleProduct={handleProduct} />
                                {/* {index} --- {JSON.stringify(product)} */}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductList
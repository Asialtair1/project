import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const handelerAdded = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product ={product}
                        handelerAdded = {handelerAdded}
                    ></Product>)
                }
            </div>

            <div className="card-container">
                <Card cart = {cart}></Card>
            </div>
        </div>
    );
};

export default Shop;
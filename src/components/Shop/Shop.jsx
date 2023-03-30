import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storageCart = getShoppingCart();
        console.log(storageCart);
    },[])

    const handelerAdded = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
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
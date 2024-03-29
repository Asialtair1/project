import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handelerAdded = props.handelerAdded

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handelerAdded(props.product)}
                className='btn-card'>
                Add to cart
                <FontAwesomeIcon icon= {faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
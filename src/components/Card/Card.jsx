import React from 'react';
import './Card.css'

const Card = ({cart}) => {
    // const {cart} = props;
    let Total = 0;
    let totalShipping = 0;
    for (const product of cart){
        Total = Total + product.price;
        totalShipping = totalShipping + product.shipping;

    }
    const tax = Total*7/100;
    const grandTotal = Total  + totalShipping + tax;
    return (
        <div className='card'>
            <h4>Order Summery</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${Total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Card;
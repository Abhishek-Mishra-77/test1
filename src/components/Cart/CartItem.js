import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    console.log(props)



    return (
        <li className='cartItem'>
            <div className='summary'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <span className='price'>{props.price}rs</span>
                <span className='amount'> x {props.count}</span>
            </div>


            <div className='actions'>

                <button>-</button>
                <button >+</button>
            </div>
        </li>
    )
}

export default CartItem;


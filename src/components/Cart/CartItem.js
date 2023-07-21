import React from 'react';
import './CartItem.css';

const CartItem = (props) => {



    return (
        <li className='cartItem'>
            <div className='summary'>
                <h2>Eclairs</h2>
                <p>Chocolate</p>
                <span className='price'>30Rs</span>
                <span className='amount'> x 3</span>
            </div>


            <div className='actions'>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartItem;

// onClick={() => props.removeByOne(props.id)}
// onClick={() => props.addByOne(props.id)}
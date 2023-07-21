import React, { useContext } from 'react';
import Model from '../../UI/Model';
import CartItem from './CartItem';
import { ItemProvideContext } from '../ConextApi/ItemProvoder';
import './Cart.css';

const Cart = (props) => {

    const cartCtx = useContext(ItemProvideContext);
    console.log(cartCtx)
    const cartItems =
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    count={item.count}
                    name={item.enteredName}
                    description={item.enteredDescription}
                    quantity={item.enteredQuantity}
                    price={item.enteredPrice}
                    addByOne={cartCtx.addByOne}
                    addByTwo={cartCtx.addByTwo}
                />
            ))}
        </ul>

    return (
        <Model>
            {cartItems}
            <div className='total'>
                <span>TotalAmount</span>
                <span>$ {cartCtx.totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='buttonItem' onClick={props.cartCloseHandler}>
                    Close
                </button>
                <button>Order</button>
            </div>

        </Model >
    )
}

export default Cart
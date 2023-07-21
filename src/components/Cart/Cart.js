import React, { useContext } from 'react';
import Model from '../../UI/Model';
import CartItem from './CartItem';
import { ItemProvideContext } from '../ConextApi/ItemProvoder';
import './Cart.css';

const Cart = (props) => {

    const cartCtx = useContext(ItemProvideContext);

    const cartItem =
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    count={item.count}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    addByOne={cartCtx.addByOne}
                />
            ))}
        </ul>

    return (
        <Model>
            <div className='total'>
                <span>Total Amount</span>
                <span>$ 20</span>
            </div>
            <div className='actions'>
                <button
                    onClick={props.cartCloseHandler}
                    className='buttonItem'>
                    Close
                </button>
                <button>Order</button>
            </div>

        </Model>
    )
}

export default Cart
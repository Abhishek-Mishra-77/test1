import React, { useContext } from 'react';
import classes from './NavBar.module.css';
import Card from '../UI/Card';
import { ItemProvideContext } from './ConextApi/ItemProvoder';

const NavBar = (props) => {

    const cartCtx = useContext(ItemProvideContext);

    return (
        <Card>
            <nav className={classes.navbar}>
                <div>
                    <h2>Registration Form</h2>
                </div>
                <button 
                onClick={props.cartOpenHandler}
                className={classes.cart}>
                    <h3>Your Cart</h3>
                    <span>{cartCtx.count}</span>
                </button>

            </nav>
        </Card>
    )
}

export default NavBar;
import React, { useState, useEffect, useContext } from "react";
import classes from './ListItem.module.css'
import { ItemProvideContext } from "./ConextApi/ItemProvoder";


const ListItem = (props) => {


    const cartCtx = useContext(ItemProvideContext);

      

    return (
        <div className={classes.main}>
            <h2>Items</h2>

            <table className={classes.table} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Buy1</th>
                        <th>Buy2</th>
                        <th>Buy3</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.enteredName}</td>
                            <td>{item.enteredDescription}</td>
                            <td>{item.enteredPrice}Rs</td>
                            <td>{item.enteredQuantity}qty</td>
                            <td>{<button onClick={() => cartCtx.addByOne(item)}>Buy1</button>}</td>
                            <td>{<button onClick={() => cartCtx.addByTwo(item)}>Buy2</button>}</td>
                            <td>{<button onClick={()=> cartCtx.addByThree(item)}>Buy3</button>}</td>
                            <td>{<button onClick={() => props.removeListHandler(item.id)}>Delete</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}

export default ListItem;

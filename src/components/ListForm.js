import React, { useState } from "react";
import classes from './ListForm.module.css';


const ListForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredDescription, setenteredDescription] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');



    const OnSubmitHandler = (event) => {
        event.preventDefault();
        const dataItem = {
            enteredName,
            enteredDescription,
            enteredPrice,
            enteredQuantity
        }
        props.addDataItem(dataItem);
        setEnteredName('')
        setenteredDescription('')
        setEnteredPrice('')
        setEnteredQuantity('')
    }



    return (

        <div className={classes.main}>
            <div><h2>Add Items</h2></div>
            <form onSubmit={OnSubmitHandler}>

                <div className={classes.input}>
                    <input
                        value={enteredName}
                        type="text"
                        placeholder="ItemName"
                        onChange={(event) => setEnteredName(event.target.value)}
                        className="fname" />
                </div>

                <div className={classes.input}>
                    <input
                        value={enteredDescription}
                        type="text"
                        placeholder="Description"
                        onChange={(event) => setenteredDescription(event.target.value)}
                        className="fname" />
                </div>
                <div className={classes.input}>
                    <input
                        value={enteredPrice}
                        type="number"
                        placeholder="Price"
                        onChange={(event) => setEnteredPrice(event.target.value)}
                        className="Price" />
                </div>
                <div className={classes.input}>
                    <input
                        value={enteredQuantity}
                        type='number'
                        name='qty'
                        onChange={(event) => setEnteredQuantity(event.target.value)}
                        placeholder="Quantity"
                        className="qty" />
                </div>
                <button className={classes.btn} type="submit" >Add</button>
            </form>
        </div>

    )
}

export default ListForm;
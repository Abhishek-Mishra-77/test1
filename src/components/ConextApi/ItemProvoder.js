import React, { useState, useEffect, createContext } from 'react'

export const ItemProvideContext = createContext();

const ItemProvoder = (props) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [totalAmount, setTotalAmout] = useState(0)


    useEffect(() => {
        let c = 0;
        let amount = 0;
        items.forEach((item) => {
            c = c + item.count;
            console.log(item)
            amount += item.count * item.enteredPrice;
        })
        setCount(c);
        setTotalAmout(amount);
    }, [items])




    const addByOne = (itemMM) => {
        const { id } = itemMM;
        setItems((items) => {
            if (items) {
                const restItems = items.filter((item) => item.id !== id);
                const currentItem = items.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count++;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newItem = {
                        id: id,
                        count: 1,
                        enteredPrice: itemMM.enteredPrice,
                        enteredName: itemMM.enteredName,
                        enteredDescription: itemMM.enteredDescription

                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 1,
                    enteredPrice: itemMM.enteredPrice,
                    enteredName: itemMM.enteredName,
                    enteredDescription: itemMM.enteredDescription
                }];
            }
        });
    };

    const addByTwo = (itemMM) => {
        const { id } = itemMM;
        setItems((items) => {
            if (items) {
                const restItems = items.filter((item) => item.id !== id);
                const currentItem = items.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count = currentItem.count + 2;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newItem = {
                        id: id,
                        count: 2,
                        enteredPrice: itemMM.enteredPrice,
                        enteredName: itemMM.enteredName,
                        enteredDescription: itemMM.enteredDescription
                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 2,
                    enteredPrice: itemMM.enteredPrice,
                    enteredName: itemMM.enteredName,
                    enteredDescription: itemMM.enteredDescription

                }];
            }
        });
    };





    const addByThree = (itemMM) => {
        const { id } = itemMM;
        console.log(itemMM)
        setItems((items) => {
            if (items) {
                const restItems = items.filter((item) => item.id !== id);
                const currentItem = items.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count = currentItem.count + 3;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newItem = {
                        id: id,
                        count: 3,
                        enteredPrice: itemMM.enteredPrice,
                        enteredName: itemMM.enteredName,
                        enteredDescription: itemMM.enteredDescription

                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 3,
                    enteredPrice: itemMM.enteredPrice,
                    enteredName: itemMM.enteredName,
                    enteredDescription: itemMM.enteredDescription
                }];
            }
        });
    };


    return (
        <ItemProvideContext.Provider value={{ items, addByOne, addByTwo, addByThree, count, totalAmount }}>
            {props.children}
        </ItemProvideContext.Provider>
    )
}

export default ItemProvoder
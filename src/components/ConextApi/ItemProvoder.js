import React, { useState, useEffect, createContext } from 'react'

export const ItemProvideContext = createContext();

const ItemProvoder = (props) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let c = 0;
        items.forEach((item) => {
            c = c + item.count;
        })
        setCount(c);
    }, [items])

    const addByOne = (id) => {
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
                        count: 1
                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 1
                }];
            }
        });
    };

    const addByTwo = (id) => {
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
                        count: 1
                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 1
                }];
            }
        });
    };





    const addByThree = (id) => {
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
                        count: 1
                    };
                    return [...restItems, newItem];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: id,
                    count: 1
                }];
            }
        });
    };


    return (
        <ItemProvideContext.Provider value={{ items, addByOne, addByTwo, addByThree, count }}>
            {props.children}
        </ItemProvideContext.Provider>
    )
}

export default ItemProvoder
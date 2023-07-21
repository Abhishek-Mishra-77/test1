import React, { Fragment, useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import ListForm from "./ListForm";
import ListItem from "./ListItem";
import Cart from './Cart/Cart'
import ItemProvider from './ConextApi/ItemProvoder'


function App() {



  // useState for main items get Render here
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);


  // New Data Item get Added Here along  with localeStorage
  const addDataItem = (dataItem) => {
    const newData = {
      id: Math.random().toString(),
      ...dataItem
    }

    setItems((items) => {
      const newDataItem = [...items, newData]
      localStorage.setItem('items', JSON.stringify(newDataItem))
      return newDataItem;
    })
  }

  // For Romoving the items from Browser
  const removeListHandler = (itemId) => {
    const UpdataItems = items.filter((item) => item.id !== itemId);
    if (UpdataItems) {
      setItems(() => {
        localStorage.setItem('items', JSON.stringify(UpdataItems));
        return UpdataItems;
      })
    }
  }

  // When you click buy One Button Quantity of item get reduces
  // const addByOne = (id) => {
  //   cartCtx.addByOne(id);
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       item.enteredQuantity--;
  //     }
  //     return item;
  //   }
  //   );
  //   setItems(() => {
  //     localStorage.setItem('items', JSON.stringify(newItems));
  //     return newItems;
  //   })

  // }


  // When you click buy Two Button Quantity of item get reduces
  // const buyTwoItem = (id) => {
  //   const newItem = items.map((item) => {
  //     if (item.id === id) {
  //       item.enteredQuantity = item.enteredQuantity - 2;
  //     }
  //     return item;
  //   })

  //   setItems(() => {
  //     localStorage.setItem('items', JSON.stringify(newItem))
  //     return newItem;
  //   })

  // }

  // When you click buy Three Button Quantity of item get reduces

  // const buyThreeItem = (id) => {
  //   const newItem = items.map((item) => {
  //     if (item.id === id) {
  //       item.enteredQuantity = item.enteredQuantity - 3;
  //     }
  //     return item;
  //   })

  //   setItems(() => {
  //     localStorage.setItem('items', JSON.stringify(newItem));
  //     return newItem;
  //   })
  // }




  // Getting data from LocaleStorage and render into the browser use of useEffect
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('items'))
    if (allData) {
      setItems(allData)
    }
    else {
      setItems([])
    }
  }, [])


  const cartOpenHandler = () => {
    console.log('open')
    setShowCart(true);
  }

  const cartCloseHandler = () => {
    console.log('open')
    setShowCart(false);
  }






  return (
    <ItemProvider>
      <NavBar cartOpenHandler={cartOpenHandler}></NavBar>
      <ListForm addDataItem={addDataItem}></ListForm>
      {showCart && <Cart cartCloseHandler={cartCloseHandler} />}
      <ListItem
        items={items}
        removeListHandler={removeListHandler}

      ></ListItem>
    </ItemProvider>
  );
}

export default App;

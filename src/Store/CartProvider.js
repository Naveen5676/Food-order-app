import { useState } from "react";
import Cart from "../Components/Cart/Cart";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems]=useState([]);


  // const addItemToCartHandler = (item ) => {
  //   updateItems([...items,item]);
  //   console.log("inside addToCartHandler", CartContext);
  // };

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingCartItemIndex !== -1) {
      // Item with the same title already exists in the cart, update quantity
      const updatedItems = [...items];
      updatedItems[existingCartItemIndex].quantity = Number(updatedItems[existingCartItemIndex].quantity) + Number(item.quantity);

      updateItems(updatedItems);
    } else {
      // Item doesn't exist in the cart, add it
      updateItems((prevItems) => [...prevItems, item]);
    }
  };
  
  
    
  

  const removeItemToCartHandler = (id) => {};

  const cartcontext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return ( 
    <CartContext.Provider value={cartcontext}>
      {console.log('inside cartcontext.provider', cartcontext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

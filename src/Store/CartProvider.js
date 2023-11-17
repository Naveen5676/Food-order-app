import { useState } from "react";
import Cart from "../Components/Cart/Cart";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems]=useState([]);
  const addItemToCartHandler = (item) => {
    updateItems([...items,item]);
    console.log("inside addToCartHandler", CartContext);
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

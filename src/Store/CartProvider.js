import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  // const addItemToCartHandler = (item ) => {
  //   updateItems([...items,item]);
  //   console.log("inside addToCartHandler", CartContext);
  // };

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      // Item with the same title already exists in the cart, update quantity
      const updatedItems = [...items];
      updatedItems[existingCartItemIndex].quantity =
        Number(updatedItems[existingCartItemIndex].quantity) +
        Number(item.quantity);

      updateItems(updatedItems);
    } else {
      // Item doesn't exist in the cart, add it
      updateItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeItemToCartHandler = (id) => {
    const removeItem = items.filter((cartitem)=> cartitem.id !== id);
    updateItems(removeItem);
    
  };

  const addQuantityToCartHandler = (id) => {
    // console.log("in cart provider", id);
    const updatequantity = items.map((cartitems) => {
      if (cartitems.id === id) {
        let updatedquantity = Number(cartitems.quantity);
        return { ...cartitems, quantity: updatedquantity + 1 };
      }
      return cartitems;
    });

    updateItems(updatequantity);
  };

  const minusQuantityToCartHandler=(id)=>{
    const minusQuantity = items.map((cartitems)=>{
      if(cartitems.id === id){
        let minusquantity = Number(cartitems.quantity);
        return{...cartitems, quantity: minusquantity -1}
      }
      return cartitems;
    })
    updateItems(minusQuantity);
  }



  const cartcontext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    addQuantity: addQuantityToCartHandler,
    minusQuantity: minusQuantityToCartHandler
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {console.log("inside cartcontext.provider", cartcontext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

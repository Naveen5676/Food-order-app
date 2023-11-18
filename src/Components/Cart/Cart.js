import React ,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  let totalAmount = 0
  cartctx.items.forEach(item=>{
    totalAmount= totalAmount+ (item.price * item.quantity)  })

  const cartitems = ( 
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
            <li className={classes.cart}>
            <div>
                <h3>{item.name}</h3>
                <div className={classes.quantity}>Quantity:{item.quantity}</div>
                <div className={classes.price}>{item.price}</div>
            </div>
            </li>
        // <li>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

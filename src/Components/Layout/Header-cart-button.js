import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './Header-cart-button.module.css'

const HeaderCartButton =(props)=>{
return (
  <button className={classes.button} onClick={props.onbtnClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>1</span>
  </button>
);
}
export default HeaderCartButton
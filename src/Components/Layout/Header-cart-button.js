import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './Header-cart-button.module.css'

const HeaderCartButton =()=>{
return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>1</span>
    </button>
);
}
export default HeaderCartButton
import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimage from "../../assets/image.jpg";
import HeaderCartButton from "./Header-cart-button";
import Meals from "../Meals/Meals";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onbtnClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="Food Image" />
      </div>
    </Fragment>
  );
};
export default Header;

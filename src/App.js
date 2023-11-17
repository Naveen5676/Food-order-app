import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {CartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

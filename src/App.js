import React, { useState } from "react";
import Cart from "./Components/Carts/Cart";
import FoodList from "./Components/Foods/FoodList";
import Header from "./Components/Header/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  return (
    <CartProvider>
      <Header showCart={showCartHandler} />
      <FoodList />
      {cartIsShown && <Cart hideCart={setcartIsShown} />}
    </CartProvider>
  );
}

export default App;

import React, { useContext } from "react";
import mealImg from "./meals.jpg";
import { ShoppingCart } from "phosphor-react";

import Word from "./Word";
import CartContext from "../../store/cart-context";

const Header = ({ showCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce(
    (current, item) => current + item.amount,
    0
  );
  return (
    <>
      <header className="header">
        <h1>React meal</h1>
        <button className="cart-btn" onClick={showCart}>
          <ShoppingCart size={32}/>
          <h4>Your cart</h4>
          <div className="indicator">
            <p className="amount-indicator">{numberOfItems}</p>
          </div>
        </button>
      </header>
      <div className="meal-image">
        <img src={mealImg} alt="" />
      </div>

      <Word />
    </>
  );
};

export default Header;

import React from "react";

const CartItem = ({ name, price, amount, onAdd, onRemove }) => {
  return (
    <>
      <div className="cart-contents">
        <div className="head">
          <header className="food-name">{name}</header>
          <div className="price-and-quantity">
            <p className="price">${price}</p>
            <div className="quantity"> x {amount}</div>
          </div>
        </div>
        <div className="plus-and-minus">
          <div className="sign minus" onClick={onRemove}>
            -
          </div>
          <div className="sign plus" onClick={onAdd}>
            +
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default CartItem;

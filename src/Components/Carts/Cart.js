import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import ModalOverlay from "./ModalOverlay";

const Cart = ({ hideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const itemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = cartCtx.items.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        key={item?.id}
        amount={item.amount}
        onRemove={itemRemoveHandler.bind(null, item.id)}
        onAdd={itemAddHandler.bind(null, item)}
      />
    );
  });

  return (
    <ModalOverlay hideCart={hideCart}>
      {cartItem}
      <div className="total">
        <p className="total-amount">Total amount</p>
        <div className="figure">
          <p className="cost">{totalAmount}</p>
          {hasItems && <button className="btn-cart btn-order">Order</button>}
          <button
            className="btn-cart btn-close"
            onClick={() => hideCart(false)}
          >
            Close
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Cart;

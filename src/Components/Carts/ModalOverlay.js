import React from "react";
import ReactDOM from "react-dom";

const BackDrop = ({ hideCart }) => {
  return <div className="backdrop" onClick={() => hideCart(false)}></div>;
};

const CartOverlay = (props) => {
  return (
    <div className="cart-background">
      <div className="cart-container">{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop hideCart={props.hideCart} />, portal)}
      {ReactDOM.createPortal(
        <CartOverlay>{props.children}</CartOverlay>,
        portal
      )}
    </>
  );
};

export default ModalOverlay;

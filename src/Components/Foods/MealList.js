import React, { useState, useRef, useContext } from "react";
import CartContext from "../../store/cart-context";

const MealList = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const amountRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    console.log(enteredAmount);
    // THE VALUE RETURNED BY REF IS ALWAYS A STRING NO MATTER WHAT, SO IT HAS TO BE CONVERTED TO NUMBER IN THE NEXT LINE
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber > 10) {
      setAmountValid(false);
      return;
    }
    (function addItem() {
      cartCtx.addItem({
        id: meal.id,
        name: meal.name,
        amount: enteredAmountNumber,
        price: meal.price,
      });
    })();
  };

  return (
    <div>
      <div className="food-container">
        <div className="food-item">
          <header className="food-name">{meal?.name}</header>
          <p className="description">{meal?.description}</p>
          <p className="price">${meal?.price}</p>
        </div>
        <form className="control" onSubmit={submitHandler}>
          <div className="amount">
            <label htmlFor={meal?.id} className="amount-text">
              amount
            </label>
            <input
              ref={amountRef}
              min="1"
              step="1"
              max="20"
              id={meal?.id}
              type="number"
              className="box"
              defaultValue="1"
            />
          </div>
          <button className="add-btn" type="submit">
            + Add
          </button>
          {!amountValid && <p>invalid input</p>}
        </form>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default MealList;

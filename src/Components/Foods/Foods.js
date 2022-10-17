import React from "react";
import MealList from "./MealList";

const foods = [
  {
    id: 1,
    name: "sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    id: 2,
    name: "schnitzel",
    description: "a german specialty",
    price: "16.50",
  },
  {
    id: 3,
    name: "barbecue burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: 4,
    name: "green bowl",
    description: "healthy...and green...",
    price: "18.99",
  },
];

const Foods = () => {
  return (
    <>
      {foods.map((food) => {
        return (
          <MealList
            meal={food}
            key={food?.id}
          />
        );
      })}
    </>
  );
};

export default Foods;

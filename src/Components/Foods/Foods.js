import React, { useEffect, useState } from "react";
import MealList from "./MealList";

const Foods = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-f61ba-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading</p>
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="loading">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <>
      {meals.map((food) => {
        return <MealList meal={food} key={food?.id} />;
      })}
    </>
  );
};

export default Foods;

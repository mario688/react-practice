import style from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
const AvailableMeals = () => {
  const { fetchedData, isLoading, error, fetchData } = useHttp({
    url: "https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
  });
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const mealList = fetchedData.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.key}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        {isLoading && !error && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {!isLoading && !error && mealList}
      </Card>
    </section>
  );
};
export default AvailableMeals;

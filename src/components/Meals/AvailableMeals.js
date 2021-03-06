import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Nigiri",
//     description: "A topping, usually fish, served on top of sushi rice",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Sashimi",
//     description: "Fish or shellfish served alone (no rice)",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Maki",
//     description: "Rice and filling wrapped in seaweed",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: " ",
//     description: "Filling wrapped rice",
//     price: 18.99,
//   },
//   {
//     id: "m5",
//     name: "Temaki",
//     description: "Hand-rolled into a cone shape",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httmLoad, setHtmlLoad] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-foodapp-course-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("somenthing went wrong!");
      }
      const responseData = await response.json();

      const loadMeals = [];
      for (const key in responseData) {
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadMeals);
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      setIsLoading(false);
      setHtmlLoad(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httmLoad) {
    return (
      <section className={classes.htmlError}>
        <p>Failed to fetch from database</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

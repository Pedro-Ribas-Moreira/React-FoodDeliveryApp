import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Nigiri",
    description: "A topping, usually fish, served on top of sushi rice",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Sashimi",
    description: "Fish or shellfish served alone (no rice)",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Maki",
    description: "Rice and filling wrapped in seaweed",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Uramaki",
    description: "Filling wrapped rice",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Temaki",
    description: "Hand-rolled into a cone shape",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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

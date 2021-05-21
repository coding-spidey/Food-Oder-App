import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Shahi Paneer",
      description: "Made from real paneer",
      price: 40,
    },
    {
      id: "m2",
      name: "Rajma",
      description: "Nutritious yet delicious",
      price: 35,
    },
    {
      id: "m3",
      name: "Kadhi",
      description: "Every Yellow liquid is not disgusting",
      price: 35,
    },
    {
      id: "m4",
      name: "Roti",
      description: "Bread",
      price: 5,
    },
  ];
  const MealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;

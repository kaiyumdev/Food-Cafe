import React from "react";
import './Meal.css';

const Meal = (props) => {
  console.log(props);
  const { strMeal, strArea, strCategory, strMealThumb } = props.meal;
  console.log(props.meal);
  return (
    <div className="meals">
      <div className="meal">
        <h3>Food Name: {strMeal}</h3>
        <img src={strMealThumb} alt="" />
        <p>Category: {strCategory}</p>
        <p>Area: {strArea}</p>
      </div>
    </div>
  );
};

export default Meal;

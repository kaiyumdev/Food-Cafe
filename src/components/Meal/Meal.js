import React from "react";

const Meal = (props) => {
  console.log(props);
  const { strMeal, strArea, strCategory, strMealThumb } = props.meal;
  console.log(props.meal);
  return (
    <div>
      <div className="meal">
        <h1>Food Name: {strMeal}</h1>
        <img src={strMealThumb} alt="" />
        <h3>Population: {strArea}</h3>
        <h3>Category: {strCategory}</h3>
        {/* <h5>Area: {area}</h5> */}
      </div>
    </div>
  );
};

export default Meal;

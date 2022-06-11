import axios from "axios";
import React, { useEffect, useState } from "react";
import Meal from '../Meal/Meal';

const Api = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  console.log(meals);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((error) => console(error, "ok"));
  }, [search]);

  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  return (
    <div>
      <h1>This is food cafe</h1>
      <input type="text" onChange={handleChange} />
      {
          meals.map((meal) => (
            <Meal meal={meal} key={meal.idMeal}></Meal>
          ))
      }
      {/* {meals.map((item) => (
        <div key={item.idMeal}>
          <p>{item.strMeal}</p>
          <img src={item.strMealThumb} alt="" />
        </div>
      ))} */}
    </div>
  );
};

export default Api;

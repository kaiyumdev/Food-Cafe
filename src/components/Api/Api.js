import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Api.css";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Api = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
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
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="text-field">
        <h1 className="title">Our Food Cafe</h1>
        <div className="input-text">
        <input  className="input" type="text" placeholder="search your favorite food" onChange={handleChange}/>
        </div>
      </div>
      <div className="meals-container">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Api;

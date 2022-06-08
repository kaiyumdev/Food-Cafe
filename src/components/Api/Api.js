 import React, { useEffect, useState } from 'react';
 
 const Api = () => {
     const [meals, setMeals] = useState([]);
     console.log(meals);

     useEffect(() => {
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
         .then(res => res.json())
         .then(data =>setMeals(data))
     },[])
     return (
         <div>
             <h1>This is food cafe</h1>
         </div>
     );
 };
 
 export default Api;
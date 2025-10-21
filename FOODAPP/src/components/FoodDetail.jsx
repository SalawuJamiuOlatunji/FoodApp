import { useEffect, useState } from "react";

export default function FoodDetail({ foodData, foodId }) {
  const[food,setFood]=useState({})
  const URL =`https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fecc52070aa84c30bb688facd8675232";
  useEffect(()=>{
   async function fetchFood(){
      const res = await fetch(`${URL}?apikey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data)
    }
    fetchFood()
  }, [foodId]);
  return <div>FoodDetail{foodId}
  {food.title}
  <img src ={food.image} />
  </div>; 
}


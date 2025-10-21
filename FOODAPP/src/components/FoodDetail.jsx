import { useEffect } from "react";

export default function FoodDetail({ foodData, foodId }) {
  const URL =`https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fecc52070aa84c30bb688facd8675232";
  useEffect(()=>{
   async function fetchFood(){
      const res = await fetch(`${URL}?apikey=${API_KEY}`)
      const data = await res.json()
      console.log(data)
    }
    fetchFood()
  },[]);
  return <div>FoodDetail{foodId}</div>;
}


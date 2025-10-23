import { useEffect, useState } from "react";

export default function FoodDetail({ foodData, foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1a4aed8935724601bdda20077ae5ef00";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>

        <img src={food.image} />
        <div>
          <span>
            <strong>⏰ {food.readyInMinutes}Minutes </strong>
          </span>
          <span>
            👪<strong> Serves:{food.servings}</strong>
          </span>
          <span>
            vegetarian:{food.vegetarian ? "🥦 vegeterian" : "🍗 Non-vegeterian"}
          </span>
          <span> Vegan:{food.vegan ? " 🐮vegan" : " "}</span>
        </div>
        <div>
          <span>${food.pricePerServing / 100} Per serving</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}

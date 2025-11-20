import { useEffect, useState } from "react";
import styles from "./FoodDetail.module.css";
import ItemList from "./itemList";

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
      <div className={styles.renderCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes}Minutes </strong>
          </span>
          <span>
            👪<strong> Serves:{food.servings}</strong>
          </span>
          <span>
            <strong>
              vegetarian:
              {food.vegetarian ? "🥦 vegeterian" : "🍗 Non-vegeterian"}
            </strong>
          </span>
          <span>
            <strong> Vegan:{food.vegan ? " 🐮vegan" : " "}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h1>Ingredients</h1>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

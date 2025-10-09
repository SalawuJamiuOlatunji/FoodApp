import Fooditem from "./Fooditem";

export default function Foodlist({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem key={food.id} food={food} />
      ))}
    </div>
  );
}

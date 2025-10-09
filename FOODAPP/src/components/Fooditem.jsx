import styles from "./Fooditem.module.css";
export default function Fooditem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}> {food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
          }}
          className={styles.itemButton}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}

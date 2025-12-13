import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Button.module.css";

export default function Button({ setBg }) {
  return (
    <div>
      <button className={styles.Button} onClick={() => setBg("black")}>
        <i class="bi bi-moon-fill"></i>
      </button>
    </div>
  );
}

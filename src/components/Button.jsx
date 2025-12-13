import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Button.module.css";

export default function Button({ setBg }) {
  const toggle = () => {
    setBg((prev) => (prev == "black" ? "white" : "black"));
  };
  return (
    <div>
      <button className={styles.Button} onClick={toggle}>
        <i class="bi bi-moon-fill"></i>
      </button>
    </div>
  );
}

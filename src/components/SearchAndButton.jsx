import styles from "./SearchAndButton.module.css";
export default function SearchAndButton({ children }) {
  return <div className={styles.SearchAndButton}>{children}</div>;
}

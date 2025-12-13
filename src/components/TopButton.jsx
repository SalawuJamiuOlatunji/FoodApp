import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./TopButton.module.css";
import { useEffect, useState } from "react";

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button className={styles.scrollButton} onClick={scrollToTop}>
        ⬆
      </button>
    )
  );
}

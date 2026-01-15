import styles from "./AnimalCard.module.css";
import Image from "next/image";

export default function AnimalCard({ animal, onClick }) {
  return (
    <div className={styles.card} onClick={onClick} style={{ cursor: "pointer" }}>
      <Image
        src={animal.image || "https://via.placeholder.com/120"}
        alt={animal.nom}
        width={120}
        height={120}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span>{animal.espece}</span>
      </div>
    </div>
  );
}

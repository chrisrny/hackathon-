import styles from "./AnimalCard.module.css";
import Image from "next/image";

export default function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
       <Image
        src={animal.image}
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

//<h3>{animal.nom}</h3>
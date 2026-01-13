import styles from "./AnimalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
      <h3>{animal.nom}</h3>
      <p>Espèce : {animal.espece}</p>
      <p>Âge : {animal.age} ans</p>
    </div>
  );
}

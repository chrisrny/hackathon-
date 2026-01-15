"use client";
import styles from "./DetailAnimal.module.css";

export default function DetailAnimal({ animal, onBack }) {
  return (
    <div className={styles.pageDetail}>
      <button className={styles.backButton} onClick={onBack}>
        ← Retour
      </button>

      <h1 className={styles.title}>{animal.nom}</h1>
      <img src={animal.image} alt={animal.nom} className={styles.image} />

      <div className={styles.section}>
        <h2>Environnement</h2>
        <ul>
          <li>État de l'enclos : {animal.environnement.etatEnclos}</li>
          <li>Température : {animal.environnement.temperature}</li>
          <li>Autres : {animal.environnement.autres}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Hygiène</h2>
        <ul>
          <li>Entretien : {animal.hygiene.entretien}</li>
          <li>Soins : {animal.hygiene.soins}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Santé</h2>
        <ul>
          <li>Suivi vétérinaire : {animal.sante.veterinaire}</li>
          <li>Surveillance : {animal.sante.maladies}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Alimentation</h2>
        <ul>
          <li>Type : {animal.alimentation.type}</li>
          <li>Repas : {animal.alimentation.repas}</li>
          <li>Suppléments : {animal.alimentation.supplements}</li>
        </ul>
      </div>
    </div>
  );
}

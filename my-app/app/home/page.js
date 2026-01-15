"use client";
import styles from "./home.module.css";

import { useState } from "react";
import { useEffect } from "react";
import AnimalCard from "../components/AnimalCard.js";
import DetailAnimal from "../components/DetailAnimal.js";

const animalDetailMock = {
  nom: "Lion",
  espece: "Panthera leo",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  environnement: {
    etatEnclos: "Grand enclos sécurisé avec zones d'ombre",
    temperature: "25-30°C",
    autres: "Besoins d'arbres et d'eau pour se rafraîchir",
  },
  hygiene: {
    entretien: "Nettoyage quotidien de l'enclos",
    soins: "Bains occasionnels et désinfection des zones de repos",
  },
  sante: {
    veterinaire: "Contrôle mensuel par vétérinaire",
    maladies: "Surveillance des parasites et infections",
  },
  alimentation: {
    type: "Carnivore",
    repas: "Viande fraîche 1 à 2 fois par jour",
    supplements: "Suppléments vitaminiques si nécessaire",
  },
};

export default function Home(){
const [open, setOpen] = useState(false);
const [showDetail, setShowDetail] = useState(false);
  const [animaux, setAnimaux] = useState([]);

   useEffect(() => {
    fetch("/api/animaux")
      .then(res => {
        if (!res.ok) throw new Error("API non trouvée");
        return res.json();
      })
      .then(data => setAnimaux(data))
      .catch(err => console.error("Erreur fetch:", err));
  }, []);
if (showDetail) {
  return <DetailAnimal animal={animalDetailMock} onBack={() => setShowDetail(false)} />;
}
  return(
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="https://acces-culture.fr/assets/images/thumbs/68beaf738951e3df165be79c_zoo-mulhouse.png" alt="Logo" />
        </div>

        <button className={styles.boutton}>
          <div className={styles.points}></div>
          <div className={styles.points}></div>
          <div className={styles.points}></div>
        </button>
      </header>

      <div className={styles.box}>
  {animaux.map(a => (
    <AnimalCard
      key={a._id.toString()}
      animal={a}
      onClick={() => setShowDetail(true)} 
    />
  ))}
</div>

    </div>
  )
}

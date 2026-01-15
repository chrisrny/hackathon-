"use client";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard";
import DetailAnimal from "../components/DetailAnimal";
import { animauxDetailMock } from "../components/animalDetailMock";

export default function Home() {
  const [animaux, setAnimaux] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null); // l’animal cliqué

  // Tu peux charger tes animaux depuis l'API ou mock
  useEffect(() => {
    // Si tu veux juste les mocks pour tester :
    setAnimaux([
      animauxDetailMock.alpaga,
      animauxDetailMock.chatDesSables,
      animauxDetailMock.loupDuCanada,
      animauxDetailMock.macaqueACrete,
      animauxDetailMock.vigogne,
      animauxDetailMock.hippopotameNain,
    ]);
  }, []);

  // Si un animal est sélectionné, on affiche la page détail
  if (selectedAnimal) {
    return <DetailAnimal animal={selectedAnimal} onBack={() => setSelectedAnimal(null)} />;
  }

  // Sinon on affiche toutes les cartes
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://acces-culture.fr/assets/images/thumbs/68beaf738951e3df165be79c_zoo-mulhouse.png"
            alt="Logo"
          />
        </div>

        <button className={styles.boutton}>
          <div className={styles.points}></div>
          <div className={styles.points}></div>
          <div className={styles.points}></div>
        </button>
      </header>

      <div className={styles.box}>
        {animaux.map((a) => (
          <AnimalCard key={a.nom} animal={a} onClick={() => setSelectedAnimal(a)} />
        ))}
      </div>
    </div>
  );
}

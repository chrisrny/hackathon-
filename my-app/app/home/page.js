"use client";
import styles from "./home.module.css";

import { useState } from "react";
import { useEffect } from "react";
import AnimalCard from "../components/AnimalCard.js";



export default function Home(){
const [open, setOpen] = useState(false);
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
          <AnimalCard key={a._id.toString()} animal={a} />
        ))}
      </div>
    </div>
  )
}

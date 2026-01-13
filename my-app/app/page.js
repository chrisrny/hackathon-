"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard";


export default function Home() {
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
  <div>
    <header className={styles.header}>
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
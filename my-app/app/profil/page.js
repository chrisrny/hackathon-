"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Profil() {
  const router = useRouter();
  const [utilisateur, setUtilisateur] = useState(null);

  const loadUser = () => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      router.push("/connexion");
      return;
    }
    try {
      const user = JSON.parse(userString);
      setUtilisateur(user);
    } catch {
      localStorage.removeItem("user");
      router.push("/connexion");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUtilisateur(null);
    router.push("/connexion");
  };

  useEffect(() => {
    loadUser();
    const handleStorageChange = () => loadUser();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [router]);

  if (!utilisateur) return null;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img
          src={utilisateur.photo_profil}
          alt="Photo de profil"
          className={styles.photo}
        />
        <h2 className={styles.nom}>
          {utilisateur.prenom} {utilisateur.nom}
        </h2>
        <p className={styles.info}><strong>Email :</strong> {utilisateur.email}</p>
        <p className={styles.info}><strong>Travail :</strong> {utilisateur.travail}</p>
        <p className={styles.info}><strong>Âge :</strong> {utilisateur.age}</p>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
}

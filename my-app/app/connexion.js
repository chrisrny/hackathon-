"use client";

import { useState } from "react";
import styles from "./connexion.module.css";

export default function Login() {
  const emailverif = "Mulhouse.zoo@gmail.com";
  const passwordverif = "Animaux";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === emailverif && password === passwordverif) {
      setSuccess(true);
      setMessage("Connexion réussie ");
    } else {
      setSuccess(false);
      setMessage("Email ou mot de passe incorrect ");
    }
  };

  return (
    <div className={styles.page}>
     
      <div className={styles.box}>
        <h2 className={styles.title}>Connexion</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />

          <input type="submit" value="Connexion" className={styles.submitButton} />
        </form>

        {message && (
          <p
            className={styles.message}
            style={{ backgroundColor: success ? "#4CAF50" : "#f44336" }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

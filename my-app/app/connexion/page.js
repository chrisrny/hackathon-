"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      setMessage(data.message);
      setSuccess(response.ok);

      if (response.ok) {
        const { mot_de_passe, ...userSansPassword } = data;
        localStorage.setItem("user", JSON.stringify(userSansPassword));
        router.push("/profil");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur serveur");
      setSuccess(false);
    } finally {
      setLoading(false);
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
          <input
            type="submit"
            value={loading ? "Connexion..." : "Connexion"}
            disabled={loading}
            className={styles.submitButton}
          />
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

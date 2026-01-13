"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return(
  <div>
    <header className={styles.header}>
      <button className={styles.boutton}>
      <div className={styles.points}></div>
      <div className={styles.points}></div>
      <div className={styles.points}></div>
      </button>
    </header>
  </div>
  )
}

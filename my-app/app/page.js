import { redirect } from "next/navigation";

export default function Home() {
<<<<<<< HEAD
  redirect("/connexion");
}
=======
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
>>>>>>> 7bf0358bed1b8e86a71c7815fb5a26b27deea501

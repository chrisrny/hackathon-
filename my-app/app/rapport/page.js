// pages/animaux.js
import { useState } from "react";

const animauxData = {
  lion: {
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
  },
  lapin: {
    environnement: {
      etatEnclos: "Cage ou clapier spacieux",
      temperature: "15-22°C",
      autres: "Litière propre, zones pour se cacher",
    },
    hygiene: {
      entretien: "Nettoyage quotidien de la litière",
      soins: "Brossage régulier du pelage",
    },
    sante: {
      veterinaire: "Vaccination annuelle",
      maladies: "Surveillance des problèmes dentaires et digestifs",
    },
    alimentation: {
      type: "Herbivore",
      repas: "Foin à volonté, légumes frais 1 à 2 fois par jour",
      supplements: "Granulés équilibrés",
    },
  },
  perroquet: {
    environnement: {
      etatEnclos: "Cage spacieuse avec perchoirs",
      temperature: "20-28°C",
      autres: "Exposition à la lumière naturelle, jeux et jouets",
    },
    hygiene: {
      entretien: "Nettoyage quotidien de la cage",
      soins: "Bains fréquents ou brumisation",
    },
    sante: {
      veterinaire: "Contrôle annuel chez un vétérinaire aviaire",
      maladies: "Surveillance des plumes et des infections respiratoires",
    },
    alimentation: {
      type: "Omnivore",
      repas: "Graines, fruits, légumes frais",
      supplements: "Suppléments vitaminiques si nécessaire",
    },
  },
};

export default function AnimauxPage() {
  const [animal, setAnimal] = useState("lion");

  const handleChange = (e) => {
    setAnimal(e.target.value);
  };

  const info = animauxData[animal];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Informations sur les animaux</h1>

      <label htmlFor="animal-select" style={{ marginRight: "1rem" }}>
        Sélectionnez un animal :
      </label>
      <select id="animal-select" value={animal} onChange={handleChange}>
        {Object.keys(animauxData).map((key) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "2rem" }}>
        <h2>Environnement</h2>
        <ul>
          <li>État de l'enclos : {info.environnement.etatEnclos}</li>
          <li>Température idéale : {info.environnement.temperature}</li>
          <li>Autres : {info.environnement.autres}</li>
        </ul>

        <h2>Hygiène</h2>
        <ul>
          <li>Entretien : {info.hygiene.entretien}</li>
          <li>Soins : {info.hygiene.soins}</li>
        </ul>

        <h2>Santé</h2>
        <ul>
          <li>Suivi vétérinaire : {info.sante.veterinaire}</li>
          <li>Surveillance : {info.sante.maladies}</li>
        </ul>

        <h2>Alimentation</h2>
        <ul>
          <li>Type : {info.alimentation.type}</li>
          <li>Repas : {info.alimentation.repas}</li>
          <li>Suppléments : {info.alimentation.supplements}</li>
        </ul>
      </div>
    </div>
  );
}

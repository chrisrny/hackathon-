/************************************
 * Base de données
 ************************************/
const db = db.getSiblingDB("DataBase2"); 

/************************************
 * Utilisateurs
 ************************************/
db.createCollection("utilisateurs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "mot_de_passe"],
      properties: {
        email: { bsonType: "string" },
        mot_de_passe: { bsonType: "string" },
        nom: { bsonType: ["string", "null"] },
        photo_profil: { bsonType: ["string", "null"] }
      }
    }
  }
});
db.utilisateurs.createIndex({ email: 1 }, { unique: true });

/************************************
 * Animaux
 ************************************/
db.createCollection("animaux", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nom", "espece", "age", "sexe"],
      properties: {
        nom: { bsonType: "string" },
        espece: { bsonType: "string" },
        age: { bsonType: "int" },
        animal_id: { bsonType: "objectId" },
        sexe: { enum: ["Male", "Femelle", "Inconnu"] }
      }
    }
  }
});
db.animaux.createIndex({ animal_id: 1 });

// Insertion d'exemples
db.animaux.insertMany([
  { nom: "Simba", espece: "Lion", age: 5, sexe: "Male", animal_id: new ObjectId() },
  { nom: "Nala", espece: "Lionne", age: 4, sexe: "Femelle", animal_id: new ObjectId() },
  { nom: "Dumbo", espece: "Éléphant", age: 10, sexe: "Male", animal_id: new ObjectId() },
  { nom: "Kiki", espece: "Singe", age: 3, sexe: "Male", animal_id: new ObjectId() },
  { nom: "Zazu", espece: "Oiseau", age: 2, sexe: "Male", animal_id: new ObjectId() }
]);

/************************************
 * Alimentation
 ************************************/
db.createCollection("alimentation", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["animal_id"],
      properties: {
        animal_id: { bsonType: "objectId" },
        quantite: { bsonType: ["string", "null"] },
        type_nourriture: { bsonType: ["string", "null"] },
        horaire: { bsonType: ["string", "null"] },
        date_alimentation: { bsonType: ["date", "null"] }
      }
    }
  }
});
db.alimentation.createIndex({ animal_id: 1 });

/************************************
 * Environnement
 ************************************/
db.createCollection("environnement", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["animal_id"],
      properties: {
        animal_id: { bsonType: "objectId" },
        temperature: { bsonType: ["double", "null"] },
        humidite: { bsonType: ["double", "null"] },
        date_mesure: { bsonType: ["date", "null"] }
      }
    }
  }
});
db.environnement.createIndex({ animal_id: 1 });

/************************************
 * Hygiène
 ************************************/
db.createCollection("hygiene", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["animal_id"],
      properties: {
        animal_id: { bsonType: "objectId" },
        nettoyage_enclos: { bsonType: "bool" },
        verification_clotures: { bsonType: "bool" },
        date_hygiene: { bsonType: ["date", "null"] }
      }
    }
  }
});
db.hygiene.createIndex({ animal_id: 1 });

/************************************
 * Santé
 ************************************/
db.createCollection("sante", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["animal_id"],
      properties: {
        animal_id: { bsonType: "objectId" },
        etat_general: { bsonType: ["string", "null"] },
        appetit: { bsonType: ["string", "null"] },
        date_dernier_controle: { bsonType: ["date", "null"] }
      }
    }
  }
});
db.sante.createIndex({ animal_id: 1 });

/************************************
 * Notes utilisateur
 ************************************/
db.createCollection("notes_utilisateur", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["animal_id", "utilisateur_id"],
      properties: {
        animal_id: { bsonType: "objectId" },
        utilisateur_id: { bsonType: "objectId" },
        note: { bsonType: ["string", "null"] },
        date_note: { bsonType: ["date", "null"] }
      }
    }
  }
});
db.notes_utilisateur.createIndex({ animal_id: 1 });
db.notes_utilisateur.createIndex({ utilisateur_id: 1 });

print("Base MongoDB créée avec succès");

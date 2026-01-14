import { getDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const db = await getDB();
    const utilisateurs = db.collection("utilisateurs");

    
    const user = await utilisateurs.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Email ou mot de passe incorrect" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    
    if (password !== user.mot_de_passe) {
      return new Response(
        JSON.stringify({ message: "Email ou mot de passe incorrect" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

   
    const { mot_de_passe, ...userSansPassword } = user;

    return new Response(
      JSON.stringify({
        message: "Connexion réussie",
        ...userSansPassword, 
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Erreur serveur login :", err);
    return new Response(
      JSON.stringify({ message: "Erreur serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

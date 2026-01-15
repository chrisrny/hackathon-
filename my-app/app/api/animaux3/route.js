import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("zoo");
  const animaux = await db.collection("animaux").find({}).toArray();
  return new Response(JSON.stringify(animaux));
}

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("zoo");
  const data = await req.json();

  // ajouter un ObjectId si pas présent
  if (!data.animal_id) data.animal_id = new ObjectId();

  const result = await db.collection("animaux").insertOne(data);
  return new Response(JSON.stringify(result));
}

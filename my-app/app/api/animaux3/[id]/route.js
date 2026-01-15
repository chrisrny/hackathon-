import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function PUT(req, { params }) {
  const client = await clientPromise;
  const db = client.db("zoo");
  const data = await req.json();

  const result = await db.collection("animaux").updateOne(
    { _id: new ObjectId(params.id) },
    { $set: data }
  );

  return new Response(JSON.stringify({ modifiedCount: result.modifiedCount }));
}

export async function DELETE(req, { params }) {
  const client = await clientPromise;
  const db = client.db("zoo");

  const result = await db.collection("animaux").deleteOne({
    _id: new ObjectId(params.id),
  });

  return new Response(JSON.stringify({ deletedCount: result.deletedCount }));
}

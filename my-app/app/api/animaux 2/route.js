import { getDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await getDB();
  const animaux = await db.collection("animaux").find().toArray();
  
  return NextResponse.json(animaux);
}

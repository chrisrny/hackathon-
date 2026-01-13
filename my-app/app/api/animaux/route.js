import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDB();
    const animaux = await db.collection("animaux").find().toArray();
    return NextResponse.json(animaux);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

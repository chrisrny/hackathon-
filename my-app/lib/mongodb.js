import { MongoClient } from "mongodb";

const uri = "mongodb+srv://Arthur:Charlotte@database2.qccpigy.mongodb.net/DataBase2?retryWrites=true&w=majority";

let client = new MongoClient(uri);
let clientPromise = client.connect();

export default clientPromise;

export async function getDB() {
  const client = await clientPromise;
  return client.db("DataBase2"); // nom de ta base
}

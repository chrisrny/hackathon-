import { MongoClient } from "mongodb";

const uri = "mongodb+srv://Arthur:Charlotte@database2.qccpigy.mongodb.net/DataBase2?retryWrites=true&w=majority";

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

export async function getDB() {
  const client = await clientPromise;
  return client.db("DataBase2"); // nom de ta base
}

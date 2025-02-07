
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DB_URI!
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const DBConnection = async () => {
    try {
        // await client.connect();
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return client
    } catch (error) {
        throw new Error(String(error))
    }
}


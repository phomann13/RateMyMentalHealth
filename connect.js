/**
 * institution:
 *  name
 *  username
 *  email
 *  password
 */

/**
 * person: 
 *  email
 *  password
 */

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://t-hyland:Tomh@cluster0.0uz4cny.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function main() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

main().catch(console.error());
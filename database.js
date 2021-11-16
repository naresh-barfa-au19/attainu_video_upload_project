const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(url);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log("Connection error  !", error);
    res.status(400).json(error);
  } else {
    console.log("Database Connection Successful  !");
  }
});
const db = client.db("uploadVideo_db");
module.exports = { db };

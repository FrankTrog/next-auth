// Example pulled from https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/ and modified    
const mongoClient = require('mongodb').MongoClient; 
const envVar = require('dotenv').config({ path: "./.env.local" });

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db(envVar.parsed.MDB_DBN);
    const students = database.collection("students");

    // Query for a movie that has the title 'The Room'
    const query = { firstname: "Pete" };

    // const options = {
    //   sort: { "imdb.rating": -1 },
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };

    // Execute query
    // const movie = await movies.findOne(query, options);
    const student = await students.findOne(query);

    // Print the document returned by findOne()
    console.log(student);
  } finally {
    await client.close();
  }
}

// Replace the uri string with your MongoDB deployment's connection string.
const uri = envVar.parsed.MDB_URI;
if(!uri)
{
  throw new Error('Invalid/Missing environment variable: DB URI');
}

const client = new mongoClient(uri);
run().catch(console.dir);
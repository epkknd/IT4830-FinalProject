const { MongoClient, ServerApiVersion } = require('mongodb');
const app = require('express')
const mongoose  = require('mongoose')
const fs = require('fs');

const credentials = 'X509-cert-6588185658663266323.pem'

const client = new MongoClient('mongodb+srv://finalproject.p9pd0pr.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

module.exports = app;

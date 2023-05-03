const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const mongoose  = require('mongoose')
const Item = require("./schema/item")


const credentials = 'X509-cert-6588185658663266323.pem'

mongoose.connect('mongodb+srv://finalproject.p9pd0pr.mongodb.net/merchandise?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1,
  useNewURLParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error(err));

const db = mongoose.connection;


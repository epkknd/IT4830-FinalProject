const mongoose = require("mongoose");
const Item = require("./schema/item")

const credentials = 'X509-cert-6588185658663266323.pem'

mongoose.connect('mongodb+srv://finalproject.p9pd0pr.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1,
  useNewURLParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error(err));

const items = [
    // { name: "", imagelink: "", price: "" }
    { name: "Fresh Foam", imagelink: "./images/AthleticShoe1.jpg", price: "$59.99" },
    { name: "Black Dress Shoes", imagelink: "./images/DressShoes.jpg", price: "$89.99" },
    { name: "White Heels", imagelink: "./images/Heels.jpg", price: "$99.99" },
    { name: "Hiking Shoes", imagelink: "./images/HikingShoes.jpg", price: "$69.99" },
    { name: "Nike High Tops", imagelink: "./images/Nikes.jpg", price: "$59.99" },
    { name: "Nike Air Max", imagelink: "./images/Nikes2.jpg", price: "$69.99" },
    { name: "Nike Air Max", imagelink: "./images/Nikes3.jpg", price: "$69.99" },
    { name: "Adidas Running Shoes", imagelink: "./images/Women'sAthletic.jpg", price: "59.99" }
]

Item.insertMany(items)
.then(() => console.log('Items Imported'))
.catch(err => console.error(err));

module.exports = importdata
const mongoose = require("mongoose");
const Product = require("../models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const products = [
  {
    name: "iPhone 14",
    description: "Apple smartphone",
    price: 900,
    image: "https://picsum.photos/200",
  },
  {
    name: "Laptop",
    description: "Gaming laptop",
    price: 1200,
    image: "https://picsum.photos/201",
  },
  {
    name: "Headphones",
    description: "Noise cancelling",
    price: 200,
    image: "https://picsum.photos/202",
  },
];

Product.insertMany(products).then(() => {
  console.log("Data inserted");
  process.exit();
});

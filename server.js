require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use("/api/products", productRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

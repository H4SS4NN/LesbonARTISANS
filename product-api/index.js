const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/productsdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

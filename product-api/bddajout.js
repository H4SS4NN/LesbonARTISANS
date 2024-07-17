const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect("mongodb://127.0.0.1:27017/productsdb")
  .then(() => {
    console.log("MongoDB connected");
    const products = [
      {
        name: "AC1 Phone1",
        type: "phone",
        price: 200.05,
        rating: 3.8,
        warranty_years: 1,
        available: true,
      },
      {
        name: "AC2 Phone2",
        type: "phone",
        price: 147.21,
        rating: 1,
        warranty_years: 3,
        available: false,
      },
      {
        name: "AC3 Phone3",
        type: "phone",
        price: 150,
        rating: 2,
        warranty_years: 1,
        available: true,
      },
      {
        name: "AC4 Phone4",
        type: "phone",
        price: 50.2,
        rating: 3,
        warranty_years: 2,
        available: true,
      },
    ];

    Product.insertMany(products)
      .then(() => {
        console.log("Products inserted");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

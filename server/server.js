// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Formula = require("./model/Formula");
const formulasRoute = require("./routes/formulasRoute");
const userRoute = require("./routes/userRoute");
// const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;
// database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected successfully!");
  } catch (error) {
    console.log(error);
  }
};

// middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/user", userRoute);
app.use("/trouser", formulasRoute);

// Query the database to check if any formulas exist
// Formula.find()
//   .then((formulas) => {
//     if (formulas.length > 0) {
//       console.log("Formulas have been inserted into the database.");
//     } else {
//       console.log("No formulas found in the database.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error checking formulas in the database:", error);
//   });

//
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});

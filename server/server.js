// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Formula = require("./model/Formula");
const formulasRoute = require("./routes/formulasRoute");
const userRoute = require("./routes/userRoute");
const Pdf = require("./model/pdfSchema")
// const User = require("./models/User");
const multer = require('multer');
const path = require('path');

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

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Endpoint to receive PDF file
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  res.send('File uploaded successfully.');
});



app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});

// Import necessary modules
const mongoose = require("mongoose");

// Define schema for formula document
const formulaSchema = new mongoose.Schema({
  key: String,
  expression: String,
});

// Create a Mongoose model based on the schema
const Formula = mongoose.model("Formula", formulaSchema);

const sampleFormulas = [
  { key: "0", expression: (A, B, C, D, E, F) => ({ x: 0, y: 0 }) },
  { key: "1", expression: (A, B, C, D, E, F) => ({ x: 0, y: -D }) },
  { key: "2", expression: (A, B, C, D, E, F) => ({ x: 0, y: -C }) },
  { key: "3", expression: (A, B, C, D, E, F) => ({ x: 0, y: -E }) },
  {
    key: "4",
    expression: (A, B, C, D, E, F) => ({
      x: 0,
      y: -(1 / 2) * D - (1 / 2) * E - 5,
    }),
  },
  { key: "5", expression: (A, B, C, D, E, F) => ({ x: -(B / 12) - 2, y: -D }) },
  { key: "6", expression: (A, B, C, D, E, F) => ({ x: -(B / 12) - 2, y: -C }) },
  { key: "7", expression: (A, B, C, D, E, F) => ({ x: -(B / 12) - 2, y: 0 }) },
  { key: "8", expression: (A, B, C, D, E, F) => ({ x: B / 6 - 1.5, y: -C }) },
  {
    key: "9",
    expression: (A, B, C, D, E, F) => ({ x: -B * (7 / 48) - 3, y: -D }),
  },
  { key: "10", expression: (A, B, C, D, E, F) => ({ x: -(B / 12) - 1, y: 0 }) },
  {
    key: "11",
    expression: (A, B, C, D, E, F) => ({ x: A / 4 - B / 12 + 1, y: 0 }),
  },
  { key: "12", expression: (A, B, C, D, E, F) => ({ x: F / 2 - 0.5, y: -E }) },
  {
    key: "13",
    expression: (A, B, C, D, E, F) => ({
      x: F / 2 - 0.5 + 1.5,
      y: -0.5 * D - 0.5 * E - 5,
    }),
  },
  {
    key: "14",
    expression: (A, B, C, D, E, F) => ({ x: -(F / 2) - 0.5, y: -E }),
  },
  {
    key: "15",
    expression: (A, B, C, D, E, F) => ({
      x: -(F / 2) - 0.5,
      y: 0.5 * D - 0.5 * E - 5,
    }),
  },
  {
    key: "16",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) - 1.5, y: -D }),
  },
  {
    key: "17",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) - 1.5, y: -C }),
  },
  {
    key: "18",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) - 1.5, y: 0 }),
  },
  {
    key: "19",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) - 1.5, y: -0.5 * D }),
  },
  {
    key: "20",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) + 0.5, y: 0 }),
  },
  {
    key: "21",
    expression: (A, B, C, D, E, F) => ({ x: -(B / 16) + 0.5, y: 2 }),
  },
  {
    key: "22",
    expression: (A, B, C, D, E, F) => ({
      x: Math.sqrt(A ** 2 / 16 + 12),
      y: 0,
    }),
  },
  {
    key: "23",
    expression: (A, B, C, D, E, F) => ({ x: -(17 / 96) * B - 1.3, y: -D }),
  },
  {
    key: "24",
    expression: (A, B, C, D, E, F) => ({
      x: -(17 / 96) * B - 1.3,
      y: -D - 0.5,
    }),
  },
  { key: "25", expression: (A, B, C, D, E, F) => ({ x: (3 / 16) * B, y: -C }) },
  { key: "26", expression: (A, B, C, D, E, F) => ({ x: F / 2 + 0.5, y: -E }) },
  {
    key: "27",
    expression: (A, B, C, D, E, F) => ({
      x: F / 2 + 0.5 + 1.5,
      y: -0.5 * D - 0.5 * E - 5,
    }),
  },
  {
    key: "28",
    expression: (A, B, C, D, E, F) => ({ x: -(F / 2) + 0.5, y: -E }),
  },
  {
    key: "29",
    expression: (A, B, C, D, E, F) => ({
      x: -(F / 2) + 0.5,
      y: -0.5 * D - 0.5 * E - 5,
    }),
  },
  { key: "30", expression: (A, B, C, D, E, F) => ({ x: -(B / 12) - 2 - 2.121320344, y: -D + 2.121320344}) },


];


// Make these corrections to your expressions, and the syntax error should be resolved. After modifying the expressions, try recalculating the points. If you encounter any further issues, please let me know!
// // Insert sample formulas into the database
// Formula.insertMany(sampleFormulas)
//   .then(() => console.log("Sample formulas inserted successfully"))
//   .catch((err) => console.error("Error inserting sample formulas:", err));

module.exports = Formula;

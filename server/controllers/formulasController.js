const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Formula = require("../model/Formula");
const math = require("mathjs");
const userModel = require("../model/User")
const jwt = require("jsonwebtoken");


const TrouserCalculation = asyncHandler(async (req, res) => {
  const { values } = req.body;
  const { A, B, C, D, E, F } = values;

  try {
    const formulas = await Formula.find();

    const calculatedPoints = {};
    formulas.forEach((formula) => {
      let expression = formula.expression;
      // Substitute variable values into the expression
      const expressionFunction = eval("(" + expression + ")");

      // Evaluate the expression function with provided values
      const result = expressionFunction(A, B, C, D, E, F);
      console.log(result);

      calculatedPoints[formula.key] = result;
    });

    const calculatedPointsPixels={};
    formulas.forEach((formula) => {
      let expression = formula.expression;
      // Substitute variable values into the expression
      const expressionFunction = eval("(" + expression + ")");

      // Evaluate the expression function with provided values
      const result = expressionFunction(A*37.7952755906, B*37.7952755906, C*37.7952755906, D*37.7952755906, E*37.7952755906, F*37.7952755906);
      console.log(result);

      calculatedPointsPixels[formula.key] = result;
    });
    // Define the keys of the points you want to send to the frontend
    const pointsToSend = [
      "3",
      "6",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "30",
      "32",
      "33",
      "38",
      "39",


    ]; // Add more keys as needed
    const backpointsToSend = [
      "0",
      "21",
      "19",
      "24",
      "29",
      "28",
      "26",
      "27",
      "25",
      "22",
      "31",
      "34",
      "35",
      "36",
      "37",
    ]; // Add more keys as needed
    const gridpointsToSend = [
      "0",
      "7",
      "18",
      "22",
      "17",
      "6",
      "2",
      "25",
      "1",
      "16",
      "5",
      "23",
      "24",
      "29",
      "15",
      "4",
      "27",
      "3",
      "26",
      "28",
    ]; // Add more keys as needed

    // Filter the calculated points to include only the points to send
    const filteredPoints = {};
    pointsToSend.forEach((key) => {
      if (calculatedPoints[key]) {
        filteredPoints[key] = calculatedPoints[key];
      }
    });
    const filteredbackviewPoints = {};
    backpointsToSend.forEach((key) => {
      if (calculatedPoints[key]) {
        filteredbackviewPoints[key] = calculatedPoints[key];
      }
    });
    const filteredgridviewPoints = {};
    gridpointsToSend.forEach((key) => {
      if (calculatedPoints[key]) {
        filteredgridviewPoints[key] = calculatedPoints[key];
      }
    });

    res.json({
      success: true,
      calculatedPoints,
      filteredPoints,
      filteredbackviewPoints,
      filteredgridviewPoints,
      calculatedPointsPixels,
    });
    console.log(calculatedPoints);
    console.log(calculatedPointsPixels);
  } catch (error) {
    console.error("Error calculating points:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});




const FetchFormulaeController = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    const userId= data.id;
      try {
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.role ==="admin"){
        const formulas = await Formula.find();
        res.status(200).json(formulas);
      }
    } catch (error) {
      res.status(500).json({ message: "Not authorized to fetch formulae" });
    }
  });
});

// Update Formula Controller
const UpdateFormulaController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { key, expression } = req.body;

  try {
    // Check if the user is an admin
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const user = await userModel.findById(userId);
    if (!user || user.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Find the formula by id
    let formula = await Formula.findById(id);
    if (!formula) {
      return res.status(404).json({ message: "Formula not found" });
    }

    // Update the formula fields
    formula.key = key;
    formula.expression = expression;

    // Save the updated formula
    await formula.save();

    res.status(200).json({ message: "Formula updated successfully", formula });
  } catch (error) {
    console.error("Error updating formula:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});



// Delete Formula Controller
const DeleteFormulaController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the user is an admin
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const user = await userModel.findById(userId);
    if (!user || user.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Find the formula by id
    let formula = await Formula.findById(id);
    if (!formula) {
      return res.status(404).json({ message: "Formula not found" });
    }

    // Delete the formula
    await formula.remove();

    res.status(200).json({ message: "Formula deleted successfully" });
  } catch (error) {
    console.error("Error deleting formula:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
module.exports = { TrouserCalculation , FetchFormulaeController ,DeleteFormulaController,UpdateFormulaController};

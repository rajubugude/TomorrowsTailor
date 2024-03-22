const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Formula = require("../model/Formula");
const math = require("mathjs");

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
    ]; // Add more keys as needed

    // Filter the calculated points to include only the points to send
    const filteredPoints = {};
    pointsToSend.forEach((key) => {
      if (calculatedPoints[key]) {
        filteredPoints[key] = calculatedPoints[key];
      }
    });

    console.log(filteredPoints);
    res.json({ success: true, calculatedPoints, filteredPoints });
    console.log(calculatedPoints);
  } catch (error) {
    console.error("Error calculating points:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = { TrouserCalculation };

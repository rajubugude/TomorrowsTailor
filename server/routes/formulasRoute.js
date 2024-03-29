const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { TrouserCalculation, FetchFormulaeController } = require("../controllers/formulasController");
router.post("/calculate", TrouserCalculation);
router.get("/formulae",FetchFormulaeController);

module.exports = router;

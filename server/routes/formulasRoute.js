const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { TrouserCalculation } = require("../controllers/formulasController");
router.post("/trouser", TrouserCalculation);

module.exports = router;

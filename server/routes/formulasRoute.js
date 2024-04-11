const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { TrouserCalculation, FetchFormulaeController,UpdateFormulaController, DeleteFormulaController } = require("../controllers/formulasController");
router.post("/calculate", TrouserCalculation);

router.get("/formulae",FetchFormulaeController);
router.put("/edit-formulae/:id",UpdateFormulaController)
router.delete("/delete-formulae/:id",DeleteFormulaController)
module.exports = router;

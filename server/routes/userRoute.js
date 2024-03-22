const express = require("express");
const router = express.Router();
const {
  loginController,
  logoutController,
  registerController,
  fetchController,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/logout", logoutController);
router.get("/refetch", fetchController);

module.exports = router;

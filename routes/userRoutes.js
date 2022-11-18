const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();
router.get("/", userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
router.get("/logout", authController.logout);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;

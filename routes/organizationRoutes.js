const express = require("express");
const organizationController = require("./../controllers/organizationController");
// const authController = require("./../controllers/authController");

const router = express.Router();

// router.use(authController.protect);


router
  .route("/")
  .get(organizationController.getAllOrganizations)
  .post(
    // authController.restrictTo("employee", "admin"),
    organizationController.createOrganization
  );

router
  .route("/:id")
  .patch(
    // authController.restrictTo("employee", "admin"),
    organizationController.updateOrganization
  )
  .delete(
    // authController.restrictTo("employee", "admin"),
    organizationController.deleteOrganization
  );

module.exports = router;

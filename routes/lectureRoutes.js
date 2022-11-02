const express = require("express");
const factory = require("./../controllers/handlerFactory");
const lectureController = require("./../controllers/lectureController");

// const authController = require("./../controllers/authController");

const router = express.Router();


router.route("/").get(lectureController.getAllLectures).post(
  // authController.protect,
  // authController.restrictTo("admin", "employee"),
  factory.uploadImage,
  factory.getImage,
  lectureController.createLecture
);

router
  .route("/:id")
  .get(lectureController.getLecture)
  .patch(
    // authController.protect,
    // authController.restrictTo("admin", "employee"),
    lectureController.updateLecture
  )
  .delete(
    // authController.protect,
    // authController.restrictTo("admin", "employee"),
    lectureController.deleteLecture
  );

module.exports = router;

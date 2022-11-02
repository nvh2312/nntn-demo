const express = require("express");
const factory = require("./../controllers/handlerFactory");
const blogController = require("./../controllers/blogController");

// const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/top-5-similar")
  .get(blogController.aliasTopBlogs, blogController.getAllBlogs);

router.route("/").get(blogController.getAllBlogs).post(
  // authController.protect,
  // authController.restrictTo("admin", "employee"),
  factory.uploadImage,
  factory.getImage,
  blogController.createBlog
);

router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(
    // authController.protect,
    // authController.restrictTo("admin", "employee"),
    blogController.updateBlog
  )
  .delete(
    // authController.protect,
    // authController.restrictTo("admin", "employee"),
    blogController.deleteBlog
  );

module.exports = router;

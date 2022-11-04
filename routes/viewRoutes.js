const express = require("express");
const Blog = require("../models/blogModel");
const Category = require("../models/categoryModel");
const authController = require("../controllers/authController");
// const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", authController.isLoggedIn, async function (req, res, next) {
  const blog = await Category.findOne({ slug: "tin-tuc-su-kien" }).populate({
    path: "blogs",
  });
  res.render("home", { blog });
});
router.get("/Blogs/Add", authController.isLoggedIn, async function (req, res, next) {
  res.render("addBlog");
});
router.get("/Blogs/:slug", authController.isLoggedIn, async function (req, res, next) {
  const blog = await Blog.findOne({ slug: req.params.slug });
  res.render("showBlog", { blog });
});
// router.get("/Blogs/:categoryID", async function (req, res, next) {
//   const blogs = await Category.findOne({ category: req.params.categoryID });
//   res.render("category", { blogs });
// });
router.get("/login", async function (req, res, next) {
  res.render("login");
});
router.get("/sign-up", async function (req, res, next) {
  res.render("signup");
});
module.exports = router;

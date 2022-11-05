const express = require("express");
const Blog = require("../models/blogModel");
const Category = require("../models/categoryModel");
const Organization = require("../models/organizationModel");
const authController = require("../controllers/authController");
const organizationController = require("../controllers/organizationController");
// const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", authController.isLoggedIn, async function (req, res, next) {
  const blog = await Category.findOne({ slug: "tin-tuc-su-kien" }).populate({
    path: "blogs",
  });
  res.render("home", { blog });
});
router.get(
  "/blog/add",
  authController.isLoggedIn,
  async function (req, res, next) {
    res.render("addBlog");
  }
);
router.get(
  "/Blogs/:slug",
  authController.isLoggedIn,
  async function (req, res, next) {
    const blog = await Blog.findOne({ slug: req.params.slug });
    res.render("showBlog", { blog });
  }
);
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
router.get("/lecture/add",authController.isLoggedIn, async function (req, res, next) {
  res.render("addLecture");
});
router.get("/:slug",organizationController.getSlugOrganization, async function (req, res, next) {
  const organization = req.organization;
  res.render("showAllLecture", { organization });
});
module.exports = router;

const express = require("express");
const Blog = require('../models/blogModel');
// const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home");
});
router.get("/Blogs/Add", async function (req, res, next) {

  res.render("addBlog");
});
router.get("/Blogs/:id", async function (req, res, next) {
  const blog = await Blog.findOne({ _id: req.params.id })
  res.render("showBlog",{blog});
});
module.exports = router;

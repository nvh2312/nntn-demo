const Category = require("./../models/categoryModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
// const AppError = require("./../utils/appError");

exports.getAllCategories = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category,{ path: 'blogs' });
exports.getSlugCategory = async (req, res, next) => {
    const doc = await Category.findOne({slug: req.params.slug});
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  }
exports.createCategory = factory.createOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);

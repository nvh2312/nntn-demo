const Lecture = require("./../models/lectureModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
// const AppError = require("./../utils/appError");

exports.getAllLectures = factory.getAll(Lecture);
exports.getLecture = factory.getOne(Lecture);
exports.createLecture = factory.createOne(Lecture);
exports.updateLecture = factory.updateOne(Lecture);
exports.deleteLecture = factory.deleteOne(Lecture);

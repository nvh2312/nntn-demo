const Organization = require("./../models/organizationModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
// const AppError = require("./../utils/appError");

exports.getAllOrganizations = factory.getAll(Organization);
exports.getOrganization = factory.getOne(Organization,{ path: 'lectures' });
exports.getSlugOrganization =async (req, res, next) => {
    const doc = await Organization.findOne({slug: req.params.slug}).populate({ path: 'lectures' });
    req.organization = doc;
    next();
  }
exports.createOrganization = factory.createOne(Organization);
exports.updateOrganization = factory.updateOne(Organization);
exports.deleteOrganization = factory.deleteOne(Organization);

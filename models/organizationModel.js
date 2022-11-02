const mongoose = require("mongoose");
const slugify = require("slugify");
const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A organizational structure must have a name"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A organizational structure name must have less or equal then 40 characters",
      ],
      minlength: [
        2,
        "A organizational structure name must have more or equal then 3 characters",
      ],
    },
    slug: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


// DOCUMENT MIDDLEWARE: runs before .save() and .create()
organizationSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;

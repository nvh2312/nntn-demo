const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const domPurifier = require("dompurify");
const { JSDOM } = require("jsdom");
const htmlPurify = domPurifier(new JSDOM().window);

//initialize slug
mongoose.plugin(slug);
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    timeCreated: {
      type: Date,
      default: () => Date.now(),
    },
   
    image: {
      type: String,
      default: "placeholder.jpg",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    slug: { type: String, slug: "title", unique: true, slug_padding_size: 2 },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.pre("validate", function (next) {
  //check if there is a description
  if (this.description) {
    this.description = htmlPurify.sanitize(this.description);
  }
  next();
});
blogSchema.pre(/^find/, function (next) {
    this.populate({
      path: "category",
      select: "name",
    })
    next();
});
module.exports = mongoose.model("Blog", blogSchema);

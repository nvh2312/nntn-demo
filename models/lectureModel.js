const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "placeholder.jpg",
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

lectureSchema.pre(/^find/, function (next) {
  this.populate({
    path: "organization",
    select: "name",
  });
  next();
});
module.exports = mongoose.model("Lecture", lectureSchema);

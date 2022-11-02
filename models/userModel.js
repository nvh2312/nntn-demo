const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell us your username!"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please tell us your password!"],
  },
  role: {
    type: String,
    enum: ["student", "lecture"],
    default: "student",
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;


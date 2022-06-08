const mongoose = require("mongoose");
const { FacultySchema } = require("./faculty.model");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  faculty: [FacultySchema],
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
});

const Userdb = mongoose.model("userdb", UserSchema);

module.exports = Userdb;

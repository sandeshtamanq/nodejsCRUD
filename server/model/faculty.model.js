const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  facultyName: {
    type: String,
    require: true,
  },
});

const Facultydb = mongoose.model("facultydb", FacultySchema);

module.exports = { FacultySchema, Facultydb };

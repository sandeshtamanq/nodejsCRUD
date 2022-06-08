const facultyController = require("../controller/facultyController");
const router = require("express").Router();

//API
router.route.post("/add-faculty", facultyController.addFaculty);

const router = require("express").Router();
const { addFaculty } = require("../controller/facultyController");
const services = require("../services/render");
//API
router.route("/").get(services.addFacultyRouteRender).post(addFaculty);

module.exports = router;

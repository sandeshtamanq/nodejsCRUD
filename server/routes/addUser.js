const router = require("express").Router();
const services = require("../services/render");
const UserController = require("../controller/userController");
/**
 * @description Add User Route
 * @method GET /add-user
 */
router.route("/").get(services.addUserRouteRender).post(UserController.addUser);

// API

router.route;
module.exports = router;

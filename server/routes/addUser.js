const router = require("express").Router();
const services = require("../services/render");

/**
 * @description Add User Route
 * @method GET /add-user
 */
router.route("/").get(services.addUserRouteRender);

module.exports = router;

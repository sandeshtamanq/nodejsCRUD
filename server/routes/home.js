const router = require("express").Router();
const services = require("../services/render");

/***
 * @description Home Route
 * @method GET /
 */
router.route("/").get(services.homeRouteRender);

module.exports = router;

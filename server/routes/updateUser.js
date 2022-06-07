const router = require("express").Router();
const service = require("../services/render");

/**
 * @description Update User Route
 * @method GET /update-user
 */
router.route("/").get(service.updateUserRouteRender);

module.exports = router;

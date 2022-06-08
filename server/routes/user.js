const router = require("express").Router();
const services = require("../services/render");
const UserController = require("../controller/userController");
/**
 * @description Add User Route
 * @method GET and @method POST /add-user
 */
router
  .route("/add-user")
  .get(services.addUserRouteRender)
  .post(UserController.addUser);

router.route("/:id").get(UserController.getUser).put(UserController.updateUser);

// API
module.exports = router;

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");


router.post("/registerUser", UserController.registerUser);
router.get("/listUser/:name?", Auth, ValidateUser, Admin, UserController.listUser);

module.exports = router;

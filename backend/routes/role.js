const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");



//GET, POST, PUT,  DELETE
// http://Localhost:3001/api/role/registerRole
router.post("/registerRole", RoleController.registerRole);
// http://Localhost:3001/api/role/listRole

router.get("/listRole", RoleController.listRoles);
router.put("/updateRole", RoleController.updateRole);


module.exports = router;
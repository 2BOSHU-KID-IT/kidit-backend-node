const router = require("express")();
const controller = require("../controller/user");
const Con = require("./mail");

router.post("/legister", Con.sign_up);
router.post("/login", controller.login);

module.exports = router;
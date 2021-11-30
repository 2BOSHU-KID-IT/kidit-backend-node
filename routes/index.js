const router = require("express")();
const User = require("./user");
const { Mail } = require("./mail");

router.use("/", User);
router.use("/", Mail);

module.exports = router;
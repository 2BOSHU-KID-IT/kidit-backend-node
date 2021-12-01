const router = require("express")();
const User = require("./user");
const { Mail } = require("./mail");
const Send = require("./send");

router.use("/", User);
router.use("/", Mail);
router.use("/", Send);

module.exports = router;
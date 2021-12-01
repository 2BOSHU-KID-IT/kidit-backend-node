const router = require("express")();
const controller = require("../controller/send");

router.post("/send", controller.SendMoney);

module.exports = router;
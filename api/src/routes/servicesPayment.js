const { Router } = require("express");
const {
  ServPayment,
  getServicePayment,
} = require("./Controllers/ServicesPayment.js");

const router = Router();

router.post("/", ServPayment);
router.get("/get", getServicePayment);

module.exports = router;

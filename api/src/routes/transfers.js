const { Router } = require("express");
const { doTransfer } = require("./Controllers/transfer.js");

const router = Router();

router.post("/", doTransfer);

module.exports = router;
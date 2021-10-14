const { Router } = require("express");
const { getOperaciones } = require("./Controllers/operaciones.js");

const router = Router();

router.get("/", getOperaciones);

module.exports = router;

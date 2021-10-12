const { Router } = require("express");
const { getOperaciones, postOperaciones } = require("./Controllers/operaciones.js");

const router = Router();

router.get("/", getOperaciones);
router.post("/", postOperaciones)

module.exports = router;
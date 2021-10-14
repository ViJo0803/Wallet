const { Router } = require("express");

const Users = require("./users.js");
const Cuentas = require("./cuentas.js");
const Operaciones = require("./operaciones.js");
const Transfers = require("./transfers.js")
const ServicesPayment = require("./servicesPayment.js")

const router = Router();

router.use("/user", Users);
router.use("/cuentas", Cuentas);
router.use("/operaciones", Operaciones);
router.use('/transfers', Transfers)
router.use('/servicesPayment', ServicesPayment)


module.exports = router;

const {Router}= require("express")
const{getCuentas, DepositAccount}= require("./Controllers/cuentas.js")

const router= Router()

router.get("/", getCuentas);
router.put("/", DepositAccount)


module.exports=router;
const {Router}= require("express")
const{getCuentas, DepositAccount}= require("./Controllers/cuentas.js")

const router= Router()

router.get("/get", getCuentas);
router.put("/update", DepositAccount)


module.exports=router;
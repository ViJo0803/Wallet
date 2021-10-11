const {Router}= require("express")
const{getCuentas }= require("./Controllers/cuentas.js")

const router= Router()

router.get("/", getCuentas)


module.exports=router;
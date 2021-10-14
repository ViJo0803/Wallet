const {Router}= require("express")
const{ServPayment}= require("./Controllers/ServicesPayment.js")

const router= Router()

router.post("/", ServPayment);



module.exports=router;
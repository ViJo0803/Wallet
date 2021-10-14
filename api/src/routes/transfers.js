const {Router}= require("express")
const{CreateTransfers}= require("./Controllers/Transfers.js")

const router= Router()

router.post("/", CreateTransfers );



module.exports=router;
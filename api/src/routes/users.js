const {Router}= require("express")
const{createUser}= require("./Controllers/Users.js")


const router= Router()

router.post('/',createUser )


module.exports=router;
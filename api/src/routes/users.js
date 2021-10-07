const {Router}= require("express")
const{createUser, getUser}= require("./Controllers/Users.js")


const router= Router()

router.post('/',createUser)
router.get('/', getUser)


module.exports=router;
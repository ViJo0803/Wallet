const {Router}= require("express")
const{getContacts, addContact }= require("./Controllers/contacts.js")

const router= Router()

router.get("/", getContacts)
router.post("/", addContact)


module.exports=router;
const {Router}= require("express")
const{addContact, getContacts}= require("./Controllers/contacts.js");


const router= Router()

router.post("/add", addContact );
router.get("/get/", getContacts);




module.exports=router;
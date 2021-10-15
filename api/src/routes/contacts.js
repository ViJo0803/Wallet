const {Router}= require("express")
const{addContact, updateContact, deleteContact, getContacts}= require("./Controllers/contacts.js");


const router= Router()

router.post("/add", addContact );
//router.put("/update", updateContact)
//router.delete("/remove", deleteContact)
router.get("/get/", getContacts)



module.exports=router;
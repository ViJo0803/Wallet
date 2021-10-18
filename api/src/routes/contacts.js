const {Router}= require("express")
const{addContact, getContacts, getAllContacts}= require("./Controllers/contacts.js");


const router= Router()

router.post("/add", addContact );
//router.put("/update", updateContact)
//router.delete("/remove", deleteContact)
router.get("/get/", getContacts);
router.get("/get", getAllContacts);




module.exports=router;
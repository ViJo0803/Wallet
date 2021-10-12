const { Router } = require("express");
const { createUser, getUser } = require("./Controllers/users.js");

const router = Router();

router.post("/create", createUser);
router.get("/get", getUser);

module.exports = router;

const { Router } = require("express");
const {
  createUser,
  getUser,
  updateUser,
  doTransfer,
} = require("./Controllers/Users.js");

const router = Router();

router.post("/create", createUser);
router.get("/get", getUser);
router.put("/update", updateUser);

module.exports = router;

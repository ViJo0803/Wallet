const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Users = require("./users.js")
const axios = require("axios");
const { Usuario, Favoritos } = require("../db");
const router = Router();

router.use('/user', Users)
  
module.exports = router;

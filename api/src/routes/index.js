const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Users = require("./users.js")

const router = Router();

router.use('/user', Users)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
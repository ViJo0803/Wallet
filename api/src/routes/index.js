const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { combineTableNames } = require('sequelize'); // sequelize/types/lib/utils
const { noExtendLeft } = require('sequelize'); // /types/lib/operators
const router = Router();
const { postUser } = require('./Controllers/userControllers.js')

router.post('/register', postUser)


module.exports = router;
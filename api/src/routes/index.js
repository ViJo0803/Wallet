const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Usuario } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/usuario", async (req, res) => {
  const {
    nombre,
    apellidos,
    mail,
    hash,
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  } = req.body;
  let usuariocreado = await Usuario.create({
    nombre,
    apellidos,
    mail,
    hash,
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  });

  // let idusuarioDb = await Usuario.findAll({
  //   where: { dni: dni },
  // });
  // add viene de sequelize
  // usuariocreado.addusuario(isusuarioDb);
  res.send("usuario creado con exito");
});
module.exports = router;

const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Usuario, Favoritos } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDbInfo = async () => {
  return await Usuario.findAll({
    // include: {
    //   model: Favoritos,
    //   attributes: ["name"],
    //   through: {
    //     attributes: [],
    //   },
    // },
  });
};


router.get("/usuarios", async (req, res) => {
  const mail = req.query.mail;
  try{
    let usuarios = await getDbInfo();
    if (mail) {
      let usuarioEmail = await usuarios.filter((usuario) =>
      usuario.mail.toLowerCase().includes(mail.toLowerCase())
      );
      usuarioEmail.length
      ? res.status(200).send(usuarioEmail)
      : res.status(404).send("Usuario no registrado");
    } else {
      res.status(200).send(usuarios);
    }
      }catch(error){
        console.log(error)}
})


router.post("/usuario", async (req, res) => {
  const {
    nombre,
    apellidos,
    mail,
    hash, // cambiar a direccion
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  } = req.body;

  
   await Usuario.create({
    nombre,
    apellidos,
    mail,
    hash,  // cambiar a direccion
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  });
  
  /* let idusuarioDb = await Usuario.findAll({
    where: { dni: dni },
  }); */
  // add viene de sequelize
  // usuariocreado.addUsuario(idusuarioDb);
  
  res.send("usuario creado con exito");
});


module.exports = router;

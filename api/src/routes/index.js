const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Usuario } = require("../db");
const Stripe = require("stripe");


const { SECRET_KEY } = process.env;
const stripe = Stripe(SECRET_KEY, { apiVersion: '2020-08-27' })

const router = Router();

require('dotenv').config();
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
  router.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099, // menor denominacion posible de la moneda
        currency: 'usd', // moneda que recibe
        payment_method_types: ["card"], //si se aclara 'card' solo acepta tarjeta
      });
      const clientSecret = paymentIntent.client_secret;

      res.json({
        clientSecret: clientSecret,
      })
    } catch (err) {
      console.error(err);
      res.json({ error: err.message })
    }
  })
module.exports = router;

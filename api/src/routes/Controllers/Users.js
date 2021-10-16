const axios = require("axios");
const { Usuario, Cuentas } = require("../../db");
require("dotenv").config();

function generarNumeroCuenta() {
  const cifras = 15;
  let stringNum = "";

  for (var i = 0; i < cifras; i++) {
    var x = Math.random() * 10;
    var x1 = Math.floor(x);
    stringNum = stringNum + x1;
  }
  return stringNum;
}

async function createUser(req, res, next) {

  const {
    nombre,
    apellidos,
    mail,
    direccion,
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  } = req.body;

  let usuarioCreado = await Usuario.create({
    nombre,
    apellidos,
    mail,
    direccion,
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  });

  let user = await Usuario.findOne({
    where: {
      mail: mail,
    },
  });

  let iduser = user.idusuario;

  const cbuGenerado = generarNumeroCuenta();
  let account = await Cuentas.create({
    tipomoneda: "AR$",
    numerocuenta: cbuGenerado,
    saldo: 0,
    alias: mail,
    usuarioIdusuario: iduser,
  });

  usuarioCreado = await Usuario.findByPk(iduser);
  res.send(usuarioCreado);
}


async function getUser(req, res, next) {
  try {
    const mail = req.query.mail;

    let user = await Usuario.findOne({
      where: {
        mail: mail,
      },
    });
    user ? res.send(user) : res.send(null);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {

  const {
    idusuario,
    nombre,
    apellidos,
    mail,
    direccion,
    nickname,
    dni,
    telefono,
    foto,
    codigo_postal,
  } = req.body;

  let user = await Usuario.findOne({
    where: {
      idusuario: idusuario,
    },
  });

  user.idusuario = idusuario;
  user.nombre = nombre;
  user.apellidos = apellidos;
  user.mail = mail;
  user.direccion = direccion;
  user.nickname = nickname;
  user.dni = dni;
  user.telefono = telefono;
  user.foto = foto;
  user.codigo_postal = codigo_postal;

  await user.save();

  let user2 = await Usuario.findOne({
    where: {
      idusuario: idusuario,
    },
  });

  res.send(user2);
}

module.exports = { createUser, getUser, updateUser};

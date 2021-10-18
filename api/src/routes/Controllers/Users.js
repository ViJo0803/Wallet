const axios = require("axios");
const { Usuario, Cuentas } = require("../../db");
require("dotenv").config();
const bcrypt = require("bcrypt");

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
    password,
    dni,
    telefono,
    foto,
    codigo_postal,
  } = req.body;

  try {
    let acc;
    let cbuGenerado;
    let usuarioCreado;

      usuarioCreado = await Usuario.create({
        password: bcrypt.hashSync(password, 10),
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

      do {
        cbuGenerado = generarNumeroCuenta();
        acc = await Cuentas.findOne({
          where: {
            idcuentas: cbuGenerado,
          },
        });
      } while (acc);

      let account = await Cuentas.create({
        idcuentas: cbuGenerado,
        tipomoneda: "AR$",
        saldo: 0,
        alias: mail,
        usuarioIdusuario: usuarioCreado.idusuario,
      });

      res.send(usuarioCreado);
    
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const mail = req.body.mail;
    const password = req.body.password;

    let user = await Usuario.findOne({
      where: {
        mail: mail,
      },
    });

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res.send(null).status(422);
    }

    let response = {  status:"",  message:"", data:[] }
    delete user.password;

    if (user) {
      response.status = "SUCCESS"
      response.message= "Welcome"
      response.data = [user]
     console.log(user)
      res.send(response);
    } else {
      res.send(null);
    }
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

  if (
    !idusuario ||
    !nombre ||
    !apellidos ||
    !mail ||
    !direccion ||
    !nickname ||
    !dni ||
    !telefono ||
    !foto ||
    !codigo_postal
  ) {
    res.status(500).send("Missing params");
  }

  try {
    let user = await Usuario.findOne({
      where: {
        idusuario: idusuario,
      },
    });

    if (!user) {
      res.status(404).send("No user with that id");
    }

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
    if (!user2) {
      res.status(500).send("Ups, something went wrong");
    }
    res.send(user2);
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, getUser, updateUser };

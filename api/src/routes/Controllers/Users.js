
const axios = require("axios");
const { Usuario, Cuentas } = require("../../db");
require("dotenv").config();


function generarNumeroCuenta(){
  const cifras = 15
  let stringNum = ''

  for(var i=0; i < cifras; i++){
      var x = Math.random() * 10 
      var x1 = Math.floor(x)
      stringNum = stringNum + x1
  }
   console.log(stringNum) 
  return stringNum
}

async function createUser(req, res, next){
    
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

  
   let usuarioCreado = await Usuario.create({
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
  
  let user = await Usuario.findOne({
    where:{
      mail:mail
    }

  })


  let iduser = user.idusuario

  /* const CBU = CBUg() */
  const cbuGenerado = generarNumeroCuenta()
  /* console.log('cbu: ', cbuGenerado) */

  let account = await Cuentas.create({
    tipomoneda: "AR$",
    numerocuenta: cbuGenerado,
    saldo: 0,
    alias: mail,
    usuarioIdusuario: iduser
  })
  
  usuarioCreado= await Usuario.findByPk(iduser,{ 
    include:["cuentas"]
  })

  res.send(usuarioCreado)
}

const getDbInfo = async () => {
  return await Usuario.findAll({
  });
};



async function getUser(req, res, next){
  const mail = req.query.mail;
  try{
    let usuarios = await getDbInfo();
    if (mail) {
      let usuarioEmail = await usuarios.filter((usuario) =>
      usuario.mail.toLowerCase().includes(mail.toLowerCase())
      );
      usuarioEmail.length
      ? res.status(200).send(usuarioEmail)
      : res.status(204).send(null);
    } else {
      
      res.status(200).send(usuarios);
    }
      }catch(error){
        console.log(error)}


  
}




module.exports= {createUser, getUser}
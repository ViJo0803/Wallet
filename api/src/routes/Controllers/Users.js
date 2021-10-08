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
  /* console.log(usuariocreado) */

  // let idusuarioDb = await Usuario.findAll({
  //   where: { dni: dni },
  // });
  // add viene de sequelize
  // usuariocreado.addusuario(isusuarioDb);
  res.send(usuarioCreado)
}


async function getUser(req, res, next){

const mail=req.query.mail

console.log(mail)

let user = await Usuario.findOne({
  where:{
    mail:mail
  }

})



let iduser = user?.idusuario

user= await Usuario.findByPk(iduser,{ 
  include:["cuentas"]
}
)

console.log("user: "+ user)

user?res.send(user): res.send(null)
}




module.exports= {createUser, getUser}



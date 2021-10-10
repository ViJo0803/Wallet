
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
    
  console.log(req.body)

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

  
  let usuariocreado= await Usuario.create({
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
    where:{
      mail:mail
    }

  })


  let iduser = user.idusuario

  /* const CBU = CBUg() */
  const cbuGenerado = generarNumeroCuenta()

  let account= await Cuentas.create({
    tipomoneda: "AR$",
    numerocuenta: cbuGenerado,
    saldo: 0,
    alias: mail,
    usuarioIdusuario: iduser
  })

  res.send(usuariocreado)
}






async function getUser(req, res, next){

const mail=req.query.mail


console.log(mail)

let user = await Usuario.findOne({
  where:{
    mail:mail
  }

})

user?res.send(user): res.send(null)
}




module.exports= {createUser, getUser}



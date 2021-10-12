const { Transferencias } = require("../../db");
require("dotenv").config();



async function postOperaciones(req, res, next){

    const { 
         cuentaIdcuentas,
         monto,
         fecha,
         destino,
     }= req.body
 
     console.log( "this is the body", req.body)


 let movimiento = await Transferencias.create({

    monto,
    fecha,
    destino,
    cuentaIdcuentas
 })

 res.send(movimiento) 
 
 }
 


async function getOperaciones(req, res, next) {
  id = req.query.id;

  console.log("this is the acount id", id)

  let operaciones= await Transferencias.findAll({
    where:{
        cuentaIdcuentas:id
    }
})


  console.log(operaciones[0])
  res.send(operaciones);
}

module.exports = { getOperaciones, postOperaciones };
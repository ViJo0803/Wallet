const { Transferencias } = require("../../db");
require("dotenv").config();




 


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

module.exports = { getOperaciones };
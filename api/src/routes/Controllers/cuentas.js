const { Usuario, Cuentas} = require("../../db");
require("dotenv").config();

async function getCuentas(req, res, next) {
  id = req.query.id;
  if(id=== undefined){
   
    let cuentas = await Cuentas.findAll({
      where: {
        usuarioIdusuario: id, 
      },
    });
    res.send(cuentas).status(200)
  } else res.send(null).status(204)
}


async function DepositAccount(req, res, next) {
    const idcuentas = req.query.id 
    const saldo  = req.query.monto;

    console.log('ruta ',idcuentas,' ',saldo)

    if (idcuentas) {
        let account = await Cuentas.findOne({
            where: {
                idcuentas: idcuentas
            }
        })
        account.saldo = parseInt(account.saldo) + parseInt(saldo);
        console.log('saldo final',account.saldo)
        await account.save();
        return res.send(account)
    }
}

module.exports = { getCuentas, DepositAccount}


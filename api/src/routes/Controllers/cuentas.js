const { Usuario, Cuentas} = require("../../db");
require("dotenv").config();

async function getCuentas(req, res, next) {
  try {
  id = req.query.id;
  console.log("la ide es ", id)
  let cuentas = await Cuentas.findAll({
    where: {
      usuarioIdusuario: id, 
    },
  });

  console.log("cuenta:",cuentas)
  res.send(cuentas)
}catch (error) {
    next(error);
  }
}


async function DepositAccount(req, res, next) {
    const { idcuentas, saldo } = req.body;
    if (idcuentas) {
        let account = await Cuentas.findOne({
            where: {
                idcuentas: idcuentas
            }
        })
        account.saldo = parseInt(account.saldo) + parseInt(saldo);
        await account.save();
        return res.send(account)
    }
}

module.exports = { getCuentas, DepositAccount}


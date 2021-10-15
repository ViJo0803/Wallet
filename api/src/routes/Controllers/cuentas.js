const { Usuario, Cuentas} = require("../../db");
require("dotenv").config();

async function getCuentas(req, res, next) {
  id = req.query.id;
  let cuentas = await Cuentas.findAll({
    where: {
      usuarioIdusuario: id, 
    },
  });
  res.send(cuentas);
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


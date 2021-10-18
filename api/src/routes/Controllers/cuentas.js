const { Usuario, Cuentas} = require("../../db");
require("dotenv").config();

async function getCuentas(req, res, next) {
  try{

    id = req.query.id;
    if(!id){res.status(404).send("An id is required with that id")};

    let cuentas = await Cuentas.findOne({
      where: {
        usuarioIdusuario: id, 
      },
    });
    cuentas?res.send(cuentas):res.sendStatus(404)
  } catch (error) {
    next(error);
  }
}


async function DepositAccount(req, res, next) {
    const { idcuentas, saldo } = req.body;
    try{
    if (idcuentas) {
        let account = await Cuentas.findOne({
            where: {
                idcuentas: idcuentas
            }
        })
        if(!account){res.status(404).send("No accounts with that id")};

        account.saldo = parseInt(account.saldo) + parseInt(saldo);
        await account.save();
        return res.send(account)
    } else{
      res.status(400).send("account id required")
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getCuentas, DepositAccount}


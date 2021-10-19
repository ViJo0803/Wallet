const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, monto, alias, destino, fecha } = req.body;


  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });

    let Account_destino = await Cuentas.findOne({
      where: {
        idcuentas: destino,
      },
    });
    
  
    if (Account_origen.saldo >= monto && monto > 0) {
        Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto); 
      await Account_origen.save();
      Account_destino.saldo = parseInt(Account_destino.saldo) + parseInt(monto);
        await Account_destino.save();

      let transfer = await Transferencias.create({
        monto,
        destino,
        fecha,
        origin: Account_origen.idcuentas,
        alias
      });

    return res.send(transfer);

    }else res.send(null).status(204)
   }catch (error) {
      next(error);
    }
    
  }

  async function getTransfers(req, res, next) {
    id = req.query.id;
    let destino = [], origen = [];

    destino = await Transferencias.findAll({
      where: {
        destino: id,
      },
    });
   
     origen = await Transferencias.findAll({
      where: {
        origin: id,
      },
    });

  
    let arr = destino.concat(origen);
  
    function compare(a, b) {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      return 0;
    }
    arr.sort(compare);
  
    res.send(arr);
  }

module.exports = { CreateTransfers, getTransfers };

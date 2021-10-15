const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, monto, fecha, destino } = req.body;

  console.log(req.body)

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });

    console.log("cuenta de origne",Account_origen)
    let Account_destino = await Cuentas.findOne({
      where: {
        idcuentas: destino,
      },
    });
    console.log("cuenta de destino",Account_destino)
    console.log("saldo de origen",Account_origen.saldo)
    if (Account_origen.saldo >= monto && monto > 0) {

        Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
        console.log("saldo nuevo origen",Account_origen.saldo)
      await Account_origen.save();
      Account_destino.saldo = parseInt(Account_destino.saldo) + parseInt(monto);
      console.log("saldo nuevo destino",Account_destino.saldo)
      await Account_destino.save();

      let transfer = await Transferencias.create({
        monto,
        destino,
        fecha,
        origin: origen,
      });

      return res.send(transfer);

    } }catch (error) {
      next(error);
    }
    
  }


async function getTransfers(req, res, next) {
  id = req.query.id;
  
  let destino = await Transferencias.findAll({
    where: {
      destino: id,
    },
  });

  let origen = await Transferencias.findAll({
    where: {
      origin: id,
    },
  });

  res.send(destino.concat(origen));
}



module.exports = { CreateTransfers, getTransfers };

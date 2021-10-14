const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, id, monto, fecha, destino } = req.body;

  if (cuentaIdcuentas && destino) {
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
        id,
        fecha,
        origin: origen,
      });

      return res.send(transfer);

    } else {
      res.send("Something went wrong");
    }
  }
}

module.exports = { CreateTransfers };

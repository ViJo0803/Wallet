const { Transferencias } = require("../../db");
require("dotenv").config();

async function doTransfer(req, res, next) {
  const { cuentaIdcuentas, monto, fecha, destino } = req.body;

  let transfer = await Transferencias.create({
    monto,
    fecha,
    destino,
    cuentaIdcuentas,
  });

  res.send(transfer);
}

module.exports = { doTransfer };


 
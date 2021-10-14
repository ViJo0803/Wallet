const { Transferencias } = require("../../db");
require("dotenv").config();

async function doTransfer(req, res, next) {
  const { cuentaIdcuentas, id, monto, destino, fecha } = req.body;

  let movimiento = await Transferencias.create({
    monto,
    destino,
    id,
    fecha,
    cuentaIdcuentas
  });


  res.send(movimiento);
}

module.exports = { doTransfer };

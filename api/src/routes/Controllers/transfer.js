const { Transferencias } = require("../../db");
require("dotenv").config();

async function doTransfer(req, res, next) {
    const { id, monto, fecha, destino } = req.body;
  
    let movimiento = await Transferencias.create({
      monto,
      fecha,
      destino,
      id,
    });
  
    res.send(movimiento);
  }

  module.exports = { doTransfer };

  
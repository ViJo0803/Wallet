const { Transferencias } = require("../../db");
require("dotenv").config();

async function getOperaciones(req, res, next) {
  id = req.query.id;

  let operaciones = await Transferencias.findAll({
    where: {
      cuentaIdcuentas: id
    }
  });
  res.send(operaciones);
}

module.exports = { getOperaciones };

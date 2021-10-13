const { Transferencias } = require("../../db");
require("dotenv").config();

async function getOperaciones(req, res, next) {
  id = req.query.id;
  let operaciones = await Transferencias.findAll({
    where: {
      id: id
    }
  });
  res.send(operaciones);
}

module.exports = { getOperaciones };

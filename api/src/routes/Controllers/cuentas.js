const { Usuario, Cuentas } = require("../../db");
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

module.exports = { getCuentas };

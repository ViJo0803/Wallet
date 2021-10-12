const { Usuario, Cuentas } = require("../../db");
require("dotenv").config();

async function getCuentas(req, res, next) {
  console.log(req.query.id);

  id = req.query.id;

  let cuentas = await Cuentas.findAll({
    where: {
      usuarioIdusuario: id //llegaba undefinded
    }
  });

  res.send(cuentas);
}

module.exports = { getCuentas };

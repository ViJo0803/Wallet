const { Pago_servicios, Cuentas, Servicios } = require("../../db");
require("dotenv").config();

async function ServPayment(req, res, next) {
    // fecha del pago
    //idcuentas para hacer la transf
    // monto para descontar de Cuentas
    //id servicios
    
}

module.exports = { ServPayment }
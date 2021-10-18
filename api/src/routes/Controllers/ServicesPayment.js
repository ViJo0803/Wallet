const { Pago_servicios, Cuentas, Servicios } = require("../../db");
require("dotenv").config();

async function ServPayment(req, res, next) {
  // nombre del servicio a pagar
  // monto a pagar
  // la cuenta de donde viene la plata

  const { origen, destino, monto, fecha } = req.body;

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });

    let servicio = await Servicios.findOne({
      where: {
        nombre: destino,
      },
    });

    if (!servicio) {
       servicio = await Servicios.create({
        monto: monto,
        fecha_vencimiento: fecha,
        nombre: destino,
      });

       servicio = await Servicios.findOne({
        where: {
          nombre: destino,
        },
      });
    }


    if (Account_origen.saldo >= monto && monto > 0) {
      Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
      await Account_origen.save();
      
      servicio.monto = parseInt(servicio.monto) + parseInt(monto);
      await servicio.save();

      let pago = await Pago_servicios.create({
        fecha: fecha,
        servicioId: servicio.id,
      });

      return res.send(pago);
    }
  } catch (error) {
    next(error);
  }

  // fecha del pago
  //idcuentas para hacer la transf
  // monto para descontar de Cuentas
  //id servicios
}

module.exports = { ServPayment };

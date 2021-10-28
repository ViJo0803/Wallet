const { Pago_servicios, Cuentas, Servicios } = require("../../db");
require("dotenv").config();

async function ServPayment(req, res, next) {
  const { origen, destino, monto, fecha } = req.body;

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        numerocuenta: origen,
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

    if (
      parseInt(Account_origen.saldo) >= parseInt(monto) &&
      parseInt(monto) > 0
    ) {
      Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
      await Account_origen.save();

      servicio.monto = parseInt(servicio.monto) + parseInt(monto);
      await servicio.save();

      let pago = await Pago_servicios.create({
        fecha: fecha,
        servicioId: servicio.id,
        destino: destino,
        cuentaIdcuentas: Account_origen.idcuentas,
        monto: monto,
      });

      return res.send(pago);
    } else res.send(null).status(204);
  } catch (error) {
    next(error);
  }
}

async function getServicePayment(req, res, next) {
  try {
    const id = req.query.id;

    if (typeof id == "string" && id.length == 36) {
      const payments = await Pago_servicios.findAll({
        where: {
          cuentaIdcuentas: id,
        },
      });

      res.send(payments).status(200);
    } else res.send(null).status(204);
  } catch (error) {
    next(error);
  }
}

module.exports = { ServPayment, getServicePayment };

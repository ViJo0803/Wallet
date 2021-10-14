const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
    // destino vendria de favoritos o de un nuevo destino
    // y seria el nro de cuenta del favorito o nuevo ?
    const { idcuentas, monto, fecha, destino } = req.body;
    console.log('body transferencias: ' + req.body.monto);
    if (idcuentas) {

        let account = await Cuentas.findOne({
            where: {
                idcuentas: idcuentas
            }
        })

        if (account.saldo >= monto) {
            account.saldo = parseInt(account.saldo) - parseInt(monto);

            await account.save();
            console.log(account.saldo);

            let transfer = await Transferencias.create({
                monto: monto,
                fecha: fecha,
                destino: destino
            })


            return res.send(transfer)

        } else {
            res.send("You don't have enough balance for this operation")
        }



    }
}

module.exports = { CreateTransfers }

const { Usuario, Cuentas} = require("../../db");
require("dotenv").config();




async function getCuentas(req, res, next) {

    console.log(req.query.id)

    id = req.query.id


    let cuentas = await Cuentas.findAll({
        where: {
            usuarioIdusuario: id
        }
    })



    res.send(cuentas)

}

async function DepositAccount(req, res, next) {

    const { idcuentas, saldo } = req.body;
    console.log('body cuentas: ' + req.body.idcuentas);
    if (idcuentas) {

        let account = await Cuentas.findOne({
            where: {
                idcuentas: idcuentas
            }
        })

        account.saldo = parseInt(account.saldo) + parseInt(saldo);

        await account.save();
        console.log(account.saldo)
        return res.send(account)


    }
}



module.exports = { getCuentas, DepositAccount}
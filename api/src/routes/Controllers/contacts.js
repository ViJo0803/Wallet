const { Favoritos, Usuario, Cuentas } = require("../../db");
require("dotenv").config();


async function addContact(req, res, next) {

    const {
        alias,
        idusuario
    } = req.body
  
 
    const account = await Cuentas.findOne({
        where: {
            alias: alias,
        },
    });

    if(account !==undefined && account !==null ){

    const user = await Usuario.findOne({
        where: {
            idusuario: account.usuarioIdusuario
        }
    })

    if (user) {
        const fav = await Favoritos.findOrCreate({where: {
            alias: account.alias,
            name: user.nombre,
            lastname: user.apellidos,
            favorite_account_id: account.idcuentas,
            usuarioIdusuario: idusuario,
        }})
        res.send(fav).status(200)
    }
}

    else res.send(null).status(204)
}



async function getContacts(req, res, next) {

    id = req.query.id
    const favs = await Favoritos.findAll({
            where: {
                usuarioIdusuario: id
            }
        })
        res.send(favs)
}




module.exports = { addContact, getContacts }










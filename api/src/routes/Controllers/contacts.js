const { Favoritos, Usuario, Cuentas} = require("../../db");
require("dotenv").config();


async function addContact(req, res, next){

const {
    idusuario,
    alias,
    tipo,
    favorite_account_id
}= req.body




const usuarioIdusuario=idusuario;


const account= await Cuentas.findOne({
    where: {
        idcuentas: favorite_account_id,
    },
  });

const user= await Usuario.findOne({
    where:{
        idusuario: account.usuarioIdusuario
    }
})

const fav = await Favoritos.create({

    alias,
    tipo,
    name: user.nombre,
    lastname: user.apellidos,
    favorite_account_id,
    usuarioIdusuario,


})


res.send(fav)





}



async function getContacts(req, res, next){

    id=req.query.id
console.log(id)


    const favs= await Favoritos.findAll({
        where:{
            usuarioIdusuario:id
        }
    })


    res.send(favs)


}



module.exports={addContact, getContacts}
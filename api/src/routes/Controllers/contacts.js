const { Favoritos, Usuario, Cuentas} = require("../../db");
require("dotenv").config();


async function addContact(req, res, next){

    try{
        const {
            idusuario,
            alias,
            tipo,
            favorite_account_id
        }= req.body

        console.log("user id",idusuario)
        console.log("cuenta id",favorite_account_id)


        const account= await Cuentas.findOne({
            where:{
                idcuentas: favorite_account_id
            }
        })

       

        const user= await Usuario.findOne ({
            where: {
                idusuario: account.usuarioIdusuario,
            }
        })

        console.log("cuenta", account)

        const fav = await Favoritos.create({
            
            alias,
            tipo,
            name: user.nombre,
            lastname: user.apellidos,
            favorite_account_id,
            usuarioIdusuario:idusuario,

        })
        res.send(fav)
 
    }catch (error) {
        next(error);
      }
        
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
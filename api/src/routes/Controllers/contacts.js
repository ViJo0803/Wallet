const { Favoritos } = require("../../db");
require("dotenv").config();



async function getContacts (req, res, next){


id= req.query.id
console.log(id)
try{

    
    
    let favourites= await Favoritos.findAll({
        where:{
            usuarioIdusuario:id
        }
    })

    res.send(favourites)
    
}catch (error) {
    next(error);
  }
}

async function addContact (req, res, next){

    console.log(req.body)

    const{
        usuarioIdusuario,
        tipo,
        nombre, 
        destino
    }=req.body

    try{
    
        let contact= await Favoritos.create({
            nombre,
            tipo,
            destino,
            usuarioIdusuario
        })
        res.send(contact)
        
    }catch (error) {
        next(error);
      }
    }


module.exports= {getContacts, addContact}
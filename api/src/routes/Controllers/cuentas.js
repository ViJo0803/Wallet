const { Usuario, Cuentas } = require("../../db");
require("dotenv").config();








async function getCuentas(req, res, next){

    console.log( "this is the id",req.query.id)

    id=req.query.id


    let cuentas= await Cuentas.findAll({
        where:{
            usuarioIdusuario:id
        }
    })

    console.log("this is the cuenta", cuentas)

    res.send(cuentas)

}


module.exports= {getCuentas}
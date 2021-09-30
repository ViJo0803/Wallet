const { usuario } = require('../../db.js')
const { cuentas } = require('../../db.js')
const { generarNumeroCuenta } = require('./numeroCuentaGenerador.js')

async function postUser(req, res, next){
    let { nombre, apellidos, mail, hash, nickname, dni, telefono, foto, codigo_postal } = req.body

    console.log(req.body)

    try{


     /*   const existingMail = await usuario.findOne({
            where:{
                mail: mail
            }
        })

        console.log(existingMail? true: false)

        const existingNickname = await usuario.findOne({
            where:{
                nickname: nickname
            }
        })
        const existingDni = await usuario.findOne({
            where:{
                dni: dni
            }
        })
        
        if(existingMail) {
            res.send('email ya registrado!')
        } else if (existingNickname){
            res.send('nickname ya registrado!')
        } else if (existingDni){
            res.send('dni ya registrado!')
        } 
        */
        console.log("por crear usuario")

        await usuario.create({
                idusuario: dni,
                nombre,
                apellidos,
                mail,
                hash,
                nickname,
                telefono,
                foto,
                codigo_postal
            })
            console.log("usuario creado")

        const nro= generarNumeroCuenta()
        console.log(nro)

      /*  let cuentaCreada= await cuentas.create({
                    tipomoneda: "ARS",
                    numerocuenta: nro,
                    saldo:0,
                    alias:nickname,
        })


        cuentaCreada.addcuenta(dni)
*/
    res.status(201).send("Usuario Creado con Exito")

    }  catch (error) {
        next(error);
      }
}

module.exports = { postUser }
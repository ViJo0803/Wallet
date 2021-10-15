const { Transferencias, Cuentas, Favoritos, Usuario } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, monto, fecha, destino } = req.body;

  console.log(req.body)

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });


    console.log("Account_origen",Account_origen)

   
    let Account_destino = await Cuentas.findOne({
      where: {
        idcuentas: destino,
      },
    });

    console.log("Account_destino",Account_destino)
    
    if (Account_origen.saldo >= monto && monto > 0) {

        Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
        
      await Account_origen.save();
      Account_destino.saldo = parseInt(Account_destino.saldo) + parseInt(monto);
      
      await Account_destino.save();

        let transfer = await Transferencias.create({
          monto,
          destino,
          fecha,
          origin: origen,
      });

      const user= await Usuario.findOne({
        where:{
            idusuario: Account_destino.usuarioIdusuario
        }
    })

      
   console.log(Account_origen.usuarioIdusuario)

      const fav = await Favoritos.findOrCreate({
        where: {
        alias:user.nickname,
        tipo: "contacts",
        name: user.nombre,
        lastname: user.apellidos,
        favorite_account_id:Account_destino.idcuentas,
        usuarioIdusuario:Account_origen.usuarioIdusuario,
        }
    
    })


    console.log(fav)




      return res.send(transfer);

    } }catch (error) {
      next(error);
    }
    
  }


  async function getTransfers(req, res, next) {
    id = req.query.id;
    let destino = [], origen = [];

    destino = await Transferencias.findAll({
      where: {
        destino: id,
      },
    });
  
    origen = await Transferencias.findAll({
      where: {
        origin: id,
      },
    });
  
    let arr = destino.concat(origen);
  
    function compare(a, b) {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      return 0;
    }
    arr.sort(compare);

    
  
    res.send(arr);
  }

module.exports = { CreateTransfers, getTransfers };

const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, monto, alias, destino } = req.body;

  console.log(req.body)

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });


    console.log("ORIGEN", Account_origen)

   
    let Account_destino = await Cuentas.findOne({
      where: {
        idcuentas: destino,
      },
    });

    console.log("DESTINO",Account_destino)
    
    if (Account_origen.saldo >= monto && monto > 0) {

        Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
       
      await Account_origen.save();
      Account_destino.saldo = parseInt(Account_destino.saldo) + parseInt(monto);
      
      await Account_destino.save();

      let transfer = await Transferencias.create({
        monto:monto,
        destino:destino,
        alias: alias,
        origin: origen,
      });

    console.log(transfer)

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

    
      


 
    console.log("este es el destino ", destino)

  
    origen = await Transferencias.findAll({
      where: {
        origin: id,
      },
    });


   
      
    
    console.log("este es el origen ", origen)
  
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

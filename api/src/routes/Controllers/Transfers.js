const { Transferencias, Cuentas } = require("../../db");
require("dotenv").config();

async function CreateTransfers(req, res, next) {
  const { origen, monto, fecha, destino } = req.body;

 if(!origen || !monto || !fecha || !destino){res.status(411).send("Must fill all params")};

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        idcuentas: origen,
      },
    });
    if(Account_origen){ res.status(404).send(" Origin Account not found or wrong param")}

    
    let Account_destino = await Cuentas.findOne({
      where: {
        idcuentas: destino,
      },
    });
   
    if(Account_destino){ res.status(404).send("Destiny Account not found or wrong param")}


    if (Account_origen.saldo >= monto && monto > 0) {

        Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
        console.log("saldo nuevo origen",Account_origen.saldo)
      await Account_origen.save();
      Account_destino.saldo = parseInt(Account_destino.saldo) + parseInt(monto);
      console.log("saldo nuevo destino",Account_destino.saldo)
      await Account_destino.save();

      let transfer = await Transferencias.create({
        monto,
        destino,
        fecha,
        origin: origen,
      });

      !transfer? res.status(500).send("Ups, something went wrong, try again later"):res.send(transfer);

    } else{
      res.status(406).send("Insufficient funds")
    }

  }catch (error) {
      next(error);
    }
    
  }


  async function getTransfers(req, res, next) {

    try{

      id = req.query.id;
      if(!id){res.status(411).send("Missing id")}
      
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
    }catch (error) {
      next(error);
    }
    }
    
module.exports = { CreateTransfers, getTransfers };

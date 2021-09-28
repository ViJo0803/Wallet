const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("cuentas", {
    idcuentas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tipomoneda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numerocuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
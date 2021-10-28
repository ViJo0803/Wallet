const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cuentas", {
    idcuentas: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
};

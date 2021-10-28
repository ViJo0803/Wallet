const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("comprar_monedas", {
    idComprar_Monedas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

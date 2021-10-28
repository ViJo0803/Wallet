const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("pago_servicios", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    monto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

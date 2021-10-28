const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("transferencias", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   });
};

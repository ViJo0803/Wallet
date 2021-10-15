const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("favoritos", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_account_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });
};

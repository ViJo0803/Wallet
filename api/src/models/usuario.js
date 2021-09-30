const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("usuario", {
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull:false,
    },
      telefono: {
      type: DataTypes.STRING,
      allowNull:false,
    },
      foto: {
      type: DataTypes.STRING,
      allowNull:false,
    },
        codigo_postal: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  });
};

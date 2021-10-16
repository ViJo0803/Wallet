const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("usuario", {
    idusuario: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull:  true,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull:  true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull:  true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull:  true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
      dni: {
      type: DataTypes.STRING,
      allowNull: true,
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

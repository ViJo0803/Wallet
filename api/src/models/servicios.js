const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("servicios", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_vencimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });
};

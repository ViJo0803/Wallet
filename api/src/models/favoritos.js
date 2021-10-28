const { DataTypes } = require("sequelize");

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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_account_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

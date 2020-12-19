const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idCargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idCargo"
    },
    nomeCargo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nomeCargo"
    }
  };
  const options = {
    tableName: "cargo",
    comment: "",
    indexes: []
  };
  const CargoModel = sequelize.define("cargoModel", attributes, options);
  return CargoModel;
};
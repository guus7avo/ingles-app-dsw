const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idTemaAula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idTemaAula"
    },
    tema: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tema"
    }
  };
  const options = {
    tableName: "temaaula",
    comment: "",
    indexes: []
  };
  const TemaaulaModel = sequelize.define("temaaulaModel", attributes, options);
  return TemaaulaModel;
};
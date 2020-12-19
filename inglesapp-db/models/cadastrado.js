const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idCadastrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idCadastrado"
    },
    nomeCompleto: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nomeCompleto"
    },
    nomeUsuario: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nomeUsuario"
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefone"
    },
    cargoIdCargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Cargo_idCargo",
      references: {
        key: "idCargo",
        model: "cargoModel"
      }
    }
  };
  const options = {
    tableName: "cadastrado",
    comment: "",
    indexes: [{
      name: "fk_Cadastrado_Cargo_idx",
      unique: false,
      type: "BTREE",
      fields: ["Cargo_idCargo"]
    }]
  };
  const CadastradoModel = sequelize.define("cadastradoModel", attributes, options);
  return CadastradoModel;
};
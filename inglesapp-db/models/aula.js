const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idAula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idAula"
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "titulo"
    },
    conteudo: {
      type: DataTypes.STRING(5000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "conteudo"
    },
    cadastradoIdCadastrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Cadastrado_idCadastrado",
      references: {
        key: "idCadastrado",
        model: "cadastradoModel"
      }
    },
    temaAulaIdTemaAula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TemaAula_idTemaAula",
      references: {
        key: "idTemaAula",
        model: "temaaulaModel"
      }
    }
  };
  const options = {
    tableName: "aula",
    comment: "",
    indexes: [{
      name: "fk_Aula_Cadastrado1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Cadastrado_idCadastrado"]
    }, {
      name: "fk_Aula_TemaAula1_idx",
      unique: false,
      type: "BTREE",
      fields: ["TemaAula_idTemaAula"]
    }]
  };
  const AulaModel = sequelize.define("aulaModel", attributes, options);
  return AulaModel;
};
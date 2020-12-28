<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título da aula:" label-for="titulo">
        <b-form-input
          id="aula-titulo"
          v-model="editAulaData.aula_model.titulo"
          :placeholder="editAulaData.aula_model.titulo"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Conteúdo:" label-for="aula-desc">
        <b-form-textarea
          id="aula-desc"
          v-model="editAulaData.aula_model.conteudo"
          :placeholder="editAulaData.aula_model.conteudo"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <!-- <b-form-group label="Início:" label-for="aula-inicio">
        <b-form-datepicker
          id="aula-inicio"
          v-model="editAulaData.aula_model.inicio"
          value-as-date
          class="mb-2"
        ></b-form-datepicker>
        <b-form-input id="aula-inicio" v-model="aula_model.inicio" placeholder></b-form-input> 
      </b-form-group> -->
      <!-- <b-form-group label="Término:" label-for="aula-termino">
        <b-form-datepicker
          id="aula-termino"
          v-model="editAulaData.aula_model.termino"
          value-as-date
          class="mb-2"
        ></b-form-datepicker>
        <b-form-input id="aula-termino" v-model="aula_model.termino" placeholder></b-form-input>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "EditAula",
  props: {
    aula: {
      idAula: Number,
      titulo: String,
      conteudo: String,
      cadastradoIdCadastrado: Number,
      temaAulaIdTemaAula: String
    },
    modalTarget: String,
    callback: Function
  },
  data() {
    return {
      editAulaData: {
        aula_model: {
          idAula: 0,
          titulo: "Nome da aula",
          conteudo: "Conteúdo da aula",
          cadastradoIdCadastrado: 0,
          temaAulaIdTemaAula: 0
          //endereco: "" Ainda não envia!
        }
      }
    };
  },
  mounted() {
    if (this.aula) {
      this.editAulaData.aula_model.idAula = this.aula.idAula;
      this.editAulaData.aula_model.titulo = this.aula.titulo;
      this.editAulaData.aula_model.conteudo = this.aula.conteudo;
      this.editAulaData.aula_model.cadastradoIdCadastrado = this.cadastradoIdCadastrado;
      this.editAulaData.aula_model.temaAulaIdTemaAula = this.temaAulaIdTemaAula;
    }
    //this.aula_model.endereco = Object.assign({}, this.aula.endereco);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.callback(evt, this.editAulaData);
      this.$emit("exit", true);

      // const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
      // const eventPath = "aulaacademico";

      // alert("Enviando..." + JSON.stringify(this.aula_model));
      // axios
      //   .put(url + eventPath, this.aula_model)
      //   .then(response => {
      //     alert("Aula alterado: " + response.data);
      //     this.$emit("exit", true);
      //   })
      //   .catch(error => {
      //     alert(error);
      //   });
    }
  }
};
</script>

<style>
</style>
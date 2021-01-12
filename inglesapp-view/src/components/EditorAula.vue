<template>
  <div>
      <b-form @submit="onSubmit">
        <b-form-group label="Titulo da aula:" label-for="aula-titulo">
            <b-form-input
            id="aula-titulo"
            v-model="aulaModel.titulo"
            :placeholder="aulaModel.titulo"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Conteúdo:" label-for="aula-conteudo">
            <b-form-textarea
            id="aula-conteudo"
            v-model="aulaModel.conteudo"
            :placeholder="aulaModel.conteudo"
            rows="3"
            max-rows="20"
            ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Enviar</b-button>

      </b-form>
  </div>
</template>

<script>
export default {
    props: {
        aulaEdit: {
            idAula: Number,
            titulo: String, 
            conteudo: String,
            cadastradoIdCadastrado: Number,
            temaAulaIdTemaAula: Number
        },
        callback: Function
    },
    data(){
        return {
            aulaModel: {
                idAula: 0,
                titulo: "Digite o título da aula", 
                conteudo: "Digite o conteúdo da aula",
                cadastradoIdCadastrado: 1,
                temaAulaIdTemaAula: 1
            }
        };
    },
    mounted(){
        if(this.aulaEdit){
            this.aulaModel.idAula = this.aulaEdit.idAula;
            this.aulaModel.titulo = this.aulaEdit.titulo;
            this.aulaModel.conteudo = this.aulaEdit.conteudo;
            // this.aulaModel.cadastradoIdCadastrado = this.aulaEdit.cadastradoIdCadastrado;
            // this.aulaModel.temaAulaIdTemaAula = this.aulaEdit.temaAulaIdTemaAula;
        }
    },
  methods: {
    onSubmit() {
      this.callback({
          id: this.aulaEdit ? this.aulaEdit.idAula: 0,
          data: this.aulaModel,
          });
  }
},
};
</script>

<style>

</style>
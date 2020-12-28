<template>
  <div>
      <b-form @submit="onSubmit">
        <b-form-group label="Titulo do evento:" label-for="aula-titulo">
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

        <b-button type="submit" variant="primary">Alterar</b-button>

      </b-form>
  </div>
</template>

<script>
export default {
    props: {
        aulaEdit: {
            idAula: Number,
            titulo: String, 
            conteudo: String 
        },
        callback: Function
    },
    data(){
        return {
            aulaModel: {
                titulo: "Digite o título da aula", 
                conteudo: "Digite o conteúdo da aula" 
            }
        };
    },
    mounted(){
        if(this.aulaEdit){
            this.aulaModel.titulo = this.aulaEdit.titulo;
            this.aulaModel.conteudo = this.aulaEdit.conteudo;
        }
    },
    methods: {
        onSubmit(){
            this.callback({
                id: this.aulaEdit.idAula, 
                data: this.aulaModel,
                });
        }
    }
};
</script>

<style>

</style>
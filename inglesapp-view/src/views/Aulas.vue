<template>
  <div class="aulas mt-3">
    <h1>Aulas</h1>
    <b-button @click="criarAula()" variant="outline-primary">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>
    <div class="mt-5">
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(editar)="linhaAula">
          <b-button variant="outline-primary" @click="editarAula(linhaAula.item)">Editar</b-button>
        </template>
      </b-table>

    <b-modal @hide="resetaModalData()" :id="modalData.id" :title="modalData.title">
      <EditorAula :aulaEdit="modalData.content" :callback="modalData.callback"></EditorAula>
    </b-modal>

    </div>
  </div>
</template>

<script>
import EditorAula from "../components/EditorAula.vue";

export default {
  name: "Aulas",
  components: {
    EditorAula
  },
  data(){
    return {
      userData:{
        id: "",
        nome: ""
      },
      items: [
        // {titulo: "Aula 1", conteudo: "Primeira aula"}, 
        // {titulo: "Aula 2", conteudo: "Segunda aula"}, 
        // {titulo: "Aula 3", conteudo: "Terceira aula"}, 
        // {titulo: "Aula 4", conteudo: "Quarta aula"}, 
        // {titulo: "Aula 5", conteudo: "Quinta aula"}
      ],
      fields: ["titulo", "conteudo", "editar"],
      modalData: {
        id: "modal-aula",
        content: null,
        title: "",
        callback: null
      }
    };
  },
  mounted() {
    this.getUserData();
    this.$http
    .get("/aula")  
    .then(result =>{
      this.items = result.data;
    })
    .catch(error=>{
      console.log(error)
    })
  },
  methods: {
    getUserData(){
      this.$http.get("/api/user")
      .then(response => {
        this.userData = response.data;
      }).catch(error => {
        console.error("Erro ou falta de permissão de acesso");
        console.log(error);
        this.$router.push("/");
      });
    },
    criarAula() {
      this.modalData.title = "Crie uma nova aula";

      this.modalData.callback = (novaAula)=>{
        this.$http
          .post("/aula", novaAula.data)
          .then((result) => {
            if (result.data.titulo === novaAula.data.titulo){
              console.log("Dado salvo com sucesso.");
              alert("Aula cruada: \n" + result.data);
            }
            
          })
          .catch((error) =>{
            console.log(error);
          });
      };

      this.$root.$emit("bv::show::modal", this.modalData.id);
    }, 

    editarAula(linhaAula) {
      // console.log(linhaAula);
      this.modalData.content = linhaAula;
      this.modalData.title = "Edite a aula \"" + linhaAula.titulo + "\"";

      this.modalData.callback = (editAula)=>{
        this.$http.put("/aula/" + editAula.id, editAula.data)
        .then((result) => {
            if (result.data.titulo === editAula.data.titulo){
              console.log("Aula alterada com sucesso.");
              alert("Aula alterada com sucesso.");
            }
            
          })
          .catch((error) =>{
            console.log(error);
          });
      };

      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    resetaModalData() {
      this.modalData.title = "";
      this.modalData.content = null;
    }

  }
};

</script>

<style>
.aulas h1 {
  display: inline;
}

.aulas button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>

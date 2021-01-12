<template>
  <div class="mt-4 mb-3">
    <img src="../assets/icon.png" v-bind="mainProps" rounded="circle" fluid alt="Responsive image">
    <h1>Welcome back, teacher</h1>
    <div class="col-md-8 mt-4 mb-3 offset-md-2">
      <b-nav-item to="/aulas" type="button" class="btn btn-light btn-lg btn-block">Continuar Aulas</b-nav-item>
      <b-nav-item to="/perfil" type="button" class="btn btn-light btn-lg btn-block">Editar perfil</b-nav-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      userData:{
      id: "",
      nome: ""
      },
      mainProps: { blank: false, blankColor: '#777', width: 250, height: 250, class: 'm1' }
    }
    
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
    }
  },
  mounted() {
    this.getUserData();
  }
}
</script>

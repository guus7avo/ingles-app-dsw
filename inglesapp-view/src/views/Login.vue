<template>
  <div class="page">
    <div class="mt-1 mb-3">

      <img src="../assets/icon.png" v-bind="mainProps" rounded="circle" fluid alt="Responsive image">

      <!-- <h1>Login</h1> -->

      <div class="login">

      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5 mb-3 offset-md-3">
            <b-form @submit="doLogin">
              <b-form-group
                id="user-label"
                label="Email:"
                label-for="user-input"
                label-align="left"
                description="Digite seu email"
              >
                <b-form-input
                  id="user-input"
                  v-model="login.user"
                  type="email"
                  required
                  placeholder="Insira o email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="password-label"
                label="Senha:"
                label-for="password-input"
                label-align="left"
                description="Digite sua senha"
              >
                <b-form-input
                  id="password-input"
                  v-model="login.pwd"
                  type="password"
                  required
                  placeholder="Insira a senha"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit">Entrar</b-button>
            </b-form>
          </div>
        </div>
      </div>

    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        user: "user@email.com",
        senha: "123"
      },
      mainProps: { blank: false, blankColor: '#777', width: 300, height: 300, class: 'm1' }
    };
  },

  methods: {
    doLogin() {
      let dataLogin = {
        user: this.login.user,
        pwd: this.login.senha
      };
      this.$http
        .post("/api/login", dataLogin)
        .then(response => {
          console.log("OK!");
          this.$router.push("/home");
        })
        .catch(errors => {
          console.error("Erro!");
          console.log(errors);
        });
    }
  }
};
</script>

<style>

.login {
  margin: 0px 350px 0px 350px;
  padding: 10px 0px 20px 0px;
  border-radius: 20px;
  background-color: cornflowerblue;
}
</style>

<template>
  <div class="mt-4 mb-3">
    <h1>Login</h1>
    <div class="container">
      <div class="row">

        <div class="col-md-4 mt-5 mb-3 offset-md-4">

          <label for="email">E-mail</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <input class="form-control" id="email" placeholder="marcos.silva@gmail.com" required="required">
          </div>

        </div>

        <div class="col-md-4 mb-3 offset-md-4">

          <label for="senha">Senha</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <input class="form-control" id="senha" placeholder="**********" required="required">
          </div>

        </div>

        <div class="col-md-4 mb-3 offset-md-4">
          <b-nav-item to="/home" type="button" class="btn btn-light">Entrar</b-nav-item>
          <b-nav-item to="" type="button" class="btn btn-light">Ainda não sou cadastrado</b-nav-item>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>

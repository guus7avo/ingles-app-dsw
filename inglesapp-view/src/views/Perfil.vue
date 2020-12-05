<template>
  <div class="mt-4 mb-3">
    <h1>Perfil</h1>
    <div class="container">
      <div class="col-md-8 mb-3 offset-md-2">
        <b-img src="https://voceconstroi.fbitsstatic.net/img/p/perfil-t-eucafloor-tecno-cor-26-10mm-x-50mm-x-1-80m-70896/257584.jpg?w=420&h=420&v=no-change" v-bind="mainProps" rounded="circle" fluid alt="Responsive image"></b-img>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3 offset-md-4">

          <label for="nome">Nome completo</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <input type="text" class="form-control" id="nome" placeholder="Marcos da Silva" required="required">
          </div>

        </div>

        <div class="col-md-4 mb-3 offset-md-4">

          <label for="email">E-mail</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <input class="form-control" id="email" placeholder="marcos.silva@gmail.com" required="required">
          </div>

        </div>

        <div class="col-md-4 mb-3 offset-md-4">

          <label for="telefone">Telefone</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <input class="form-control" id="telefone" placeholder="+55 (11) 98765-4321 " required="required">
          </div>

        </div>

        <div class="col-md-4 mb-3 offset-md-4">
          <input type="button" value="Alterar dados" class="btn btn-primary">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Perfil',
  data () {
    return {
      mainProps: { blank: false, blankColor: '#777', width: 150, height: 150, class: 'm1' }
    }
  }
}
</script>

<style>

</style>

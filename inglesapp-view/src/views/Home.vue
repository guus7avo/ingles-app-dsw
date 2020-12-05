<template>
  <div class="mt-4 mb-3">
    <h1>Welcome back, student</h1>
    <div class="col-md-8 mt-4 mb-3 offset-md-2">
      <b-nav-item to="/aulas" type="button" class="btn btn-light btn-lg btn-block">Continuar Aulas</b-nav-item>
      <b-nav-item to="/perfil" type="button" class="btn btn-light btn-lg btn-block">Editar perfil</b-nav-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

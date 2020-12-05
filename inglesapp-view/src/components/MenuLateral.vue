<template>
  <div>
    <b-button v-b-toggle.inglesapp-menu>Menu</b-button>
    <b-sidebar id="inglesapp-menu" title="Menu" shadow>
      <div class="px-3 py-2">
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/perfil">Perfil</b-nav-item>
        <b-nav-item to="/aulas">Aulas</b-nav-item>
        <b-nav-item to="/">Sair</b-nav-item>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'MenuLateral'
}
</script>

<style>

</style>

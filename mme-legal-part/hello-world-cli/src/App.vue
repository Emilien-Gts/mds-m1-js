<template>
  <div id="app">
    <h1>Le panier de Emilien</h1>
    <h2>Je prépare mon panier pour la semaine</h2>

    <div class="row">
      <CartTable></CartTable>
    </div>

    <hr class="separator">

    <div class="row">
      <!-- <CartForm></CartForm> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    CartTable
  }
}
</script>

<style>
.separator {
  height: 1px;
  border: 1px solid #000;
}
</style>

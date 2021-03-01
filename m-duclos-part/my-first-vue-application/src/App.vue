<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ProfilGithub />
</template>

<script>
import ProfilGithub from "./components/ProfilGithub.vue";

export default {
  name: "App",
  components: {
    ProfilGithub,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

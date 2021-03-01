<template>
  <div class="age_quote">
    <p v-if="age >= 18">Vous êtes majeur !</p>
    <p v-else>Vous êtes mineur !</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    age: Number,
  },
};
</script>

<style scoped>
p {
  text-decoration: underline;
}
</style>

<template>
  <div class="cart">
    <h3>Ajouter un article (Cliquer sur entré pour le valider)</h3>
    <input type="text" v-model="article" v-on:keyup.enter="onEnter" />

    <h3>Liste des articles ajoutés</h3>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        v-on:click="list.splice(index, 1)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      article: "",
      list: [],
    };
  },
  methods: {
    onEnter() {
      this.list.push(this.article);
      this.article = "";
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
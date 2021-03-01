<template>
  <div id="app" @add="addItem">
    <div class="container mt-4">
      <div class="row">
        <CartComponent :datas="items" ref="books"></CartComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BooksComponent from './components/BooksComponent.vue';
import FormComponent from './components/FormComponent.vue';

export default {
  name: "App",
  components: {
    BooksComponent
  },
  data: function () {
    return {
      title: String,
      author: String,
      date: Date,
      link: String,
      items: [
        {
          id: 0,
          title: "My title 0",
          author: "My author 0",
          publicationDate: "19/10/2020",
          urlBiography: "http://perdu.com",
        },
        {
          id: 1,
          title: "My title 1",
          author: "My author 1",
          publicationDate: "20/10/2020",
          urlBiography: "https://google.com",
        },
        {
          id: 2,
          title: "AAA",
          author: "My author 2",
          publicationDate: "21/10/2020",
          urlBiography: "https://youtube.com",
        },
        {
          id: 3,
          title: "My title 3",
          author: "My author 3",
          publicationDate: "22/10/2020",
          urlBiography: "https://batiscript.com",
        },
        {
          id: 4,
          title: "My title 4",
          author: "My author 4",
          publicationDate: "23/10/2020",
          urlBiography: "https://scantrad.net",
        },
      ],
    };
  },
  computed: {
    titleUppercase: function () {
      return this.title.toUpperCase();
    },
  },
  methods: {
    addItem(e) {
      console.log(e);
      this.items.push(e);
      this.$refs.books.sort();
    },
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

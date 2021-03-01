<template>
  <div class="col-md-9">
    <div class="d-flex justify-content-end">
      <button @click="reverseItems" class="btn btn-primary">
        Inverser la liste
      </button>
    </div>
    <ul
      class="d-flex flex-row flex-wrap justify-content-between"
      style="list-style: none !important; padding: 0 !important"
    >
      <li
        v-for="data in datas"
        :key="data.id"
        v-bind:id="data.id"
        class="my-2 ml-3"
      >
        Coucou item
      </li>
    </ul>
  </div>
</template>

<script>
import BookComponent from './BookComponent.vue';

export default {
  name: "CartComponent",
  props: {
    datas: Array,
  },
  methods: {
    reverseItems() {
      const newDatas = Object.freeze(this.datas);
      this.datas = newDatas.slice().reverse();
    },
    sort() {
      return this.datas.sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    },
  },
  created: function () {
    this.sort();
  },
};
</script>
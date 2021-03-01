<template>
  <div class="card" style="width: 15rem">
    <h5 class="card-header">{{ data.title }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ data.publicationDate }}</h5>
      <p class="card-text">{{ data.author }}</p>
      <a :href="data.urlBiography">Cliquez ici</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookComponent",
  props: {
    data: Object,
  },
};
</script>
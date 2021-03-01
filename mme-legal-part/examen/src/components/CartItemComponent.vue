<template>
  <div>
    <th scope="row">{{ data.id }}</th>
    <td>{{ data.category }}</td>
    <td>{{ data.libelle }}</td>
    <td>{{ data.quantity }}</td>
    <td>{{ data.priceOnlyOne }}</td>
  </div>
</template>

<script>
export default {
  name: "CartItemComponent",
  props: {
    data: Object,
  },
};
</script>


<style scoped>
</style>

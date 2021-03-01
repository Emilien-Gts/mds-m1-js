<template>
  <tr>
    <th scope="row">{{ data.category }}</th>
    <td>{{ data.libelle }}</td>
    <td>{{ data.quantity }}</td>
    <td>{{ totalPrice }} €</td>
  </tr>
</template>

<script>
export default {
  name: "CartTableItem",
  props: {
    data: Object,
  },
  computed: {
    totalPrice: function () {
      return (this.data.priceOnlyOne * this.data.quantity).toFixed(2);
    },
  },
};
</script>

<style scoped>
</style>
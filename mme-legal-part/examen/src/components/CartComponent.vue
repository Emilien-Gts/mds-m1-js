<template>
  <div class="center">
    <table class="table">
      <thead>
        <th scope="col">ID</th>
        <th scope="col" >Catégorie</th>
        <th scope="col">Produit</th>
        <th scope="col">Quantité</th>
        <th scope="col">Prix</th>
      </thead>
      <tbody>
        <tr
          v-for="data in datas"
          :key="data.id"
          v-bind:id="data.id"
          class="my-2 ml-3"
        >
          <CartItemComponent :data="data"></CartItemComponent>
        </tr>
      </tbody>
      <tfoot>
        <th>
          Prix total : {{ totalPrice }}
        </th>
      </tfoot>
    </table>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="clearCart">Annuler</button>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemComponent from "./CartItemComponent.vue";

export default {
  name: "CartComponent",
  components: {
    CartItemComponent,
  },
  props: {
    datas: Array,
  },
  computed: {
    totalPrice: function() {
      let price = 0;
      this.datas.forEach(data => {
        price += (data.priceOnlyOne * data.quantity);
      });
      return price;
    }
  },
  methods: {
    clearCart() {
      this.datas = [];
    }
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

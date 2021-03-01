<template>
  <div class="cart-table">
    <table class="table mb-4">
      <thead class="table-primary">
        <tr>
          <th scope="col">Catégorie</th>
          <th scope="col">Produit</th>
          <th scope="col">Quantité</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody v-for="data in this.datas" :key="data.id" v-bind:id="data.id">
        <CartTableItem :data="data" ref="data"></CartTableItem>
      </tbody>
      <tfoot class="bg-primary" v-if="this.datas.length > 0 ? true : false">
        <tr>
          <th scope="col"><span class="text-white">Prix total</span></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">
            <span class="text-white">{{ totalPrice }} €</span>
          </th>
        </tr>
      </tfoot>
    </table>
    <p class="center my-4" v-if="!this.datas.length > 0 ? true : false">
      Il n'y a actuellement aucun article dans votre panier
    </p>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn btn-secondary btn-lg btn-block"
              @click="resetCart"
              v-if="this.datas.length > 0 ? true : false"
            >
              Annuler
            </button>
          </div>
          <div class="col-md-6">
            <button
              type="submit"
              class="btn btn-primary btn-lg btn-block"
              @click="validateCart"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartTableItem from "./CartTableItem.vue";

export default {
  name: "CartTable",
  components: {
    CartTableItem,
  },
  props: {
    datas: Array,
  },
  computed: {
    totalPrice: function () {
      let price = 0;
      this.datas.forEach((data) => {
        price += data.priceOnlyOne * data.quantity;
      });
      return price.toFixed(2);
    }
  },
  methods: {
    resetCart: function () {
      if (confirm("Êtes vous sûr de vouloir vider votre liste ?") == true) {
        this.datas = [];
      }
    },
    validateCart: function () {
      if (this.datas.length > 0 ? true : false) {
        alert("Vous avez validé votre panier");
      } else {
        alert("Votre panier est vide, vous ne pouvez pas le valider");
      }
    },
  },
};
</script>

<style scoped>
</style>
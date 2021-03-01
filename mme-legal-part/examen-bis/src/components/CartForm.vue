<template>
  <form @submit.prevent="addItem()">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="categories">Catégorie</label>
          <select
            class="form-control"
            id="categories"
            v-model="form.category"
            @change="onChange($event)"
          >
            <option
              :value="index"
              v-for="(data, index) in this.datas"
              :key="data.category"
            >
              {{ data.category }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="products">Produit</label>
          <select class="form-control" id="products" v-model="form.libelle">
            <option
              :value="data.libelle"
              v-for="data in this.products"
              :key="data.libelle"
            >
              {{ data.libelle }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label for="quantity">Quantité</label>
        <input
          type="number"
          class="form-control"
          id="quantity"
          min="1"
          max="1000"
          v-model="form.quantity"
        />
      </div>
      <div class="col-md-6 vcenter">
        <div class="row d-flex center">
          <div class="col-md-6">
            <button class="btn btn-secondary btn-lg btn-block" @click="resetForm">
              Réinitialiser
            </button>
          </div>
          <div class="col-md-6">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartForm",
  data: function () {
    return {
      products: this.datas[0].products,
      form: {
        id: null,
        category: "",
        libelle: "",
        quantity: 0,
        priceOnlyOne: 0,
      },
    };
  },
  props: {
    datas: Array,
  },
  methods: {
    onChange(event) {
      let newProducts = [];
      this.datas[event.target.value].products.forEach((product) => {
        newProducts.push(product);
      });
      this.products = newProducts;
    },
    addItem() {
      const choosenCategory = this.datas[this.form.category].category;
      const choosenProduct = this.form.libelle;
      const choosenQuantity = this.form.quantity;
      let choosenProductPrice = 0;

      const productsByChoosenCategory = this.datas[this.form.category].products;
      productsByChoosenCategory.forEach((data) => {
        if (data.libelle === choosenProduct) {
          choosenProductPrice = data.price;
        }
      });

      const item = {
        id: null,
        category: choosenCategory,
        libelle: choosenProduct,
        quantity: choosenQuantity,
        priceOnlyOne: choosenProductPrice,
      };

      this.$emit("add-item", item);
      this.form = {};
    },
    resetForm: function() {
      this.form = {};
    }
  },
};
</script>

<style scoped>
.row.center {
  position: absolute;
  width: 100%;
  top: 32%;
}
</style>
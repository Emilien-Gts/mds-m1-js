<template>
  <div>
    <h4>Ajouter un produit</h4>
    <form @submit.prevent="onSubmit" class="d-flex flex-column">
      <div class="row">
        <div class="form-group">
          <select name="" id="">
            <option
              v-for="product in products"
              :key="product.category"
              :value="product.category"
            >
              {{ product.category }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <select
            name=""
            id=""
            v-for="data in products"
            :key="data.category"
            :value="data.category"
          >
            <option
              v-for="product in data"
              :key="product.libelle"
              :value="product.libelle"
            >
              {{ product.libelle }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Ajouter à la liste
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data: function () {
    return {
      categories: Array,
    };
  },
  props: {
    products: Array,
  },
};
</script>

<style scoped>
</style>

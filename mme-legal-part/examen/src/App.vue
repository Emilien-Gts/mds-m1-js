<template>
  <div id="app">
    <div class="center">
      <h1>Mon panier</h1>
      <h2>Je prépare mon panier pour la semaine</h2>
    </div>

    <div class="row center">
      <CartComponent :datas="basket" ref="datas"></CartComponent>
    </div>

    <hr>

    <div class="row center">
      <FormComponent :products="products"></FormComponent>
    </div>
  </div>
</template>

<script>
import CartComponent from "./components/CartComponent.vue";
import FormComponent from "./components/FormComponent.vue";

export default {
  name: "App",
  components: {
    CartComponent, FormComponent
  },
  data: function () {
    return {
      basket: [
        {
          id: 1,
          category: "Epicerie salée",
          libelle: "Moutarde",
          quantity: 4,
          priceOnlyOne: 1.4,
        },
        {
          id: 2,
          category: "Fruits et Légumes",
          libelle: "Bananes",
          quantity: 1,
          priceOnlyOne: 1.99,
        },
        {
          id: 3,
          category: "Produits laitiers",
          libelle: "Yaourts au citron",
          quantity: 6,
          priceOnlyOne: 1.14,
        },
      ],
      products: [
        {
          category: "Epicerie salée",
          products: [
            {
              libelle: "Moutarde",
              price: 2.45,
            },
            {
              libelle: "Ketchup",
              price: 4.87,
            },
            {
              libelle: "Herbes de Provence",
              price: 1.78,
            },
            {
              libelle: "Mayonnaise",
              price: 2.98,
            },
            {
              libelle: "Curry",
              price: 5.76,
            },
            {
              libelle: "Huile d'olive",
              price: 4.23,
            },
          ],
        },
        {
          category: "Epicerie sucrée",
          products: [
            {
              libelle: "Biscuits au chocolat",
              price: 2.45,
            },
            {
              libelle: "Céréales",
              price: 4.87,
            },
            {
              libelle: "Bonbons",
              price: 1.78,
            },
            {
              libelle: "Chocolats",
              price: 2.98,
            },
            {
              libelle: "Confiture",
              price: 5.76,
            },
            {
              libelle: "Pâte à tartiner",
              price: 4.23,
            },
          ],
        },
        {
          category: "Produits laitiers",
          products: [
            {
              libelle: "Fromage de chèvre",
              price: 2.45,
            },
            {
              libelle: "Yaourts au citron",
              price: 4.87,
            },
            {
              libelle: "Emmental",
              price: 1.78,
            },
            {
              libelle: "Comté",
              price: 2.98,
            },
            {
              libelle: "Lait écrémé",
              price: 5.76,
            },
            {
              libelle: "Oeufs",
              price: 4.23,
            },
          ],
        },
        {
          category: "Fruits et Légumes",
          products: [
            {
              libelle: "Bananes",
              price: 2.45,
            },
            {
              libelle: "Oranges",
              price: 4.87,
            },
            {
              libelle: "Concombre",
              price: 1.78,
            },
            {
              libelle: "Tomates",
              price: 2.98,
            },
            {
              libelle: "Pommes de terre",
              price: 5.76,
            },
            {
              libelle: "Framboises",
              price: 4.23,
            },
          ],
        },
        {
          category: "Produits ménagers",
          products: [
            {
              libelle: "Eponge",
              price: 2.45,
            },
            {
              libelle: "Papier toilette",
              price: 4.87,
            },
            {
              libelle: "Mouchoirs",
              price: 1.78,
            },
            {
              libelle: "Liquide vaisselle",
              price: 2.98,
            },
            {
              libelle: "Lessive",
              price: 5.76,
            },
            {
              libelle: "Papier aluminium",
              price: 4.23,
            },
          ],
        },
        {
          category: "Boucherie / Charcuterie",
          products: [
            {
              libelle: "Saucisson",
              price: 2.45,
            },
            {
              libelle: "Tranches de jambon",
              price: 4.87,
            },
            {
              libelle: "Poulet rôti",
              price: 1.78,
            },
            {
              libelle: "Côtes de porc",
              price: 2.98,
            },
            {
              libelle: "Steak haché",
              price: 5.76,
            },
            {
              libelle: "Escqlopes de dinde",
              price: 4.23,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.center {
  text-align: center;
}
.row.center {
  display: flex;
  justify-content: center;
}
</style>

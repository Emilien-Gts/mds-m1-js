<template>
  <div class="col-md-3">
    <form @submit.prevent="onSubmit" class="d-flex flex-column">
      <h4>Ajouter une carte</h4>
      <div class="form-group">
        <input
          type="text"
          ref="title"
          class="form-control"
          placeholder="Titre"
          v-model="title"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          ref="author"
          class="form-control"
          placeholder="Auteur"
          v-model="author"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="date"
          ref="date"
          class="form-control"
          placeholder="Date"
          id="date"
          v-model="date"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          ref="link"
          class="form-control"
          placeholder="Lien"
          v-model="link"
          required
        />
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
      title: "",
      author: "",
      date: "",
      link: "#",
    };
  },
  methods: {
    onSubmit: function () {
      const item = {
        title: this.title,
        author: this.author,
        publicationDate: this.date,
        link: this.link,
      };

      this.$emit("add", item);
    },
  },
};
</script>
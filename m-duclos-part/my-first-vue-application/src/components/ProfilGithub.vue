<template>
  <div class="github_profil">
    <h1>{{ name }}</h1>
    <img :src="avatar_url" alt="" />
    <ul>
      <li>Location : {{ location }}</li>
      <li>Nombre de repos. public : {{ public_repos }}</li>
      <li>Etc etc...</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GithubProfil",
  data: function () {
    return {
      name: String,
      avatar_url: String,
      location: String,
      public_repos: Number,
    };
  },
  mounted() {
    axios.get("https://api.github.com/users/Emilien-Gts").then(({ data }) => {
      console.log(data);
      this.name = data.name;
      this.avatar_url = data.avatar_url;
      this.location = data.location;
      this.public_repos = data.public_repos;
    });
  },
};
</script>

<style scoped>
p {
  text-decoration: underline;
}

ul {
  list-style: none;
  padding: 0;
}

img {
  width: 150px;
}
</style>

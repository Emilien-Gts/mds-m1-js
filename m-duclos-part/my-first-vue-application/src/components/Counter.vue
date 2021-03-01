<template>
  <div class="counter">
    <p>{{ value }}</p>
    <button @click="value++">+</button>
    <button @click="value--">-</button>

    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      value: 0,
    };
  },
};
</script>
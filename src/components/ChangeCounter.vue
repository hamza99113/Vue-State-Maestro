<template>
  <button @click="addOne">Add 4</button>
  <button @click="increase({ value: 100 })">Add 200</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //     //this.$store.commit('addOne');
    //   this.$store.dispatch('addOne');
    // },

    ...mapActions('numbers', ['addOne', 'increase']),
  },
};
</script>

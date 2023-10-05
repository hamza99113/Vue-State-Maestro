<template>
  <div>
    <button @click="addOne">Add 4</button>
    <button @click="increase({value: 100})">Add 100</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //     //this.$store.commit('addOne');
    //   this.$store.dispatch('addOne');
    // },

    ...mapActions(['addOne', 'increase']),
  },
};
</script>

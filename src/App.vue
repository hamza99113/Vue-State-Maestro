<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <TheCounter />
      <FavouriteValue />
      <button @click="addOne">Add 20</button>
      <ChangeCounter />
    </base-container>
    <base-container title="Auth">
      <UserAuth />
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter, 
    FavouriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },

  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});

      //this.$store.commit

      //dispatch for using actions in $store
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

export default {
  addOne(context) {
    setTimeout(function () {
      context.commit('addOne');
    }, 2000);
  },
  increase(context, payload) {
    setTimeout(function () {
      context.commit('increase', payload);
    }, 2000);
  },
};
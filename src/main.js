import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('asSci', function (value) {
  if (!value) return ''
  if (value >= 1000000) {
    return value.toExponential(2)
  } else {
    return value
  }
})

Vue.filter('asPct', function (value) {
  if (!value) return ''
  return (Math.floor(value * 10000) / 100) + '%'
})

new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    store.commit('setupBITable')
  },

}).$mount('#app')

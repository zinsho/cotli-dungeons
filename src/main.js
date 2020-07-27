import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('asSci', function (value) {
  if (!value) return ''
  if (Math.log10(value.toString()) >= 6) {
    let num = value.toString(),
        pow = Math.log10(num),
        first = num.substring(0,1),
        dec = num.substring(1,3)
    return first + "." + dec + "e+" + Math.floor(pow)
  }
  if (value >= 1000000) {
    return value.toExponential(2)
  }
  return value

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

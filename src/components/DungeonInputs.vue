<template>
  <div class="DungeonInputs">
    <label for="dpsCap">DPS Cap Exponent (max DPS): </label>
    <input v-model.number="dpsCap" type="number" id="dpsCap"><br />
    <label for="totalIdols">Total Idols ({{ totalIdols | asSci }}): </label>
    <input v-model.number="totalIdols" type="number"> <br />
    <label for="sprintCap">Sprint Cap: </label>
    <input
      v-model.number="sprintCap"
      id="sprintCap"
      type="number"
      min="0"
      max="3500"
      step="25"
      ><br />
    <label for="t2s">T2 11ths completed: </label>
    <input
      v-model.number="t2s"
      id="t2s"
      type="number"
      min="0"
      max="9"
      ><br />
  </div>
</template>

<script>
export default {
  name: 'DungeonInputs',
  computed: {
    dpsCap: {
      get: function () {
        return this.$store.getters.getCurrent('dpsCap')
      },
      set: function (update) {
        this.$store.commit('updateCurrent',{key: 'dpsCap', value: update})
      }
    },
    totalIdols: {
      get: function () {
        return this.$store.getters.getCurrent('TotalIdols')
      },
      set: function (update) {
        this.$store.commit('updateCurrent',{key: 'TotalIdols', value: update})
      }
    },
    sprintCap: {
      get: function () {
        return this.$store.getters.getCurrent('SprintCap')
      },
      set: function (update) {
        this.$store.commit('updateCurrent',{key: 'SprintCap', value: update})
      }
    },
    t2s: {
      get: function () {
        return this.$store.getters.getCurrent('t2s')
      },
      set: function (update) {
        this.$store.commit('updateCurrent',{key: 't2s', value: update})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

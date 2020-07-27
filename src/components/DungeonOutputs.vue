<template>
  <div class="DungeonOutputs">
  <h3>General</h3>
  <p>Level Cap: {{ levelCap }}</p>
  <p>Sprint FP Bonus increase: {{ sprintIncrease | asPct }}</p>
  <!-- <div v-if="current.t2s != 0"> -->
    <h3>Free Play Gains</h3>
    <p>Average BI Gains + Post-Ad Bonus: {{ avgBI | asSci}}</p>
    <p>BI Gains from FP Increase from Sprint: {{ sprintBIIncrease | asSci }}</p>
  <!-- </div> -->
  <h3>Dungeon Gains</h3>
  <p>Sprint Dungeon Idol %: {{ sprintDungeonPct | asPct }}</p>
  <p>Sprint Dungeon Idol Gain: {{ sprintDungeonIdolGain | asSci }}</p>
  <p>Deep Dungeon Cap: {{ deepDungeonCap }}</p>
  <p>Deep Dungeon Idol %: {{ deepDungeonPct | asPct }}</p>
  <p>Deep Dungeon Idol Gain: {{ deepDungeonIdolGain | asSci }}</p>
  <h3>Comparison</h3>
  <label for="detailed">Show all comparisons</label>
  <input type="checkbox" id="detailed" v-model="showDetailed">
  <p v-if="showDetailed || sprintDungeonIdolGain < sprintBIIncrease" >Total Idols for dungeon to match FP Bonus: {{ matchFP | asSci }}</p>
  <!-- <div -->
  <!--   v-if="current.t2s != 0 && (showDetailed || sprintDungeonIdolGain > sprintBIIncrease)" -->
  <!--   > -->
    <p>Average BI to match Dungeon Sprint: {{ matchDungeon | asSci }}</p>
    <p>DPS Cap to match Dungeon Sprint: {{ newDPSCap }}</p>
  <!-- </div> -->
  </div>
</template>

<script>
/* global BigInt */
import { mapState } from 'vuex'

export default {
  name: 'DungeonOutputs',
  methods: {
    biLevel (l) {
      return this.$store.getters.BIbyLevel(l)
    }
  },
  data: function () {
    return {
      showDetailed: true,
    }
  },
  computed: {
    ...mapState({
      current: state => state.current
    }),
    ...mapState({
      constants: state => state.constants
    }),
    capGrowth: function () {
      return this.constants.fpMax / this.constants.dpsCap
    },
    levelCap: function () {
      return Math.min(this.constants.fpMax, Math.floor(this.current.dpsCap * this.capGrowth))
    },
    sprintIncrease: function () {
      return this.current.SprintCap / this.constants.fpSprintLevels * this.constants.fpStarBonus
    },
    avgBI: function () {
      if (this.current.t2s === 0) { return "Bonus Idols not unlocked" }
      let TotalAvg = this.$store.getters.BIatLevelCap(this.levelCap).TotalBIAvg,
          WithPostAd = TotalAvg * BigInt(this.constants.postAdBonus * 100) / 100n,
          WithT2s = WithPostAd * BigInt(1+((this.current.t2s -1) * 0.25))
      return WithT2s
    },
    sprintBIIncrease: function () {
      if (this.current.t2s === 0) { return "Bonus Idols not unlocked" }
      return (this.avgBI * BigInt(Math.floor(this.sprintIncrease * 100)) / 100n)
    },
    sprintDungeonPct: function () {
      return this.$store.getters.dungeonPct(this.current.SprintCap)
    },
    sprintDungeonIdolGain: function () {
      return this.current.TotalIdols * this.sprintDungeonPct

    },
    deepDungeonCap: function () {
      return Math.floor(this.current.dpsCap * this.capGrowth)
    },
    deepDungeonPct: function () {
      return this.$store.getters.dungeonPct(this.levelCap)
    },
    deepDungeonIdolGain: function () {
      return this.current.TotalIdols * this.deepDungeonPct
    },
    matchFP: function () {
      if (this.current.t2s === 0) { return "Bonus Idols not unlocked" }
      return this.sprintBIIncrease / BigInt(Math.floor(this.sprintDungeonPct * 10000)) / 10000n
    },
    matchDungeon: function () {
      if (this.current.t2s === 0) { return "Bonus Idols not unlocked" }
      return this.sprintDungeonIdolGain / this.constants.postAdBonus / this.sprintIncrease
    },
    newDPSCap: function () {
      if (this.current.t2s === 0) { return "Bonus Idols not unlocked" }
      if (this.current.dpsCap > this.constants.dpsCap) {
        return "Impossible"
      } else {
        let newCap = this.$store.getters.BIatAvgDrop(this.matchDungeon).DPSCap
        console.log(newCap)
        if (newCap == undefined) {
          return "Current DPS cap of "+this.constants.dpsCap+" cannot match Dungeons"
        }
        return newCap - (newCap % 10) + 10
      }
    },
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

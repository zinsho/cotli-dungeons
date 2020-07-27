/* global BigInt */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['current']
    })
  ],
  state: {
    constants: {
      dpsCap: 1100,
      fpMax: 5685,
      fpStarBonus: 0.02,
      postAdBonus: 1.25,
      fpSprintLevels: 250,
      dungeonSprintLevels: 500,
      dungeonPct: 0.0015,
      switchToSci: Math.pow(10,6)
    },
    BITable: [],
    current: {
      dpsCap: 308,
      TotalIdols: 0,
      SprintCap: 0,
      t2s: 9
    }
  },
  getters: {
    BIbyLevel: (state) => (level) => {
      return state.BITable.find(
        bi => bi.Level == level
      )
    },
    BIatLevelCap: (state) => (cap) => {
      return state.BITable.filter(
        bi => bi.Level <= cap
      ).pop()
    },
    BIatAvgDrop: (state) => (biDrop) => {
      let BigBIDrop = BigInt(Math.floor(biDrop)),
          t2sEffect = BigBIDrop * BigInt(1 + ((state.current.t2s -1) * 25 / 100)),
          newCap = state.BITable.find(
            bi => bi.TotalBIAvg > t2sEffect
          )
      return newCap != undefined ? newCap : "Cannot match with current DPS Cap"
    },
    getCurrent: (state) => (current) => {
      return state.current[current]
    },
    dungeonPct: (state) => (level) => {
      return Math.floor(level / state.constants.dungeonSprintLevels) * state.constants.dungeonPct
    }
  },
  mutations: {
    setupBITable (state) {
      let table = [],
          r = 0n;
      for (var level=100; level <= state.constants.fpMax; level = level + 5) {
        let biLevel = level - 95,
            cap = level / (state.constants.fpMax / state.constants.dpsCap),
            biGain = BigInt(Math.floor(10 * Math.pow(1.01,0.4 * biLevel))),
            running = r + biGain
        r = running
        table.push({
          Level: level,
          DPSCap: cap,
          BIGain: biGain,
          TotalBIMax: running,
          TotalBIAvg: running * 4n / 10n
        })
      }
      state.BITable = table
    },
    updateCurrent (state, payload) {
      state.current[payload.key] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})

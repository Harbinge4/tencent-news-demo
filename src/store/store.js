import Vue from 'vue'
import vuex from 'vuex'
import states from './states'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

Vue.use(vuex)

export default {
  states,
  actions,
  mutations,
  getters
}

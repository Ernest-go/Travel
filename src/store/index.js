import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
	state,
	// actions: {
	// 	changeCilck(ctx,city) {
	// 		ctx.commit('changeCilck',city)
	// 	}
	// },
	mutations
})
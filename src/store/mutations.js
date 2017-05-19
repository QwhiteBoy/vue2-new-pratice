import {
	GET_VUEXLIST,
	CLEAR_DATA,
	INCREASE_NUM,
	DECREASE_NUM
} from './mutation-types.js'

export default {
	[GET_VUEXLIST](state, payload) {
		const list = state.vuexList.concat(payload);
		state.vuexList = list;
	},
	[CLEAR_DATA](state, payload) {
		state.vuexList = []
	},
	[INCREASE_NUM](state, payload) {
		state.count = state.count + state.num;
	},
	[DECREASE_NUM](state, payload) {
		state.count--
	}	
}

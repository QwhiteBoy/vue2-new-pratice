import {
	getVuex
} from '../service/getData'
import {
	GET_VUEXLIST
} from './mutation-types.js'

export default {

	async getVuexList({
		commit,
		state
	}) {
		let res = await getVuex();
		commit(GET_VUEXLIST, res)
	}
}
import fetch from '../config/fetch'

import * as user from './tempdata/userList'
import * as vuexList from './tempdata/vuexList'
import * as views from './tempdata/views'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

/**
 * 获取定位城市
 */
const cityGuess = () => setpromise(views.guesscity);

/**
 * 获取列表
 */

const userList = () => setpromise(user.userList)

/**
 * vuex
 */
const getVuex = () => setpromise(vuexList.vuexList)

// var sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);

export {
	cityGuess,
	addShop,
	searchplace,
	getCategory,
	addCategory,
	addFood,
	userList,
	getVuex
}
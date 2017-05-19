import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');

const addShop = r => require.ensure([], () => r(require('@/page/fortify/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/fortify/addGoods')), 'addGoods');

const userList = r => require.ensure([], () => r(require('@/page/basic/userList')), 'userList');
const adminList = r => require.ensure([], () => r(require('@/page/basic/adminList')), 'adminList');

const visitor = r => require.ensure([], () => r(require('@/page/charts/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/charts/newMember')), 'newMember');

export default new Router({
	routes: [
		// 登录页面
		{
			path: '/',
			component: login
		},
		// 管理页面
		{
			path: '/manage',
			component: manage,
			name: '',
			children: [{
				path: '',
				component: home,
				meta: [],
			},{
				path: '/addShop',
				component: addShop,
				meta: ['添加数据', '添加商铺'],
			},{
				path: '/addGoods',
				component: addGoods,
				meta: ['添加数据', '添加商品'],
			},{
				path: '/userList',
				component: userList,
				meta: ['数据管理', '用户列表'],
			},{
				path: '/adminList',
				component: adminList,
				meta: ['数据管理', '管理员列表'],
			},{
				path: '/visitor',
				component: visitor,
				meta: ['图表', '访问数据'],
			},{
				path: '/newMember',
				component: newMember,
				meta: ['图表', '用户数据'],
			}]
		}
	]
})

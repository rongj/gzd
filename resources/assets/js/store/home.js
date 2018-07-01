import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from '../api/admin'

const state = {
	user: {
		id: null,
		username: '',
	},
	userList: {
		list: [],
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
	},
	userinfo: {},
	articleList: {
		list: [],
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
	},
	articleDetail: {
		id: null,
		title: '',
		content: '',
		category_id: null,
		tags: [],
		cover: ''
	},
	categoryList: [],
	tagList: [],
}

const getters = {
}

const actions = {
	// 登录
	login({ commit }, data) {
		return api.login(data).then(res => {
			return res.data
		})
	},

	// 注册添加用户
	register({ commit }, data) {
		return api.register(data)
	},

	// 登出
	logout({ commit }) {
		return api.logout().then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'user',
					data: {}
				})
			}
			return res.data
		})
	},

	// 检查是否登录
	checkLogin({ commit }) {
		return api.checkLogin().then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'user',
					data: res.data.data
				})
			} else {
				return res.data
			}
		})
	},

	// 获取用户列表
	getUserList({ commit }) {
		let { pageSize, currentPage } = state.userList;
		api.getUserList({
			pageSize: pageSize,
			pageNum: currentPage
		}).then(res => {
			if(res.data.code === 200) {
				let d = res.data.data;
				if(d && d.dataList) {
					commit({
						type: 'merge',
						key: 'userList',
						data: {
							list: d.dataList,
							totalCount: d.pageInfo.totalCount
						}
					})
				}
			}
		})
	},

	// 用户详情
	getUserDetail({ commit }, data) {
		api.getUserDetail({
			id: data.id
		}).then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'userinfo',
					data: res.data.data
				})
			}
		})
	},

	// 获取文章列表
	getArticleList({ commit }) {
		let { pageSize, currentPage } = state.articleList;
		api.getArticleList({
			pageSize: pageSize,
			pageNum: currentPage
		}).then(res => {
			if(res.data.code === 200) {
				let d = res.data.data;
				if(d && d.dataList) {
					commit({
						type: 'merge',
						key: 'articleList',
						data: {
							list: d.dataList,
							totalCount: d.pageInfo.totalCount
						}
					})
				}
			}
		})
	},

	// 文章详情
	getArticleDetail({ commit }, data) {
		api.showArticle({
			id: data.id
		}).then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'articleDetail',
					data: {
						...res.data.data,
						tags: res.data.data.tags.map(l => l.tag_id)
					}
				})
			}
		})
	},

	// 修改文章
	updateArticle({ commit }, data) {
		return api.updateArticle(data).then(res => {
			return res.data
		})
	},

	// 添加文章
	createArticle({ commit }, data) {
		return api.createArticle(data).then(res => {
			return res.data
		})
	},

	// 删除文章
	deleteArticle({ commit }, data) {
		return api.deleteArticle(data).then(res => {
			return res.data
		})
	},

	// 所有类别
	getAllCategory({ commit }) {
		return api.getAllCategory().then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'categoryList',
					data: res.data.data
				})
			}
		})
	},

	// 所有标签
	getAllTag({ commit }) {
		return api.getAllTag().then(res => {
			if(res.data.code === 200) {
				commit({
					type: 'save',
					key: 'tagList',
					data: res.data.data
				})
			}
		})
	},
}


const mutations = {
	// 保存替换旧的state
	save(state, payload) {
		state[payload.key] = payload.data
	},

	// 与旧state合并
	merge(state, payload) {
		state[payload.key] = { ...state[payload.key], ...payload.data }
	},

}

export default new Vuex.Store({
	// strict: true,
    state,
    getters,
    actions,
    mutations
})
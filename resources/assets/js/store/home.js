import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from '../api/home'

const state = {
	articleList: {
		list: [],
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
		loading: false,
		type: '',
		name: '',
	},
	articleDetail: {},
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

	
	// 获取文章列表
	getArticleList({ commit }, data) {
		let { pageSize, currentPage, loading } = state.articleList;
		commit({
			type: 'merge',
			key: 'articleList',
			data: {
				loading: true,
				type: data.type,
				name: data.name
			}
		});
		const pageParams = {
			pageSize: pageSize,
			pageNum: currentPage,
		};
		let params = data ? { ...pageParams, query: data.type, queryid: data.id}  : pageParams;

		api.getArticleList(params).then(res => {
			if(res.data.code === 200) {
				let d = res.data.data;
				if(d && d.dataList) {
					commit({
						type: 'merge',
						key: 'articleList',
						data: {
							list: d.dataList,
							totalCount: d.pageInfo.totalCount,
							loading: false
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
					data: res.data.data,
				})
			}
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
"use strict";

import '../bootstrap.js'

axios.defaults.baseURL = 'http://localhost:8089/api/'

const api = {
	// 登录
	login: data => {
		return axios({
		    url: `passport/login`,
		    method: 'post',
            params: data
		})
	},

    // 登出
    logout: () => {
        return axios({
            url: `passport/logout`,
            method: 'get'
        })
    },

    // 注册
    register: data => {
        return axios({
            url: `passport/register`,
            method: 'post',
            params: data
        })
    },

    // 检查用户是否登录
    checkLogin: () => {
        return axios({
            url: `passport/checkLogin`,
            method: 'get',
            withCredentials: true
        })
    },

    // 获取用户列表
    getUserList: data => {
        return axios({
            url: `user/list`,
            method: 'get',
            params: data
        })
    },

    // 获取用户信息
    getUserDetail: data => {
        return axios({
            url: `user/show`,
            method: 'get',
            params: data
        })
    },

    // 修改用户信息
    updateUser: data => {
        return axios({
            url: `user/update/${data.id}`,
            method: 'post',
            params: data
        })
    },

    // 删除用户
    destoryUser: data => {
        return axios({
            url: `user/update/${data.id}`,
            method: 'post'
        })
    },

    // 获取所有类别
    getAllCategory: () => {
        return axios({
            url: `category/all`,
            method: 'get',
        })
    },

	// 添加类别
    addCategory: data => {
        return axios({
            url: `category/create`,
            method: 'post',
            params: data
        })
    },

    // 修改类别
    updateCategory: data => {
        return axios({
            url: `category/update/${data.id}`,
            method: 'post',
            params: data
        })
    },

    // 删除类别
    deleteCategory: data => {
        return axios({
            url: `category/destroy/${data.id}`,
            method: 'post',
        })
    },

    // 获取所有板块
    getAllPlate: () => {
        return axios({
            url: `plate/all`,
            method: 'get',
        })
    },

    // 添加板块
    addPlate: data => {
        return axios({
            url: `plate/add`,
            method: 'post',
            params: data
        })
    },

    // 修改板块
    updatePlate: data => {
        return axios({
            url: `plate/update`,
            method: 'post',
            params: data
        })
    },

    // 删除板块
    deletePlate: data => {
        return axios({
            url: `plate/delete/${data.id}`,
            method: 'post',
        })
    },

    // 获取所有标签
    getAllTag: () => {
        return axios({
            url: `tag/all`,
            method: 'get',
        })
    },

    // 添加标签
    createTag: data => {
        return axios({
            url: `tag/create`,
            method: 'post',
            params: data
        })
    },

    // 修改标签
    updateTag: data => {
        return axios({
            url: `tag/update/${data.id}`,
            method: 'post',
            params: data
        })
    },

    // 删除标签
    destroyTag: data => {
        return axios({
            url: `tag/destroy/${data.id}`,
            method: 'post',
        })
    },

    // 获取文章列表
    getArticleList: data => {
        return axios({
            url: `post/list`,
            method: 'get',
            params: data
        })
    },

    // 添加文章
	createArticle: data => {
		return axios({
			url: `post/create`,
			method: 'post',
			params: data
		})
	},

	// 删除文章
	deleteArticle: data => {
		return axios({
			url: `post/destroy/${data.id}`,
			method: 'post'
		})
	},

	// 更新文章
	updateArticle: data => {
		return axios({
			url: `post/update/${data.id}`,
			method: 'post',
			params: data
		})
	},

	// 查看文章详情
	showArticle: data => {
		return axios({
			url: `post/show/${data.id}`,
			method: 'get',
			params: data
		})
	},

}

export default api;
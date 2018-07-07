"use strict";

import '../bootstrap.js'

axios.defaults.baseURL = '/api/'

const api = {
	// 登录
	login: data => axios.post(`passport/login`, data),

    // 登出
    logout: () => axios.get(`passport/logout`),

    // 注册
    register: data => axios.post(`passport/register`, data),

    // 检查用户是否登录
    checkLogin: () => axios.get(`passport/checkLogin`, { withCredentials: true }),

    // 获取用户列表
    getUserList: data => axios.get(`user/list`, { params: data }),

    // 获取用户信息
    getUserDetail: data => axios.get(`user/show`, { params: data }),

    // 修改用户信息
    updateUser: data => axios.post(`user/update/${data.id}`, data),

    // 删除用户
    destoryUser: data => axios.post(`user/update/${data.id}`),

    // 获取所有类别
    getAllCategory: () => axios.get(`category/list`),

	// 添加类别
    addCategory: data => axios.post(`category/create`, data),

    // 修改类别
    updateCategory: data => axios.post(`category/update/${data.id}`, data),

    // 删除类别
    deleteCategory: data => axios.post(`category/destroy/${data.id}`),
 
    // 获取标签
    getAllTag: data => axios.get(`tag/list`, { params: data }),

    // 添加标签
    createTag: data => axios.post(`tag/create`, data),

    // 修改标签
    updateTag: data => axios.post(`tag/update/${data.id}`, data),

    // 删除标签
    destroyTag: data => axios.post(`tag/destroy/${data.id}`),

    // 获取文章列表
    getArticleList: data => axios.get(`post/list`, { params: data }),

    // 添加文章
	createArticle: data => axios.post(`post/create`, data),

	// 删除文章
	deleteArticle: data => axios.post(`post/destroy/${data.id}`),

	// 更新文章
	updateArticle: data => axios.post(`post/update/${data.id}`, data),

	// 查看文章详情
	showArticle: data => axios.get(`post/show/${data.id}`),

    // 图片上传
    imgUpload: data => axios.get(`post/upload/file`, { params: data })
}

export default api;
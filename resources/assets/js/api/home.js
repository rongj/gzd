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

    // 获取所有类别
    getAllCategory: () => axios.get(`category/all`),
 
    // 获取标签
    getAllTag: data => axios.get(`tag/list`, { params: data }),

    // 获取文章列表
    getArticleList: data => axios.get(`post/list`, { params: data }),

    // 查看文章详情
    showArticle: data => axios.get(`post/show/${data.id}`),
    
}

export default api;
"use strict";

import '../bootstrap.js'

axios.defaults.baseURL = 'http://localhost:8000/api/'

const api = {
	// 获取所有版块
	getAllPlate: () => {
		return axios({
		    url: 'category/all',
		    method: 'get',
		})
	},

	// 添加版块
    addPlate: data => {
        return axios({
            url: 'category/add',
            method: 'post',
            params: data
        })
    }

}

export default api;
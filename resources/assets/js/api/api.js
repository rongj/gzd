"use strict";

import '../bootstrap.js'

axios.baseURL = 'http://localhost:8000/api/category/add'

const api = {
    addPlate: data => {
        return axios({
            url: 'http://localhost:8000/api/category/add',
            method: 'post',
            params: data
        })
    }

}

export default api;
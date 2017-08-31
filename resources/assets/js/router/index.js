import Vue from 'vue'
import Router from 'vue-router'
import layout from '../pages/layout.vue'
import index from '../pages/index.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: layout,
			name: '',
			children: [
				{
					path: '',
					component: index
				},
				// {
				// 	path: '/hot',
				// 	component: hotRecend
				// },
			]
		}
	]
})

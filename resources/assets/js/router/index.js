import Vue from 'vue'
import Router from 'vue-router'
import layout from '../pages/layout.vue'
import index from '../pages/index.vue'
import list from '../pages/list.vue'
import notFound from '../pages/notFound.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/admin',
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
				{
					path: 'list',
					component: list
				},
				{
					path: '*',
					component: notFound
				},
			]
		}
	]
})

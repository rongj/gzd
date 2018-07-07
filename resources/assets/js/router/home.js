import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: '/',
	routes: [
		{
			path: '',
			component: resolve => require(['../frontend/list.vue'], resolve),
			name: 'list',
		},
		{
			path: '/article/:id',
			component: resolve => require(['../frontend/article.vue'], resolve),
			name: 'article',
		},
		{
			path: '/categories',
			component: resolve => require(['../frontend/categories.vue'], resolve),
			name: 'categories',
		},
		{
			path: '/tags',
			component: resolve => require(['../frontend/tags.vue'], resolve),
			name: 'tags',
		},
		{
			path: '/demo',
			component: resolve => require(['../frontend/demo.vue'], resolve),
			name: 'demo',
		},
		{
			path: '/project',
			component: resolve => require(['../frontend/project.vue'], resolve),
			name: 'project',
		},
		{
			path: '/tool',
			component: resolve => require(['../frontend/tool.vue'], resolve),
			name: 'tool',
		},
	]
})

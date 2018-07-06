import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: '/',
	routes: [
		{
			path: '/',
			component: resolve => require(['../frontend/home.vue'], resolve),
			name: 'home',
		},
		{
			path: '/category/:id',
			component: resolve => require(['../frontend/list.vue'], resolve),
			name: 'category',
		},
		{
			path: '/tag/:id',
			component: resolve => require(['../frontend/list.vue'], resolve),
			name: 'tag',
		},
		{
			path: '/article/:id',
			component: resolve => require(['../frontend/article.vue'], resolve),
			name: 'article',
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

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/admin',
	routes: [
		{
			path: '/',
			component: resolve => require(['../backend/layout.vue'], resolve),
			children: [
				{
					path: '',
					component: resolve => require(['../backend/index.vue'], resolve),
					name: 'index',
				},
				{
					path: 'users',
					component: resolve => require(['../backend/users.vue'], resolve),
					name: 'users',
				},
				{
					path: 'adduser',
					component: resolve => require(['../backend/adduser.vue'], resolve),
					name: 'adduser',
				},
				{
					path: 'userinfo/:id?',
					component: resolve => require(['../backend/userinfo.vue'], resolve),
					name: 'userinfo',
				},
				{
					path: 'category',
					component: resolve => require(['../backend/category.vue'], resolve),
					name: 'category',
				},
				{
					path: 'subplate',
					component: resolve => require(['../backend/subplate.vue'], resolve),
					name: 'subplate',
				},
				{
					path: 'tag',
					component: resolve => require(['../backend/tag.vue'], resolve),
					name: 'tag',
				},
				{
					path: 'article',
					component: resolve => require(['../backend/article.vue'], resolve),
					name: 'article',
				},
				{
					path: 'articleDetail/:id',
					component: resolve => require(['../backend/articleDetail.vue'], resolve),
					name: 'articleDetail',
				},
				{
					path: 'articleEdit/:type/:id?',
					component: resolve => require(['../backend/articleEdit.vue'], resolve),
					name: 'articleEdit',
				},
				{
					path: 'log',
					component: resolve => require(['../backend/log.vue'], resolve),
					name: 'log',
				},
			]
		},
		{
			path: '/login',
			component: resolve => require(['../backend/login.vue'], resolve),
			name: 'login',
		},
		{
			path: '*',
			component: resolve => require(['../backend/notFound.vue'], resolve)
		},
	]
})

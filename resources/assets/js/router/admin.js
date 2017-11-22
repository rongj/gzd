import Vue from 'vue'
import Router from 'vue-router'
import layout from '../backend/layout.vue'
import index from '../backend/index.vue'
import category from '../backend/category.vue'
import subplate from '../backend/subplate.vue'
import article from '../backend/article.vue'
import notFound from '../backend/notFound.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/admin',
	routes: [
		{
			path: '/',
			component: layout,
			children: [
				{
					path: '',
					component: index,
					name: 'index',
				},
				{
					path: 'category',
					component: category,
					name: 'category',
				},
				{
					path: 'subplate',
					component: subplate,
					name: 'subplate',
				},
				{
					path: 'article',
					component: article,
					name: 'article',
				},
				{
					path: '*',
					component: notFound
				},
			]
		}
	]
})

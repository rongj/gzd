<template>
	<div class="main-right">
<!-- 		<div class="hot-article panel-item">
			<h2 class="panel-item-title">热门文章</h2>
			<div class="hot-article-list">
				<ul>
					<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目用webpack4带你实现一个vue的打包的项目</a></li>
					<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
					<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
					<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
				</ul>
			</div>
		</div> -->

		<div class="tags panel-item">
			<h2 class="panel-item-title">分类</h2>
			<div class="tags-list">
				<router-link :to="{ name: 'list', query: { type: 'category', id: item.id, name: item.name }}" v-for="(item, i) in categoryList" :key="i" class="link">{{item.name}}({{item.post_num || 0}})</router-link>
			</div>
		</div>
		
		<div class="tags panel-item">
			<h2 class="panel-item-title">标签</h2>
			<div class="tags-list">
				<router-link :to="{ name: 'list', query: { type: 'tag', id: item.id, name: item.name }}" v-for="(item, i) in tagList" :key="i" class="link">{{item.name}}({{item.post_num || 0}})</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['tagList', 'categoryList']),
		},
		
		created() {
			this.$store.dispatch('getAllCategory')
			this.$store.dispatch('getAllTag')
		}
	}
</script>

<style lang="scss">
	
	.panel-item {
		margin-bottom: 20px;
		padding-bottom: 20px;
		position: relative;
		.panel-item-title {
			font-size: 16px;
			margin-bottom: 10px;
		}
		&:after {
			content: "";
			display: block;
			position: absolute;
			height: 1px;
			background-color: #e8e8e8;
			bottom: 0;
			left: -15px;
			width: 100px;
		}
	}
	.hot-article-list {
		li {
			height: 40px;
			line-height: 40px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		a {
			font-size: 14px;
			line-height: initial;	
		}
	}
	
	.tags-list {
		a {
			margin: 10px;
		}
	}
</style>
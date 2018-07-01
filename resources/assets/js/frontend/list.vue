<template>

<!-- 		<div class="page-header-wrap">
			<div class="page-header">
				<h2>JavaScript</h2>
				<a class="header-back" href="/"><i class="el-icon-arrow-left"></i>返回</a>
			</div>
		</div> -->
	<div class="main-content article-content">
		<div class="main-left">			
			<div class="article-list">
				<div class="article-item"  v-for="(item, i) in [1,2,3,4,5,6]" :key="i">
					<h2><router-link :to="`/article/${i}`" class="link">一步步去阅读koa源码，中间件执行原理</router-link></h2>
					<p>koa的中间件执行的流程控制，代码的是非常精妙的。koa的中间件执行的流程控制，代码的是非常精妙的。koa的中间件执行的流程控制，代码的是非常精妙的。</p>
					<div class="item-info">
						<span>2018.05.14</span>
						<span>67次阅读</span>
						<span>0条评论</span>
						<span>0人喜欢</span>
					</div>
				</div>
			</div>
		</div>
		<div class="main-right">
			<div class="hot-article panel-item">
				<h2 class="panel-item-title">热门文章</h2>
				<div class="hot-article-list">
					<ul>
						<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目用webpack4带你实现一个vue的打包的项目</a></li>
						<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
						<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
						<li><a href="" class="link">用webpack4带你实现一个vue的打包的项目</a></li>
					</ul>
				</div>
			</div>

			<div class="tags panel-item">
				<h2 class="panel-item-title">标签</h2>
				<div class="tags-list">
					<router-link :to="`/tag/${item.id}`" v-for="(item, i) in tagList" :key="i" class="link">{{item.name}}({{item.count || 0}})</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['tagList']),
		},
		
		created() {
			this.$store.dispatch('getAllTag')
		}
	}
</script>

<style lang="scss" scoped>
	.page-header-wrap {
		display: none;
	}
	.page-header {
		position: relative;
		padding: 0 10px;
		h2 {
			font-size: 28px;
			font-weight: 400;
			font-family: Raleway;
			padding-top: 4px;
		}
		.header-back {
			color: #fff;
			display: none;
		}
	}

	.article-content {
		display:flex;
		.main-left {
			flex: 1;
			background: #fff;
		}
		.main-right {
			width: 370px;
			background: #fff;
			padding: 15px;
			margin-left: 30px;
		}
	}

	.article-item {
		padding: 24px 18px;
		overflow: hidden;
		position: relative;
		h2 {
			margin-bottom: 15px;
			font-size: 18px;
			a {
				font-weight: 400;
				font-size: 20px;
			}
		}
		p {
			line-height: 24px;
			color: #666;
		}
		.item-info {
			margin-top: 20px;
			color: #8c8c8c;
			font-size: 12px;
			span {
				margin-right: 10px;
				&:after {
					content: '|';
					margin-left: 10px;
				}
				&:last-child:after {
					display: none;
					content: '';
				}
			}
		}
		&:after {
			content: "";
			display: block;
			position: absolute;
			height: 1px;
			background-color: #e8e8e8;
			bottom: 0;
			left: 0;
			width: 150px;
		}
	}

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

	@media screen and (max-width: 768px) {
		body {
			background: #fff;
		}
		.page-header-wrap {
			display: block;
			height: 44px;
			position: fixed;
			width: 100%;
			top: 0;
			z-index: 11;
		}
		.page-header {
			height: 44px;
			line-height: 44px;
			h2 {
				text-align: center;
				padding-top: 0;
				font-size: 20px;
				font-weight: 600;
			}
			.el-icon-close, p {
				display: none;
			}
			.header-back {
				display: block;
				position: absolute;
				left: 10px;
				top: 0;
				font-size: 16px;
				i {
					vertical-align: -1px;
					margin-right: 3px;
				}
			}
		}
		.main-right {
			display: none;
		}
	}
</style>
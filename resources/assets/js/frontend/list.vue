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
				<div class="article-item"  v-for="(item, i) in articleList.list" :key="item.id">
					<h2><router-link :to="`/article/${item.id}`" class="link">{{item.title}}</router-link></h2>
					<p>{{item.summary}}</p>
					<div class="item-info">
						<span class="item-tags">
							标签：
							<router-link v-for="tag in item.tags" :key="tag.tag_id" :to="`/tag/${tag.tag_id}`" class="link">{{tag.name}}</router-link>
						</span>
						<span class="item-category">
							分类：
							<router-link :to="`/article/${item.category_id}`" class="link">{{item.category_name}}</router-link>
						</span>
						<span>{{item.created_at}}</span>
						<span>{{item.read_num}}次阅读</span>
						<span>{{item.comment_num}}条评论</span>
					</div>
				</div>
				<div class="no-data" v-if="!articleList.list.length && !articleList.loading">暂无数据</div>
			</div>
		</div>
		<right-panel />
	</div>
</template>

<script>
	import rightPanel from './rightPanel.vue'
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['articleList']),
		},

		components: { rightPanel },
		
		created() {
			let { name, params: { id }} = this.$route;
			
			this.$store.dispatch('getArticleList', { query: name, id })
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
			font-size: 14px;
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
			.item-tags a {
				margin-right: 10px;
				&:last-child {
					margin-right: 0;
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


	.no-data {
		font-size: 14px;
		text-align: center;
		color: #999;
		margin-top: 20px;
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
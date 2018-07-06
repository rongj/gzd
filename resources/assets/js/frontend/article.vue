<template>
	<div class="main-content article-content">
		<div class="main-left">			
			<h3 class="article-title">{{articleDetail.title}}</h3>
			<div class="article-info">
				<span class="item-tags">
					标签：
					<router-link v-for="tag in articleDetail.tags" :key="tag.tag_id" :to="`/tag/${tag.tag_id}`" class="link">{{tag.name}}</router-link>
				</span>
				<span class="item-category">
					分类：
					<router-link :to="`/article/${articleDetail.category_id}`" class="link">{{articleDetail.category_name}}</router-link>
				</span>
				<span>{{articleDetail.created_at}}</span>
				<span>{{articleDetail.read_num}}次阅读</span>
				<span>{{articleDetail.comment_num}}条评论</span>
			</div>
			<div class="markdown-body article-body" v-html="articleDetail.content"></div>
	
		</div>
		<right-panel/>
	</div>
</template>

<script>
	import rightPanel from './rightPanel.vue'
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['tagList', 'articleDetail']),
		},
		components: { rightPanel },
		created() {
			this.$store.dispatch('getArticleDetail', { id: this.$route.params.id })
		}
	}
</script>

<style lang="scss">
	@import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css);
	@import "../scss/monokai-sublime.scss";

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

	.article-title {
		font-size: 20px;
		font-weight: 600;
		text-align: center;
		margin: 20px 0;
	}

	.article-info {
		margin-top: 20px;
		color: #8c8c8c;
		font-size: 12px;
		padding: 20px;
		margin-bottom: 10px;
		position: relative;
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

	.article-body {
		padding: 20px;
		max-width: 1000px;
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
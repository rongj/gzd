<template>
	<div class="main-panel">
		<el-breadcrumb separator="/" class="breadcrumb mb25">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/article' }">文章管理</el-breadcrumb-item>
			<el-breadcrumb-item>文章详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="main-content">
			<h3 class="article-title">{{articleDetail.title}}</h3>
			<span>{{articleDetail.username}}</span>
			<div class="markdown-body" v-html="articleDetail.content"></div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['articleDetail'])
		},

		created(){
			this.$store.dispatch('getArticleDetail', {
				id: this.$route.params.id
			})
		}
	}
</script>
<style lang="scss">
	@import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css);
	@import "../scss/monokai-sublime.scss";
	.table-align-center {
		td, th{
			text-align: center;
		}
		th {
			white-space: nowrap;
		}
	}
	.item-icon {
		img {
			width: 40px;
		}
	}
	.avatar-uploader {
		font-size: 0;
		color: #8c939d;
		width: 78px;
		height: 78px;
		line-height: 76px;
		text-align: center;
		border: 1px solid #ebebeb;
		border-radius: 3px;
		transition: .2s;
		img {
			width: 100%;
			height: 100%;
		}
		&:hover {
			border-color: #409eff;
		}
		i {
			font-size: 28px;
			line-height: 76px;
		}
	}
	.article-title {
		font-size: 20px;
		font-weight: 700;
		border-bottom: 1px solid #e8e8e8;
		padding-bottom: 10px;
		margin-bottom: 20px;
	}
</style>
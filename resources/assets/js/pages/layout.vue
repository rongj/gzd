<template>
	<div class="layout">
		<div class="layout-header">
			<div class="header-logo fl">
			<router-link to="/" tag="h2">后台管理系统</router-link>
			</div>
			<div class="header-menu fr">
				<el-menu theme="dark" class="el-menu-demo" mode="horizontal">
					<el-submenu index="1">
						<template slot="title">管理员</template>
						<el-menu-item index="1-1">修改密码</el-menu-item>
						<el-menu-item index="1-2">个人信息</el-menu-item>
						<el-menu-item index="1-3">退出</el-menu-item>
					</el-submenu>
					<el-menu-item index="2"><a href="">网站前台</a></el-menu-item>
				</el-menu>
			</div>
		</div>
		<el-row class="layout-main">
			<el-col :xs="6" :sm="4" class="layout-left">
				<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>APP公共功能</template>
						<el-menu-item index="1-1">板块管理</el-menu-item>
						<el-menu-item index="1-2">首页板块管理</el-menu-item>
						<el-menu-item index="1-3">板块推荐管理</el-menu-item>
						<el-menu-item index="1-4">广告图片管理</el-menu-item>
						<el-menu-item index="1-5">意见反馈</el-menu-item>
						<el-menu-item index="list">热门推荐</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>猫扑视频</template>
						<el-menu-item index="2-1">意见反馈</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>猫仔队</template>
						<el-menu-item index="3-1">轮播图</el-menu-item>
						<el-menu-item index="3-2">友情链接</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-menu"></i>猫扑Web</template>
						<el-menu-item index="4-1">大杂烩双栏页</el-menu-item>
						<el-menu-item index="4-2">友情链接</el-menu-item>
						<el-menu-item index="4-3">大杂烩置顶配置</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-menu"></i>视频管理后台</template>
						<el-menu-item index="5-1">视频初审</el-menu-item>
						<el-menu-item index="5-2">视频二审</el-menu-item>
						<el-menu-item index="5-3">视频帖管理</el-menu-item>
						<el-menu-item index="5-4">视频管理</el-menu-item>
						<el-menu-item index="5-5">弹幕</el-menu-item>
						<el-menu-item index="5-6">评论</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :xs="18" :sm="20" class="layout-right">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
	}
</script>

<style lang="scss">
	@import '../scss/mixin';
	.layout {
		position: relative;
		width: 100%;
		height: 100%;
		.layout-header {
			position: fixed;
			width: 100%;
			z-index: 9;
			top: 0;
			background: $tc;
			color: $otc;
		}
		.layout-main {
			position: absolute;
			width: 100%;
			min-width: 768px;
			top: 60px;
			bottom: 0;
			overflow: auto;
		}
		.layout-left {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			background: $bgc;
		}

		.layout-right {
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}

	.layout-header {
		h2 {
			line-height: 60px;
			font-size: 20px;
			text-indent: 20px;
		}
	}
</style>
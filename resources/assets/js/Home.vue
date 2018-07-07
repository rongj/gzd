<template>
	<div class="main-wrap">
		<div class="header-wrap">
			<div class="main-header">
				<div class="header-nav">
					<router-link to="/" class="link" exact>首页</router-link>
					<!-- <router-link to="/categories" class="link">分类</router-link>
					<router-link to="/tags" class="link">标签</router-link> -->
					<router-link to="/project" class="link">项目</router-link>
					<router-link to="/tool" class="link">工具</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<style lang="scss">
	@import './scss/reset';
</style>
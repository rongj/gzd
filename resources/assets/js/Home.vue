<template>
	<div class="main-wrap">
		<div class="header-wrap">
			<div class="main-header">
				<div class="header-nav">
					<router-link to="/" class="link" exact>归档</router-link>
					<router-link to="/project" class="link">项目</router-link>
					<router-link to="/tool" class="link">工具</router-link>
					<router-link to="/demo" class="link">DEMO</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<style lang="scss">
	@import './scss/reset';
</style>
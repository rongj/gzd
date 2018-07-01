<template>
	<div class="main-content">
		<div class="category-list project-list clearfix">
			<div class="category-item" v-for="(item, i) in categoryList" :key="i">
				<div>			
					<div class="category-icon">
						<img :src="item.cover" alt="">
					</div>
					<div class="category-desc">
						使用Koa2、mongodb、GraphQL、react、apollo开发的简单同构应用
						<!-- <h3>GraphQL玩具代码</h3> -->
					</div>
					<p>
						<a href="">Github</a>
						<a href="">Online</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['categoryList']),
		},

		created() {
			this.$store.dispatch('getAllCategory')
		}
	}
</script>

<style lang="scss">


</style>	
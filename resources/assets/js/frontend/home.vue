<template>
	<div class="main-content">
		<div class="category-list clearfix">
			<div class="category-item" v-for="(item, i) in categoryList" :key="i">
				<router-link :to="`/category/${item.id}`">
					<div class="category-icon">
						<img :src="item.cover" alt="">
					</div>
					<div class="category-title">
						<span>1</span>
						<h3>{{item.name}}</h3>
					</div>
					<p>{{item.describe}}</p>
				</router-link>
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
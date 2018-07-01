<template>
	<div class="main-content">
		<div class="category-list clearfix">
			demo
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
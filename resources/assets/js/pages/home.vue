<template>
	<div class="main-wrap">
		<div class="main-header clearfix">
			<div class="header-logo fl">
				<img src="../assets/haski.png" alt="">
				<h2>我的网站</h2>
			</div>
<!-- 			<div class="header-nav">
				<a href="">版块</a>
				<a href="">文章</a>
				<a href="">外链</a>
			</div> -->
			<div class="header-search fr">
				<form class="search-form">
					<input type="search" placeholder="输入关键字搜索">
				</form>
			</div>
		</div>
		<div class="main-content">
			<div class="panel-list" v-for="(item, i) in itemlist">
				<div class="panel-item" :key="i">
					<div class="panel-icon">
						<img :src="item.img" alt="">
					</div>
					<div class="panel-title">
						<span>1</span>
						<h3>{{item.name}}</h3>
					</div>
					<p>{{item.descript}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemlist: [
					{
						id: 1,
						name: 'HTML5',
						img: '/images/haski.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
					{
						id: 1,
						name: 'HTML5',
						img: '/images/h5.png',
						descript: '下一代的 HTML'
					},
				]
			}
		}
	}
</script>

<style lang="scss">

</style>
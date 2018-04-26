<template>
	<div class="main-wrap">
		<div class="header-wrap">
			<div class="main-header clearfix">
				<div class="header-logo fl">
					<h2>我的个人网站</h2>
				</div>
				<div class="header-nav fl">
					<a href="">文章</a>
					<a href="">归档</a>
					<a href="">demo</a>
				</div>
				<div class="header-search fr">
					<form class="search-form">
						<input type="search" placeholder="输入关键字搜索">
					</form>
				</div>
			</div>
		</div>	
		<div class="main-content">
			<div class="panel-list clearfix">
				<div class="panel-item" v-for="(item, i) in itemlist" :key="i">
					<a :href="`category/${item.id}`">
						<div class="panel-icon">
							<img :src="item.img" alt="">
						</div>
						<div class="panel-title">
							<span>1</span>
							<h3>{{item.name}}</h3>
						</div>
						<p>{{item.descript}}</p>
					</a>
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
						img: '/images/html5.jpg',
						descript: '下一代的HTML'
					},
					{
						id: 2,
						name: 'CSS3',
						img: '/images/css3.jpg',
						descript: 'CSS技术的升级版本'
					},
					{
						id: 3,
						name: 'JavaScript',
						img: '/images/js.jpg',
						descript: '互联网最流行的脚本语言'
					},
					{
						id: 4,
						name: 'Nodejs',
						img: '/images/nodejs.jpg',
						descript: '事件驱动、非阻塞式 I/O'
					},
					{
						id: 5,
						name: 'Typescript',
						img: '/images/ts.jpg',
						descript: 'JavaScript的超集'
					},
					{
						id: 6,
						name: 'Python',
						img: '/images/python.jpg',
						descript: '人生苦短，我学Python'
					},
					{
						id: 7,
						name: 'PHP',
						img: '/images/php.jpg',
						descript: '世界上最好的编程语言'
					},
					{
						id: 8,
						name: 'Linux',
						img: '/images/linux.jpg',
						descript: '性能稳定的多用户网络操作系统'
					},
					// {
					// 	id: 1,
					// 	name: 'Go',
					// 	img: '/images/go.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: 'Java',
					// 	img: '/images/java.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: 'Ruby',
					// 	img: '/images/ruby.jpg',
					// 	descript: '下一代的 HTML'
					// },
					// {
					// 	id: 1,
					// 	name: '大数据',
					// 	img: '/images/bigdata.jpg',
					// 	descript: '下一代的 HTML'
					// },
					{
						id: 9,
						name: 'Tools',
						img: '/images/tools.jpg',
						descript: '工欲善其事，必先利其器'
					},
					{
						id: 10,
						name: 'UI',
						img: '/images/photoshop.jpg',
						descript: '大道至简'
					},
					{
						id: 11,
						name: 'Jobs',
						img: '/images/webapp.jpg',
						descript: '程序员招聘指南'
					},
				]
			}
		}
	}
</script>

<style lang="scss">


</style>
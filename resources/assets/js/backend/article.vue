<template>
	<div class="main-panel">
		<el-breadcrumb separator="/" class="breadcrumb mb25">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/article' }">文章管理</el-breadcrumb-item>
			<el-breadcrumb-item>文章列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="main-content">
			<el-table :data="articleList.list" border style="width: 100%" class="table-align-center">
				<el-table-column prop="id" label="#" width="50"></el-table-column>
				<el-table-column prop="title" label="文章标题"></el-table-column>
				<el-table-column prop="category_name" label="分类"></el-table-column>
				<el-table-column label="文章封面" class-name="item-icon">
					<template slot-scope="scope">
						<img :src="scope.row.cover">
					</template>
				</el-table-column>
				<el-table-column prop="username" label="作者" width="200"></el-table-column>
				<el-table-column prop="comment_num" label="评论数" width="100"></el-table-column>
				<el-table-column label="操作" width="400">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleShow(scope.$index, scope.row.id)">查看</el-button>
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="ss-page mt10" v-if="articleList.totalCount">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="articleList.currentPage"
					:page-sizes="[5, 10, 20, 50, 100]"
					:page-size="articleList.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="articleList.totalCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['articleList', 'user']),
		},

		created(){
			this.getArticleList()
		},

		methods: {
			// 获取文章列表
			getArticleList: function () {
				this.$store.dispatch('getArticleList')
			},

			// 更改每页显示条数
			handleSizeChange(val) {
				this.$store.commit({
					type: 'merge',
					key: 'articleList',
					data: {
						currentPage: 1,
						pageSize: val
					}
				})
				this.getArticleList()
			},

			// 选择页数
			handleCurrentChange(val) {
				this.$store.commit({
					type: 'merge',
					key: 'articleList',
					data: {
						currentPage: val
					}
				})
				this.getArticleList()
			},

			// 查看详情
			handleShow: function (index, id) {
				this.$router.push('articleDetail/'+id)
			},

			// 编辑
			handleEdit: function (index, row) {
				// if(row.user_id === this.user.id || this.user.id === 0) {
					this.$router.push('articleEdit/update/'+row.id)
				// } else {
					// this.$message.error('你没有编辑权限')
				// }
			},

			// 删除
			handleDelete: function (index, row) {
				this.$confirm('此操作将永久删除, 是否继续?', '', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$store.dispatch('deleteArticle', { id: row.id }).then(res => {
						if(res.code === 200) {
							this.$message.success(res.msg)
							if(this.articleList.list.length === 1) {
								this.$store.commit({
									type: 'merge',
									key: 'articleList',
									data: {
										currentPage: this.articleList.currentPage - 1
									}
								})
							}
							this.getArticleList()
						} else {
							this.$message.error(res.msg)
						}
					})
				})
			}
		}
	}
</script>
<style lang="scss">
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
</style>
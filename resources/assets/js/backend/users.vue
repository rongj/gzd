<template>
	<div class="main-panel">
		<el-breadcrumb separator="/" class="breadcrumb mb25">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/users' }">用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="main-content">
			<el-table :data="userList.list" border style="width: 100%" class="table-align-center">
				<el-table-column prop="id" label="#" width="50"></el-table-column>
				<el-table-column prop="name" label="用户名"></el-table-column>
				<el-table-column prop="email" label="邮箱"></el-table-column>
				<el-table-column prop="role_name" label="用户权限"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<!--<el-button size="mini" @click="handleShow(scope.$index, scope.row.id)">查看</el-button>-->
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑权限</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="ss-page mt10" v-if="userList.totalCount">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="userList.currentPage"
					:page-sizes="[5, 10, 20, 50, 100]"
					:page-size="userList.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="userList.totalCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['userList', 'user']),
		},

		created(){
			this.getUserList()
		},

		methods: {
			// 获取文章列表
			getUserList: function () {
				this.$store.dispatch('getUserList')
			},

			// 更改每页显示条数
			handleSizeChange(val) {
				this.$store.commit({
					type: 'merge',
					key: 'userList',
					data: {
						currentPage: 1,
						pageSize: val
					}
				})
				this.getUserList()
			},

			// 选择页数
			handleCurrentChange(val) {
				this.$store.commit({
					type: 'merge',
					key: 'userList',
					data: {
						currentPage: val
					}
				})
				this.getUserList()
			},

			// 查看详情
			handleShow: function (index, id) {
				this.$router.push('userinfo/'+id)
			},

			// 编辑权限
			handleEdit: function (index, row) {
				// if(row.user_id === this.user.id || this.user.id === 0) {
					// this.$router.push('articleEdit/update/'+row.id)
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
									key: 'userList',
									data: {
										currentPage: this.articleList.currentPage - 1
									}
								})
							}
							this.getUserList()
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
</style>
<template>
	<div class="main-panel">
		<el-breadcrumb separator="/" class="breadcrumb mb25">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/category' }">文章管理</el-breadcrumb-item>
			<el-breadcrumb-item>所有板块</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="main-content">
			<div class="table-bar mb10">
				<el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">添加版块</el-button>
			</div>
			<el-table :data="tableData" border style="width: 100%" class="table-align-center">
				<el-table-column prop="id" label="版块id"></el-table-column>
				<el-table-column prop="name" label="版块名称"></el-table-column>
				<el-table-column label="版块图标" class-name="item-icon">
					<template slot-scope="scope">
						<img :src="scope.row.cover">
					</template>
				</el-table-column>
				<el-table-column prop="describe" label="版块描述"></el-table-column>
				<el-table-column prop="weight" label="版块排序"></el-table-column>
				<el-table-column prop="is_active" label="是否显示">
					<template slot-scope="scope">{{scope.row.is_active ? '是' : '否'}}</template>
<!-- 					<template slot-scope="scope">
						<el-tooltip :content="(scope.row.is_active ? '': '不')+'显示'" placement="top">
							<el-switch
								v-model="scope.row.is_active"
								active-text="是"
								inactive-text="否">
							</el-switch>
						</el-tooltip>
					</template> -->
				</el-table-column>
				<el-table-column prop="updated_at" label="最后编辑时间"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog :title="form.title" :visible.sync="showPlateDialog">
			<el-form :model="form">
				<el-form-item label="版块名称" label-width="80px">
					<el-input v-model="form.name" placeholder="请输入版块名称"></el-input>
				</el-form-item>
				<el-form-item label="版块图标" label-width="80px">
					<el-upload class="avatar-uploader" 
						action="/api/file/upload"
						name="plate-cover"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
					  	<img v-if="form.cover" :src="form.cover" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
				<el-form-item label="版块描述" label-width="80px">
					<el-input v-model="form.describe" type="textarea" autosize placeholder="请输入版块描述"></el-input>
				</el-form-item>
				<el-form-item label="版块排序" label-width="80px">
					<el-input v-model="form.weight" min="0" max="99" type="number"></el-input>
				</el-form-item>
				<el-form-item label="是否显示" label-width="80px">
					<el-switch v-model="form.is_active"></el-switch>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showPlateDialog=false">取 消</el-button>
				<el-button type="primary" @click="handleSavePlate(form.title)">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import api from '../api/api'
	export default {
		data() {
			return {
				tableData: [
					{
						id: 1,
						name: 'HTML5',
						cover: '/upload/Jcu02kqSXyjFTRrKMGoww70qxAljizx1jzdCYbxz.png',
						describe: '下一代html',
						weight: 0,
						is_active: 1,
						updated_at: '2017-11-11 11:11:11',
					}
				],
				showPlateDialog : false,
				form: {
					name: '',
					cover: '',
					describe: '',
					weight: '',
					is_active: 1,
					title: '',
				},
			}
		},

		created(){
			
		},

		methods: {
			// 添加版块
			handleAdd() {
				this.showPlateDialog = true;
				this.form = {
					weight: 0,
					is_active: 1,
				};
				this.form.title = '添加版块';
			},

			// 编辑版块
			handleEdit(index, row) {
				this.showPlateDialog = true;
				this.form = row;
				this.form.title = '编辑版块信息';
			},

			// 删除版块
			handleDelete(index, row) {
				console.log(index, row);
			},

			handleAvatarSuccess(res, file) {
				this.form.cover = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				// const isJPG = file.type === 'image/jpeg';
				// const isLt2M = file.size / 1024 / 1024 < 2;

				// if (!isJPG) {
				//   this.$message.error('上传头像图片只能是 JPG 格式!');
				// }
				// if (!isLt2M) {
				//   this.$message.error('上传头像图片大小不能超过 2MB!');
				// }
		  //       return isJPG && isLt2M;
	      	},

	      	handleSavePlate(title) {
	      		if(title === '编辑版块信息') {
	      			api.addPlate(this.form).then(res => {
	      				if(res.data.code === 200) {
	      					this.showPlateDialog = false;
	      					this.$message({
	      						message: '修改成功',
	      						type: 'success'
	      					});
	      				}
	      			}).catch(err => {
	      				console.error(err);
	      			})
	      		} else if (title === '添加版块') {
					api.addPlate(this.form).then(res => {
						if(res.data.code === 200) {
							this.showPlateDialog = false;
							this.$message({
								message: '添加成功',
								type: 'success'
							});
						}
					}).catch(err => {
						console.error(err);
					})
	      		}
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
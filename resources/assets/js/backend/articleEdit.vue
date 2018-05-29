<template>
    <div class="pit-post-form">
        <el-breadcrumb separator="/" class="breadcrumb mb25">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/article' }">文章管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{type==='update' ? '文章编辑' : '新增文章'}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="myForm" :model="articleDetail" label-width="80px"
                 class="pit-common">
            <el-form-item label="标题" prop="title">
                <el-input v-model="articleDetail.title"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-select placeholder="请选择类别" v-model="articleDetail.category_id" style="width: 100%">
                    <el-option 
                        v-for="item in categoryList"
                        :label="item.name"
                        :value="item.id"
                        :key="item.name">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标签">
                <el-select
                    v-model="articleDetail.tags"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择标签"
                    style="width: 100%">
                    <el-option
                        v-for="item in tagList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="封面">
                <el-upload class="avatar-uploader" 
                    action="/api/upload/img"
                    name="plate-cover"
                    :show-file-list="false"
                    :on-success="handleUploadSuccess">
                    <img v-show="articleDetail.cover" :src="articleDetail.cover" class="avatar">
                    <i v-show="!articleDetail.cover" class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="内容" prop="markdown">
                 <mavon-editor v-model="articleDetail.content"/>
            </el-form-item>
            <el-form-item>
                <el-button>取 消</el-button>
                <el-button type="primary" v-if="type==='update'" @click="handleUpdate">修 改</el-button>
                <el-button type="primary" v-if="type==='create'" @click="handleCreate">发 布</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import { mapState } from 'vuex'

    export default {
        components: {
            mavonEditor
        },
        data() {
            return {
                type: 'create',
                href: location.href,
                id: null,
                tags: []
            }
        },
        computed: {
            ...mapState(['articleDetail', 'categoryList', 'tagList'])
        },
        created(){
            this.type = this.$route.params.type
            this.$store.dispatch('getAllCategory')
            this.$store.dispatch('getAllTag')
            if(this.type === 'update') {
                this.id = this.$route.params.id
                this.$store.dispatch('getArticleDetail', { id: this.id })
            } else {
                this.$store.commit({
					type: 'save',
					key: 'articleDetail',
					data: {}
				})
            }
        },
        mounted() {
        },
        watch: {
            '$route': function(to, from) {
                if(to.name !== 'articleEdit') return
                if(to.params.type === 'update') {
                    this.$store.dispatch('getArticleDetail', { id: this.$route.params.id })
                } else if (to.params.type === 'create') {
                    this.type = this.$route.params.type
                    this.$store.commit({
                        type: 'save',
                        key: 'articleDetail',
                        data: res.data.data
                    })
                }
            }
        },
        methods: {
            // 修改
            handleUpdate: function () {
                this.$store.dispatch('updateArticle', this.articleDetail).then(res => {
                    if(res.code === 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/articleDetail/'+this.id)                        
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },

            // 发布
            handleCreate: function () {
                this.$store.dispatch('createArticle', this.articleDetail).then(res => {
                    if(res.code === 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/articleDetail/'+res.data.id)                        
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },

            // 上传成功
            handleUploadSuccess(res, file) {
                if(res.code === 200) {
                    this.$store.commit({
                        type: 'merge',
                        key: 'articleDetail',
                        data: { cover: res.data.url}
                    })
                }
            },
        },
    }
</script>

<style lang="scss">
    .pit-common {
        margin: 20px;
        min-width: 800px;
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
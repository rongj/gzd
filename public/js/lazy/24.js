webpackJsonp([24],{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(278)
}
var normalizeComponent = __webpack_require__(34)
/* script */
var __vue_script__ = __webpack_require__(280)
/* template */
var __vue_template__ = __webpack_require__(281)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\backend\\article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7203a87f", Component.options)
  } else {
    hotAPI.reload("data-v-7203a87f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("08c00d3c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7203a87f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./article.vue", function() {
     var newContent = require("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7203a87f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.table-align-center td, .table-align-center th {\n  text-align: center;\n}\n.table-align-center th {\n  white-space: nowrap;\n}\n.item-icon img {\n  width: 40px;\n}\n.avatar-uploader {\n  font-size: 0;\n  color: #8c939d;\n  width: 78px;\n  height: 78px;\n  line-height: 76px;\n  text-align: center;\n  border: 1px solid #ebebeb;\n  border-radius: 3px;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n.avatar-uploader img {\n    width: 100%;\n    height: 100%;\n}\n.avatar-uploader:hover {\n    border-color: #409eff;\n}\n.avatar-uploader i {\n    font-size: 28px;\n    line-height: 76px;\n}\n", ""]);

// exports


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */])(['articleList', 'user'])),

	created: function created() {
		this.getArticleList();
	},


	methods: {
		// 获取文章列表
		getArticleList: function getArticleList() {
			this.$store.dispatch('getArticleList');
		},

		// 更改每页显示条数
		handleSizeChange: function handleSizeChange(val) {
			this.$store.commit({
				type: 'merge',
				key: 'articleList',
				data: {
					currentPage: 1,
					pageSize: val
				}
			});
			this.getArticleList();
		},


		// 选择页数
		handleCurrentChange: function handleCurrentChange(val) {
			this.$store.commit({
				type: 'merge',
				key: 'articleList',
				data: {
					currentPage: val
				}
			});
			this.getArticleList();
		},


		// 查看详情
		handleShow: function handleShow(index, id) {
			this.$router.push('articleDetail/' + id);
		},

		// 编辑
		handleEdit: function handleEdit(index, row) {
			// if(row.user_id === this.user.id || this.user.id === 0) {
			this.$router.push('articleEdit/update/' + row.id);
			// } else {
			// this.$message.error('你没有编辑权限')
			// }
		},

		// 删除
		handleDelete: function handleDelete(index, row) {
			var _this = this;

			this.$confirm('此操作将永久删除, 是否继续?', '', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				_this.$store.dispatch('deleteArticle', { id: row.id }).then(function (res) {
					if (res.code === 200) {
						_this.$message.success(res.msg);
						if (_this.articleList.list.length === 1) {
							_this.$store.commit({
								type: 'merge',
								key: 'articleList',
								data: {
									currentPage: _this.articleList.currentPage - 1
								}
							});
						}
						_this.getArticleList();
					} else {
						_this.$message.error(res.msg);
					}
				});
			});
		}
	}
});

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-panel" },
    [
      _c(
        "el-breadcrumb",
        { staticClass: "breadcrumb mb25", attrs: { separator: "/" } },
        [
          _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
            _vm._v("首页")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", { attrs: { to: { path: "/article" } } }, [
            _vm._v("文章管理")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("文章列表")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-content" },
        [
          _c(
            "el-table",
            {
              staticClass: "table-align-center",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.articleList.list, border: "" }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "id", label: "#", width: "50" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "title", label: "文章标题" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "category_name", label: "分类" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "文章封面", "class-name": "item-icon" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_c("img", { attrs: { src: scope.row.cover } })]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "username", label: "作者", width: "200" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "comment_num", label: "评论数", width: "100" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "400" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini" },
                            on: {
                              click: function($event) {
                                _vm.handleShow(scope.$index, scope.row.id)
                              }
                            }
                          },
                          [_vm._v("查看")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini" },
                            on: {
                              click: function($event) {
                                _vm.handleEdit(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("编辑")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                _vm.handleDelete(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.articleList.totalCount
            ? _c(
                "div",
                { staticClass: "ss-page mt10" },
                [
                  _c("el-pagination", {
                    attrs: {
                      "current-page": _vm.articleList.currentPage,
                      "page-sizes": [5, 10, 20, 50, 100],
                      "page-size": _vm.articleList.pageSize,
                      layout: "total, sizes, prev, pager, next, jumper",
                      total: _vm.articleList.totalCount
                    },
                    on: {
                      "size-change": _vm.handleSizeChange,
                      "current-change": _vm.handleCurrentChange
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7203a87f", module.exports)
  }
}

/***/ })

});
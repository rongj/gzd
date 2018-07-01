webpackJsonp([25],{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(274)
}
var normalizeComponent = __webpack_require__(34)
/* script */
var __vue_script__ = __webpack_require__(276)
/* template */
var __vue_template__ = __webpack_require__(277)
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
Component.options.__file = "resources\\assets\\js\\backend\\tag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b276cba", Component.options)
  } else {
    hotAPI.reload("data-v-5b276cba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("17d63d6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b276cba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
     var newContent = require("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b276cba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.table-align-center td, .table-align-center th {\n  text-align: center;\n}\n.table-align-center th {\n  white-space: nowrap;\n}\n.item-icon img {\n  width: 40px;\n}\n.avatar-uploader {\n  font-size: 0;\n  color: #8c939d;\n  width: 78px;\n  height: 78px;\n  line-height: 76px;\n  text-align: center;\n  border: 1px solid #ebebeb;\n  border-radius: 3px;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n.avatar-uploader img {\n    width: 100%;\n    height: 100%;\n}\n.avatar-uploader:hover {\n    border-color: #409eff;\n}\n.avatar-uploader i {\n    font-size: 28px;\n    line-height: 76px;\n}\n", ""]);

// exports


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_admin__ = __webpack_require__(60);
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
	data: function data() {
		return {
			tableData: [],
			showDialog: false,
			editType: 1,
			form: {
				name: '',
				cover: '',
				is_active: true
			}
		};
	},
	created: function created() {
		this.getAllTag();
	},


	methods: {
		// 获取所有标签
		getAllTag: function getAllTag() {
			var _this = this;

			__WEBPACK_IMPORTED_MODULE_0__api_admin__["a" /* default */].getAllTag().then(function (res) {
				if (res.data.code === 200) {
					_this.tableData = res.data.data;
				}
			}).catch(function (err) {
				console.error(err);
			});
		},


		// 添加标签
		handleAdd: function handleAdd() {
			this.showDialog = true;
			this.form = {
				is_active: true,
				cover: ''
			};
			this.editType = 1;
		},


		// 编辑标签
		handleEdit: function handleEdit(index, row) {
			this.showDialog = true;
			this.form = row;
			this.form.is_active = !!row.is_active, this.editType = 2;
		},


		// 删除标签
		handleDelete: function handleDelete(index, row) {
			var _this2 = this;

			this.$confirm('此操作将永久删除该标签, 是否继续?', '', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function () {
				__WEBPACK_IMPORTED_MODULE_0__api_admin__["a" /* default */].destroyTag({
					id: row.id
				}).then(function (res) {
					if (res.data.code === 200) {
						_this2.$message({
							type: 'success',
							message: '删除成功!'
						});
						_this2.getAllTag();
					}
				}).catch(function () {});
			});
		},
		handleUploadSuccess: function handleUploadSuccess(res, file) {
			if (res.code === 200) {
				this.form.cover = res.data.url;
			}
			// this.form.cover = URL.createObjectURL(file.raw);
		},
		beforeUpload: function beforeUpload(file) {},
		handleSavePlate: function handleSavePlate() {
			var _this3 = this;

			if (this.editType === 2) {
				__WEBPACK_IMPORTED_MODULE_0__api_admin__["a" /* default */].updateTag(this.form).then(function (res) {
					if (res.data.code === 200) {
						_this3.showDialog = false;
						_this3.$message({
							message: '修改成功',
							type: 'success'
						});
						_this3.getAllTag();
					}
				}).catch(function (err) {
					console.error(err);
				});
			} else if (this.editType === 1) {
				__WEBPACK_IMPORTED_MODULE_0__api_admin__["a" /* default */].createTag(this.form).then(function (res) {
					if (res.data.code === 200) {
						_this3.showDialog = false;
						_this3.$message({
							message: '添加成功',
							type: 'success'
						});
						_this3.getAllTag();
					}
				}).catch(function (err) {
					console.error(err);
				});
			}
		}
	}
});

/***/ }),

/***/ 277:
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
          _c("el-breadcrumb-item", { attrs: { to: { path: "/category" } } }, [
            _vm._v("分类管理")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("所有标签")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-content" },
        [
          _c(
            "div",
            { staticClass: "table-bar mb10" },
            [
              _c(
                "el-button",
                {
                  attrs: {
                    size: "mini",
                    type: "primary",
                    icon: "el-icon-circle-plus-outline"
                  },
                  on: { click: _vm.handleAdd }
                },
                [_vm._v("添加标签")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticClass: "table-align-center",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.tableData, border: "" }
            },
            [
              _c("el-table-column", { attrs: { prop: "id", label: "标签#" } }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "图标", "class-name": "item-icon" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        scope.row.cover
                          ? _c("img", { attrs: { src: scope.row.cover } })
                          : _c("span", [_vm._v("无")])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "is_active", label: "是否显示" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.is_active ? "是" : "否"))]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "updated_at", label: "最后编辑时间" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作" },
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.editType === 1 ? "添加标签" : "编辑标签",
            visible: _vm.showDialog
          },
          on: {
            "update:visible": function($event) {
              _vm.showDialog = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "标签名称", "label-width": "80px" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "请输入标签名称" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "标签图标", "label-width": "80px" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/api/upload/img",
                        name: "plate-cover",
                        "show-file-list": false,
                        "on-success": _vm.handleUploadSuccess,
                        "before-upload": _vm.beforeUpload
                      }
                    },
                    [
                      _c("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.form.cover,
                            expression: "form.cover"
                          }
                        ],
                        staticClass: "avatar",
                        attrs: { src: _vm.form.cover }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.form.cover,
                            expression: "!form.cover"
                          }
                        ],
                        staticClass: "el-icon-plus avatar-uploader-icon"
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "是否显示", "label-width": "80px" } },
                [
                  _c("el-switch", {
                    model: {
                      value: _vm.form.is_active,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "is_active", $$v)
                      },
                      expression: "form.is_active"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.showDialog = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.handleSavePlate }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5b276cba", module.exports)
  }
}

/***/ })

});
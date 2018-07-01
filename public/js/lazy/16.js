webpackJsonp([16],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(262)
}
var normalizeComponent = __webpack_require__(34)
/* script */
var __vue_script__ = __webpack_require__(264)
/* template */
var __vue_template__ = __webpack_require__(265)
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
Component.options.__file = "resources\\assets\\js\\backend\\adduser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1920c716", Component.options)
  } else {
    hotAPI.reload("data-v-1920c716", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("26b37e6d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1920c716\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./adduser.vue", function() {
     var newContent = require("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1920c716\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./adduser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.login-form {\n  width: 500px;\n}\n", ""]);

// exports


/***/ }),

/***/ 264:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			username: '',
			email: '',
			password: '',
			passowrd2: '',
			role: '2'
		};
	},


	methods: {
		handleAdduser: function handleAdduser() {
			var _this = this;

			this.$store.dispatch('register', {
				name: this.username,
				password: this.password,
				password_confirmation: this.passowrd2,
				email: this.email,
				role: this.role
			}).then(function (res) {
				if (res.data.code === 200) {
					_this.$message.success('添加用户成功');
				} else {
					_this.$message.error(res.data.msg);
				}
			}).catch(function (e) {});
		}
	}
});

/***/ }),

/***/ 265:
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
          _c("el-breadcrumb-item", { attrs: { to: { path: "/users" } } }, [
            _vm._v("用户管理")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("添加用户")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form",
        { staticClass: "login-form", attrs: { "label-width": "100px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "用户名" } },
            [
              _c("el-input", {
                attrs: { type: "username" },
                model: {
                  value: _vm.username,
                  callback: function($$v) {
                    _vm.username = $$v
                  },
                  expression: "username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "邮箱" } },
            [
              _c("el-input", {
                attrs: { type: "username" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "密码" } },
            [
              _c("el-input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "确认密码" } },
            [
              _c("el-input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.passowrd2,
                  callback: function($$v) {
                    _vm.passowrd2 = $$v
                  },
                  expression: "passowrd2"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "用户权限" } },
            [
              _c(
                "el-radio-group",
                {
                  model: {
                    value: _vm.role,
                    callback: function($$v) {
                      _vm.role = $$v
                    },
                    expression: "role"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "2" } }, [
                    _vm._v("普通用户")
                  ]),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "1" } }, [_vm._v("管理员")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.handleAdduser }
                },
                [_vm._v("确认添加")]
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1920c716", module.exports)
  }
}

/***/ })

});
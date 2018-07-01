webpackJsonp([10],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(34)
/* script */
var __vue_script__ = __webpack_require__(232)
/* template */
var __vue_template__ = __webpack_require__(233)
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
Component.options.__file = "resources\\assets\\js\\frontend\\project.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39a7844e", Component.options)
  } else {
    hotAPI.reload("data-v-39a7844e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("649ad0d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39a7844e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./project.vue", function() {
     var newContent = require("!!../../../../node_modules/.0.28.10@css-loader/index.js!../../../../node_modules/.13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39a7844e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/.6.0.7@sass-loader/lib/loader.js!../../../../node_modules/.13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./project.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 232:
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




/* harmony default export */ __webpack_exports__["default"] = ({
	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */])(['categoryList'])),

	created: function created() {
		this.$store.dispatch('getAllCategory');
	}
});

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content" }, [
    _c(
      "div",
      { staticClass: "category-list project-list clearfix" },
      _vm._l(_vm.categoryList, function(item, i) {
        return _c("div", { key: i, staticClass: "category-item" }, [
          _c("div", [
            _c("div", { staticClass: "category-icon" }, [
              _c("img", { attrs: { src: item.cover, alt: "" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "category-desc" }, [
              _vm._v(
                "\n\t\t\t\t\t使用Koa2、mongodb、GraphQL、react、apollo开发的简单同构应用\n\t\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _vm._m(0, true)
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("a", { attrs: { href: "" } }, [_vm._v("Github")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [_vm._v("Online")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-39a7844e", module.exports)
  }
}

/***/ })

});
webpackJsonp([9],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(273)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(275)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0970d494"
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
Component.options.__file = "resources\\assets\\js\\backend\\notFound.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0970d494", Component.options)
  } else {
    hotAPI.reload("data-v-0970d494", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("20d3ddb6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/._css-loader@0.28.11@css-loader/index.js!../../../../node_modules/._vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0970d494\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/._sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/._vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./notFound.vue", function() {
     var newContent = require("!!../../../../node_modules/._css-loader@0.28.11@css-loader/index.js!../../../../node_modules/._vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0970d494\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/._sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/._vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./notFound.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 100;\n  src: local(\"Raleway Thin\"), local(\"Raleway-Thin\"), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNwE44Q4FqPfE.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 100;\n  src: local(\"Raleway Thin\"), local(\"Raleway-Thin\"), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNwE44TYFq.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"Raleway SemiBold\"), local(\"Raleway-SemiBold\"), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwPIsWqhPAMif.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"Raleway SemiBold\"), local(\"Raleway-SemiBold\"), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwPIsWqZPAA.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\ndiv[data-v-0970d494] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nh2[data-v-0970d494] {\n  color: #666;\n  font-family: 'Raleway', sans-serif;\n  font-size: 84px;\n  margin-top: -40px;\n}\na[data-v-0970d494] {\n  color: #000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 42px;\n}\n", ""]);

// exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", [_vm._v("404")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/" } }, [_vm._v("Go to home page!")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0970d494", module.exports)
  }
}

/***/ })

});
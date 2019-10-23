((typeof self !== 'undefined' ? self : this)["webpackJsonpveasyadmin"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpveasyadmin"] || []).push([[1],{

/***/ "8e59":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/routerset/src/redirect/index.vue?vue&type=script&lang=js&

/* harmony default export */ var redirectvue_type_script_lang_js_ = ({
  created: function created() {
    var _this$$route = this.$route,
        params = _this$$route.params,
        query = _this$$route.query;
    var path = params.path;
    this.$router.replace({
      path: '/' + path,
      query: query
    });
  },
  render: function render(h) {
    return h(); // avoid warning message
  }
});
// CONCATENATED MODULE: ./packages/routerset/src/redirect/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_redirectvue_type_script_lang_js_ = (redirectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/routerset/src/redirect/index.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_redirectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var redirect = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=veasyadmin.common.1.js.map
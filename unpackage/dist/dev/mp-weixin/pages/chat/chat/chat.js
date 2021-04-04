(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat/chat"],{

/***/ 46:
/*!*****************************************************************************************!*\
  !*** C:/Users/replaceroot/Desktop/仿微信app/main.js?{"page":"pages%2Fchat%2Fchat%2Fchat"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat/chat.nvue */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!*********************************************************************!*\
  !*** C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=411c1acd&scoped=true& */ 48);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 52);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "411c1acd",
  null,
  false,
  _chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat/chat.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/*!****************************************************************************************************************!*\
  !*** C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=template&id=411c1acd&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=411c1acd&scoped=true& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 49:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=template&id=411c1acd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.mode = "text"
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 50:
/*!**********************************************************************************************!*\
  !*** C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































































var _vuex = __webpack_require__(/*! vuex */ 12);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var FreeNavBar = function FreeNavBar() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-nav-bar */ "components/free-ui/free-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 54));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var FreeIconButton = function FreeIconButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-icon-button */ "components/free-ui/free-icon-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-icon-button.vue */ 90));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var FreeChatItem = function FreeChatItem() {Promise.all(/*! require.ensure | components/free-ui/free-chat-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-chat-item")]).then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-chat-item.vue */ 95));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var FreePopup = function FreePopup() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-popup */ "components/free-ui/free-popup").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-popup.vue */ 68));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  name: 'ChatIndex',
  components: {
    FreeNavBar: FreeNavBar,
    FreeIconButton: FreeIconButton,
    FreeChatItem: FreeChatItem,
    FreePopup: FreePopup },

  props: {},
  data: function data() {
    return {
      // 模式：text输入文字，emoticon表情，action操作，audio音频
      mode: "text",
      text: "", // 用户输入的聊天信息
      KeyboardHeight: 0, // 键盘高度
      propIndex: -1, // 当前长按的聊天信息索引
      statusBarHeight: 0, // 系统状态栏高度
      navBarHeight: 0, // 导航栏高度
      actionList: [
      [{
        name: "相册",
        icon: "/static/images/extends/pic.png",
        event: "uploadImage" },
      {
        name: "拍摄",
        icon: "/static/images/extends/video.png",
        event: "" },
      {
        name: "收藏",
        icon: "/static/images/extends/shoucan.png",
        event: "" },
      {
        name: "名片",
        icon: "/static/images/extends/man.png",
        event: "" },
      {
        name: "语音通话",
        icon: "/static/images/extends/phone.png",
        event: "" },
      {
        name: "位置",
        icon: "/static/images/extends/path.png",
        event: "" }]],


      menus: [{
        name: '复制',
        event: "" },

      {
        name: '发送给朋友',
        event: "" },

      {
        name: '收藏',
        event: "" },

      {
        name: '删除',
        event: "" },

      {
        name: '多选',
        event: "" },

      {
        name: '撤回',
        event: "removeChatItem" }],


      list: [
      {
        avatar: "/static/images/demo/demo6.jpg",
        user_id: 2,
        nickname: "寻找阿诺泰的猪",
        type: "text", // image、audio、video
        data: '你还是放弃吧。',
        create_time: 1615533541,
        isRemove: true },

      {
        avatar: "/static/images/demo/demo5.jpg",
        user_id: 1,
        nickname: "Alexander",
        type: "text", // image、audio、video
        data: '做人就要坚持，做人不坚持不如做狗!',
        create_time: 161554034,
        isRemove: false },

      {
        avatar: "/static/images/demo/demo6.jpg",
        user_id: 2,
        nickname: "寻找阿诺泰的猪",
        type: "text", // image、audio、video
        data: '你还是放弃吧。',
        create_time: 1615580357,
        isRemove: true },

      {
        avatar: "/static/images/demo/demo5.jpg",
        user_id: 1,
        nickname: "Alexander",
        type: "text", // image、audio、video
        data: '做人就要坚持，做人不坚持不如做狗!',
        create_time: 1615581234,
        isRemove: false },

      {
        avatar: "/static/images/demo/demo6.jpg",
        user_id: 2,
        nickname: "寻找阿诺泰的猪",
        type: "text", // image、audio、video
        data: '你还是放弃吧。',
        create_time: 1616444341,
        isRemove: false },

      {
        avatar: "/static/images/demo/demo5.jpg",
        user_id: 1,
        nickname: "Alexander",
        type: "audio", // image、audio、video
        data: '/static/audio/01.mp3',
        create_time: 1616444341,
        isRemove: false },

      {
        avatar: "/static/images/demo/demo6.jpg",
        user_id: 2,
        nickname: "寻找阿诺泰的猪",
        type: "audio", // image、audio、video
        data: '/static/audio/02.mp3',
        create_time: 1616444341,
        isRemove: false },

      {
        avatar: "/static/images/demo/demo5.jpg",
        user_id: 1,
        nickname: "Alexander",
        type: "audio", // image、audio、video
        data: '/static/audio/03.mp3',
        create_time: 1616444941,
        isRemove: false }],


      emoticonList: [] };

  },
  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)({
    hello: function hello(state) {return state.audio.hello;} })), {}, {

    // 计算预览图片的列表
    previewImageList: function previewImageList() {
      var arrList = [];
      this.list.forEach(function (item) {
        if (item.type === 'emoticon' || item.type === 'image') {
          arrList.push(item.data);
        }
      });
      return arrList;
    },

    // 获取拓展菜单操作列表或者表情列表
    emoticonOrActionList: function emoticonOrActionList() {
      return this.mode === 'emoticon' || this.mode === 'action' ? this[this.mode + 'List'] : [];
    },

    // 计算蒙版距离底部的位置
    maskBottom: function maskBottom() {
      return this.KeyboardHeight + uni.upx2px(105);
    },

    // 设置内容区域高度
    setBodyBottom: function setBodyBottom() {
      return "bottom: ".concat(this.KeyboardHeight + uni.upx2px(105), "px;top: ").concat(this.navBarHeight, "px;");
    },

    // 设置菜单样式的计算属性
    setMenusStyle: function setMenusStyle() {
      return "height: ".concat(this.getMenusHeight, "rpx");
    },

    // 动态获取菜单高度,用于边界处理
    getMenusHeight: function getMenusHeight() {
      var h = 100;
      return this.menus.length * h;
    },

    // 动态设置菜单项
    setMenusList: function setMenusList() {var _this = this;
      return this.menus.filter(function (v) {
        if (v.name === '撤回' && !_this.isdoSelf) {
          // 该项聊天信息不是本人ID就进行隐藏操作
          return false;
        }
        return true;
      });
    },

    isdoSelf: function isdoSelf() {
      // 获取本人id （假设拿到了）
      var id = 1;
      var user_id = this.propIndex > -1 ? this.list[this.propIndex].user_id : 0;
      return user_id === id;
    } }),

  watch: {
    mode: {
      handler: function handler(newVal, oldVal) {
        // mode模式不为操作菜单并且不为表情包的时候关闭拓展菜单弹出层
        newVal !== 'action' && newVal !== 'emoticon' && this.$refs.extendMenuRef.hide();
        newVal !== 'text' && uni.hideKeyboard();
      } } },


  created: function created() {
    this.__init();
  },
  mounted: function mounted() {var _this2 = this;
    // 监听键盘高度的动态变化
    uni.onKeyboardHeightChange(function (res) {
      if (_this2.mode !== 'action' && _this2.mode !== 'emoticon') {
        // 不为操作拓展菜单模式并且不为表情包模式的时候才动态赋值键盘高度
        _this2.KeyboardHeight = res.height;
      }
      if (res.height > 0) {
        _this2.$nextTick(function (_) {
          _this2.setPageToBottom();
        });
      }
    });

    // NVUE环境下获取系统状态栏的高度



    this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
  },
  methods: {
    // 监听图片预览
    handlePreviewImage: function handlePreviewImage(e) {
      uni.previewImage({
        current: e.data,
        urls: this.previewImageList,
        indicator: 'default' });

    },

    // 初始化表情包数据列表函数
    __init: function __init() {
      // 一共有20张表情包，因此total = 20
      var total = 20;
      // 每个swiper-item里面有8张表情包，page为计算出来的总页数,此处为3
      var page = Math.ceil(total / 8);
      var arr = [];
      for (var i = 0; i < page; i++) {
        var start = i * 8;
        arr[i] = [];
        for (var j = 0; j < 8; j++) {
          var no = start + j;
          if (no + 1 > total) {
            break;
          }
          arr[i].push({
            name: '表情' + no,
            icon: "/static/images/emoticon/5497/".concat(no, ".gif"),
            event: 'sendEmoticon' });

        }
      }
      this.emoticonList = arr;
    },

    // 点击页面
    clickPage: function clickPage() {
      console.log('click page...');
      this.mode = '';
    },

    // 关闭底部拓展菜单
    onClosePopup: function onClosePopup() {
      this.KeyboardHeight = 0;
    },

    // 监听拓展菜单点击事件
    handleActionClick: function handleActionClick(e) {var _this3 = this;
      switch (e.event) {
        case 'uploadImage': // 上传图片
          uni.chooseImage({ // 选择相册
            count: 9,
            success: function success(res) {
              console.log("uploadImage res: ", res);
              res.tempFilePaths.forEach(function (item) {
                _this3.send('image', item);
              });
            } });

          break;
        case 'sendEmoticon': // 发送表情包
          this.send('emoticon', e.icon);}

    },

    // 底部拓展菜单展示
    openActionOrEmoticon: function openActionOrEmoticon() {var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'action';
      console.log("mode: ", mode);
      this.mode = mode, // 修改模式为操作拓展菜单的模式
      // 显示拓展菜单
      this.$refs.textareaRef.blur();
      this.$refs.extendMenuRef.show();
      // 收起键盘,此时键盘高度为0,但是不会马上就更新到模版中
      uni.hideKeyboard();
      this.KeyboardHeight = uni.upx2px(530);
    },

    // 发送聊天信息
    send: function send(type) {var _this4 = this;var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var chatObj = {
        avatar: "/static/images/demo/demo5.jpg",
        user_id: 1,
        nickname: "伤心的瘦子",
        type: type, // image、audio、video、emoticon
        data: "",
        create_time: Date.now(),
        isRemove: false };

      switch (type) {
        case 'text':
          chatObj.data = this.text;
          this.text = '';
          break;
        default:
          chatObj.data = data;
          break;}

      this.list.push(chatObj);
      this.$nextTick(function (_) {
        _this4.setPageToBottom();
      });
    },

    //　回到底部
    setPageToBottom: function setPageToBottom() {
      var chatItem = this.$refs.chatItemRef;
      var lastIndex = chatItem.length > 0 ? chatItem.length - 1 : 0;
      if (chatItem[lastIndex]) {
        dom.scrollToElement(chatItem[lastIndex], {});
      }
    },

    // 监听聊天信息弹出菜单点击事件
    handleMenuItemClick: function handleMenuItemClick(e) {
      switch (e) {
        case 'removeChatItem': // 撤回消息事件
          // 拿到当前操作的信息对象
          if (this.propIndex > -1) {
            this.list[this.propIndex].isRemove = true;
          }
          break;
        default:
          break;}

      // 关闭弹出菜单
      this.$refs.popupRef.hide();
    },

    // 监听聊天信息的长按事件
    handleLongPress: function handleLongPress(_ref) {var x = _ref.x,y = _ref.y,index = _ref.index;
      this.propIndex = index;
      this.$refs.popupRef.show(x, y);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 52:
/*!******************************************************************************************************!*\
  !*** C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 53);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/replaceroot/Desktop/仿微信app/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[46,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/chat/chat.js.map
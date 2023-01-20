(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_error-page_error-page_module_ts"],{

/***/ 887:
/*!*********************************************************!*\
  !*** ./src/app/error-page/error-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPagePageRoutingModule": () => (/* binding */ ErrorPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _error_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page.page */ 4126);




const routes = [{
  path: '',
  component: _error_page_page__WEBPACK_IMPORTED_MODULE_0__.ErrorPagePage
}];
let ErrorPagePageRoutingModule = class ErrorPagePageRoutingModule {};
ErrorPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ErrorPagePageRoutingModule);


/***/ }),

/***/ 6867:
/*!*************************************************!*\
  !*** ./src/app/error-page/error-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPagePageModule": () => (/* binding */ ErrorPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _error_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page-routing.module */ 887);
/* harmony import */ var _error_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page.page */ 4126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);









let ErrorPagePageModule = class ErrorPagePageModule {};
ErrorPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _error_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorPagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_error_page_page__WEBPACK_IMPORTED_MODULE_1__.ErrorPagePage]
})], ErrorPagePageModule);


/***/ }),

/***/ 4126:
/*!***********************************************!*\
  !*** ./src/app/error-page/error-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPagePage": () => (/* binding */ ErrorPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _error_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page.page.html?ngResource */ 2126);
/* harmony import */ var _error_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page.page.scss?ngResource */ 8959);
/* harmony import */ var _error_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




let ErrorPagePage = (_class = class ErrorPagePage {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
ErrorPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-error-page',
  template: _error_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_error_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ErrorPagePage);


/***/ }),

/***/ 8959:
/*!************************************************************!*\
  !*** ./src/app/error-page/error-page.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2126:
/*!************************************************************!*\
  !*** ./src/app/error-page/error-page.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n<div class=\"content-size\" style=\"padding: 12px; margin-bottom: 12px\">\n\n  <ion-card style=\"background-color: transparent; text-align: center; padding: 24px; margin: 0px; box-shadow: none; border: 0px dashed var(--ion-text-color);\">\n    <img style=\"display: block; margin: 0px auto 24px auto; width: 240px; \" src=\"assets/imgs/404.svg\"/>\n    <ion-label style=\"font-size: 22px; font-weight: 500;\">{{'404' | translate}}</ion-label>\n                         \n    <div style=\"display: flex; justify-content: center; margin: 18px 0px 0px 0px;\">\n      <ion-button href=\"/\" class=\"basicButton ion-activatable ripple-parent\">\n        <ion-icon name=\"pizza-outline\" style=\"margin: 0px 3px -1px 0px;\"></ion-icon>{{'HOME_PAGE' | translate}}\n      <ion-ripple-effect></ion-ripple-effect>\n      </ion-button>\n    </div>\n  </ion-card>\n  \n</div>\n\n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_error-page_error-page_module_ts.js.map
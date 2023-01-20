(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ulubione-page_ulubione-page_module_ts"],{

/***/ 8581:
/*!***************************************************************!*\
  !*** ./src/app/ulubione-page/ulubione-page-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UlubionePagePageRoutingModule": () => (/* binding */ UlubionePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ulubione_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ulubione-page.page */ 7653);




const routes = [{
  path: '',
  component: _ulubione_page_page__WEBPACK_IMPORTED_MODULE_0__.UlubionePagePage
}];
let UlubionePagePageRoutingModule = class UlubionePagePageRoutingModule {};
UlubionePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], UlubionePagePageRoutingModule);


/***/ }),

/***/ 5810:
/*!*******************************************************!*\
  !*** ./src/app/ulubione-page/ulubione-page.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UlubionePagePageModule": () => (/* binding */ UlubionePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ulubione_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ulubione-page-routing.module */ 8581);
/* harmony import */ var _ulubione_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ulubione-page.page */ 7653);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);









let UlubionePagePageModule = class UlubionePagePageModule {};
UlubionePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ulubione_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UlubionePagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_ulubione_page_page__WEBPACK_IMPORTED_MODULE_1__.UlubionePagePage]
})], UlubionePagePageModule);


/***/ }),

/***/ 7653:
/*!*****************************************************!*\
  !*** ./src/app/ulubione-page/ulubione-page.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UlubionePagePage": () => (/* binding */ UlubionePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ulubione_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ulubione-page.page.html?ngResource */ 7397);
/* harmony import */ var _ulubione_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ulubione-page.page.scss?ngResource */ 9102);
/* harmony import */ var _ulubione_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ulubione_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
var _class;






let UlubionePagePage = (_class = class UlubionePagePage {
  constructor(settings, route) {
    this.settings = settings;
    this.route = route;
    document.documentElement.setAttribute("lang", this.settings.langCode);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.settings.langCode = this.route.snapshot.paramMap.get("lang");
    });
  }
}, _class.ctorParameters = () => [{
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_2__.Settings
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
UlubionePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-ulubione-page',
  template: _ulubione_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ulubione_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UlubionePagePage);


/***/ }),

/***/ 9102:
/*!******************************************************************!*\
  !*** ./src/app/ulubione-page/ulubione-page.page.scss?ngResource ***!
  \******************************************************************/
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

/***/ 7397:
/*!******************************************************************!*\
  !*** ./src/app/ulubione-page/ulubione-page.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <h5 *ngIf=\"settings.favoriteLegends.length == 0\" style=\"width: 100%; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\n    <img style=\"display: block; margin-left: auto; margin-right: auto; width: 128px; padding-bottom: 12px;\" src=\"assets/imgs/ulubione.svg\"/>\n    <p style=\"text-align: center; font-size: 18pt; font-weight: 500; padding-top: 6px; padding-right: 24px; padding-left: 24px; margin: 0px !important;\">{{'NO_FAV' | translate}}</p>\n    <p style=\"text-align: center; font-size: 10pt; font-weight: 500; padding-top: 6px; padding-right: 24px; padding-left: 24px; margin: 0px !important;\">{{'FAV_DESC' | translate}}</p>\n  </h5>\n\n\n<div *ngIf=\"settings.favoriteLegends.length > 0\" class=\"content-size\" style=\"padding: 1px 0px 16px 0px;\">\n  <p style=\"text-align: center; font-size: 20pt; font-weight: 500; padding-top: 12px; padding-right: 24px; padding-left: 24px; margin: 0px !important;\">· {{'FAVOURITE' | translate}} ·</p>\n  <ion-card *ngFor=\"let legenda of settings.favoriteLegends\" [routerLink]=\"['/' + settings.langCode,'legenda',legenda?.Slug]\" class=\"ion-activatable ripple-parent\" style=\"--ripple-color: var(--ion-border-color-2) !important; border: 1px solid var(--ion-border-color); margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;\">\n        <div *ngIf=\"!legenda?.FeaturedImage\">\n          <img style=\"width: 100%; background-color: var(--ion-border-color); opacity: 0.6;\" src=\"assets/imgs/placeholder.png\" alt=\"Placeholder image\"/>\n          <ion-thumbnail style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\"><ion-skeleton-text animated></ion-skeleton-text></ion-thumbnail>\n        </div>\n        \n        <ion-card-content *ngIf=\"legenda?.FeaturedImage\" style=\"padding: 0px;\">\n          <img loading=\"lazy\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{legenda?.FeaturedImage}}\" alt=\"{{legenda?.Title}}\"/>\n          \n          <div style=\"margin: -48px 0px 0px 2px;\">\n            <div *ngIf=\"legenda?.Points > 0\" class=\"postChip\">\n              <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); font-size: 10pt; margin: 0px 5px -2.5px 0px;\"></ion-icon>\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">{{'PREMIUM' | translate}}</ion-label>\n            </div>\n    \n            <div class=\"postChip\">\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">· {{legenda?.Date}} ·</ion-label>\n            </div>\n            \n            <div *ngIf=\"legenda?.formatted_date\" class=\"postChip\">\n              <img loading=\"lazy\" style=\"width: 16px; height: 16px; margin: 0px 0px -5px 0px;\" src=\"assets/imgs/{{legenda?.lang}}.png\" alt=\"Language\"/>\n            </div>\n                        \n          </div>\n        </ion-card-content>\n        \n        <ion-card-content style=\"text-align: left; padding: 22px 12px 12px 12px;\">\n          <ion-label style=\"font-weight: regular; font-size: 22px; line-height: 22px;\" [innerHTML]=\"legenda?.Title\"></ion-label>\n          <p style=\"font-size: 12pt; font-weight: 500; padding-top: 6px;\" [innerHTML]=\"legenda?.Excerpt\"></p>\n        </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n  </ion-card> \n</div>\n\n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_ulubione-page_ulubione-page_module_ts.js.map
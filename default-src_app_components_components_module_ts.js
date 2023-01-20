(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 9258:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/footer/footer.component */ 241);




let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  exports: [src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ComponentsModule);


/***/ }),

/***/ 241:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 3033);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commonfunction.service */ 5806);
var _class;






let FooterComponent = (_class = class FooterComponent {
  constructor(settings, CFS) {
    this.settings = settings;
    this.CFS = CFS;
  }
  ngOnInit() {}
  link(url) {
    window.open(url, "_blank");
  }
}, _class.ctorParameters = () => [{
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_2__.Settings
}, {
  type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__.CommonfunctionService
}], _class);
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 3033:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1024px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: flex;\n  }\n  .first-box {\n    width: 44%;\n  }\n  .sec-box {\n    width: 56%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: flex;\n  }\n  .first-box {\n    width: 100%;\n  }\n  .sec-box {\n    width: 100%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom;\n  }\n}\n@media (max-width: 767px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: block;\n  }\n  .first-box {\n    width: 100%;\n  }\n  .sec-box {\n    width: 100%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom;\n  }\n}\n.footer {\n  border-top: 1px solid var(--ion-border-color-2);\n  padding: 12px 16px;\n  background-color: var(--ion-background-color);\n}\n\n.footer-url {\n  padding: 12px 0px;\n  margin: 0px;\n  font-size: 16px;\n  color: var(--ion-text-color);\n  text-decoration: none;\n  width: 120px;\n  display: block;\n  opacity: 0.7;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.footer-url img {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  transform: translateY(-50%);\n  transform: rotate(0deg);\n  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.footer-url:hover {\n  opacity: 1;\n}\n.footer-url:hover img {\n  transform: rotate(45deg);\n}\n\n.label-footer {\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.copy-button {\n  cursor: copy;\n  margin: 0px;\n  padding: 12px 0px;\n  width: 400px;\n  font-size: 14px;\n  color: rgba(var(--ion-url-color-rgb), 1);\n}\n.copy-button:active {\n  animation: blink-1 0.6s both;\n}\n@keyframes blink-1 {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n  25%, 75% {\n    opacity: 0;\n  }\n}\n.marquee {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  background: #ffffff;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n}\n\n.marquee .text {\n  display: inline-block;\n  padding: 6px 80px 12px 0px;\n  animation: marquee 12s linear infinite;\n  font-size: 50px;\n  letter-spacing: 10px;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/components/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EACE;IACE,wBAAA;IACA,aAAA;EACF;EACA;IACE,UAAA;EACF;EACA;IACE,UAAA;EACF;EACA;IACE,UAAA;IACA,qBAAA;IACA,sBAAA;EACF;AACF;AAEA;EACE;IACE,wBAAA;IACA,aAAA;EAAF;EAEA;IACE,WAAA;EAAF;EAEA;IACE,WAAA;EAAF;EAEA;IACE,UAAA;IACA,qBAAA;IACA,sBAAA;EAAF;AACF;AAGA;EACE;IACE,wBAAA;IACA,cAAA;EADF;EAGA;IACE,WAAA;EADF;EAGA;IACE,WAAA;EADF;EAGA;IACE,UAAA;IACA,qBAAA;IACA,sBAAA;EADF;AACF;AAKA;EACE,+CAAA;EACA,kBAAA;EACA,6CAAA;AAHF;;AAMA;EACE,iBAAA;EACA,WAAA;EACA,eAAA;EACA,4BAAA;EACA,qBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EAEA,wDAAA;AAHF;AAKE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EAEA,2BAAA;EACA,uBAAA;EAEA,wDAAA;AAHJ;AAME;EACC,UAAA;AAJH;AAMI;EACE,wBAAA;AAJN;;AASA;EACE,eAAA;EACA,yBAAA;AANF;;AASA;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,wCAAA;AANF;AAQE;EAEE,4BAAA;AANJ;AAsBA;EACE;IAGE,UAAA;EAbF;EAeA;IAEE,UAAA;EAdF;AACF;AAkBA;EACE,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EAGA,aAAA;EACA,mBAAA;AAhBF;;AAmBA;EACE,qBAAA;EACA,0BAAA;EACA,sCAAA;EACA,eAAA;EACA,oBAAA;EACA,yBAAA;EACA,cAAA;AAhBF;;AAmBA;EACE;IACE,0BAAA;EAhBF;EAmBA;IACE,8BAAA;EAjBF;AACF","sourcesContent":["@media (min-width: 1024px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: flex;\n  }\n  .first-box {\n    width: 44%;\n  }\n  .sec-box {\n    width: 56%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom; \n  }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: flex;\n  }\n  .first-box {\n    width: 100%;\n  }\n  .sec-box {\n    width: 100%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom; \n  }\n}\n\n@media (max-width: 767px) {\n  .footer-top {\n    margin: 0px 0px 74px 0px;\n    display: block;\n  }\n  .first-box {\n    width: 100%;\n  }\n  .sec-box {\n    width: 100%;\n  }\n  .inner-box {\n    width: 50%;\n    display: inline-block;\n    vertical-align: bottom; \n  }\n}\n\n\n.footer {\n  border-top: 1px solid var(--ion-border-color-2);\n  padding: 12px 16px;\n  background-color: var(--ion-background-color);\n}\n\n.footer-url {\n  padding: 12px 0px;\n  margin: 0px;\n  font-size: 16px;\n  color: var(--ion-text-color);\n  text-decoration: none;\n  width: 120px;\n  display: block;\n  opacity: 0.7;\n  position: relative;\n  -webkit-transition: all 0.4s cubic-bezier(0.075, 0.820, 0.165, 1.000);\n  transition: all 0.4s cubic-bezier(0.075, 0.820, 0.165, 1.000);\n    \n  & img {\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    -ms-transform: translateY(-50%); \n    transform: translateY(-50%);\n    transform: rotate(0deg);\n    -webkit-transition: all 0.4s cubic-bezier(0.075, 0.820, 0.165, 1.000);\n    transition: all 0.4s cubic-bezier(0.075, 0.820, 0.165, 1.000);\n  }\n  \n  &:hover {\n  \topacity: 1;\n  \t\n    & img {\n      transform: rotate(45deg);\n    }\n  }\n}\n\n.label-footer {\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.copy-button {\n  cursor: copy;\n  margin: 0px;\n  padding: 12px 0px;\n  width: 400px;\n  font-size: 14px;\n  color: rgba(var(--ion-url-color-rgb), 1);\n  \n  &:active {\n    -webkit-animation: blink-1 0.6s both;\n    animation: blink-1 0.6s both;\n  }\n}\n\n@-webkit-keyframes blink-1 {\n  0%,\n  50%,\n  100% {\n    opacity: 1;\n  }\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n@keyframes blink-1 {\n  0%,\n  50%,\n  100% {\n    opacity: 1;\n  }\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n\n.marquee {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  background: #ffffff;\n  opacity: 0.7;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n}\n\n.marquee .text {\n  display: inline-block;\n  padding: 6px 80px 12px 0px;\n  animation: marquee 12s linear infinite;\n  font-size: 50px;\n  letter-spacing: 10px;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"footer\">\n  \n  <!-- TOP\n  <div class=\"footer-top\">\n    <div class=\"first-box\">\n\n\n      <div class=\"inner-box\">\n        <p class=\"label-footer\">C.</p>\n        \n        <a href=\"\" target=\"_blank\" style=\"width: 260px;\" class=\"footer-url\" cursor-class=\"arrow\">Ethereum Smart Contract Address <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n        \n        <p class=\"copy-button\"><ion-icon name=\"copy-outline\" style=\"font-size: 12px; margin: 0px 0px -2px 0px;\"></ion-icon> {{settings.ethereumContract}}</p>\n\n        <a href=\"\" target=\"_blank\" style=\"width: 260px;\" class=\"footer-url\" cursor-class=\"arrow\">Polygon Smart Contract Address <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n        \n        <p (click)=\"copy(settings.polygonContract)\" class=\"copy-button\"><ion-icon name=\"copy-outline\" style=\"font-size: 12px; margin: 0px 0px -2px 0px;\"></ion-icon> {{settings.polygonContract}}</p>\n\n        \n      </div>\n\n    </div>\n\n    <div class=\"sec-box\">\n    \n\n      <div class=\"inner-box\">\n        <p class=\"label-footer\">S.</p>\n\n        <a href=\"{{settings.twitter}}\" rel=\"nofollow\" target=\"_blank\" class=\"footer-url\" cursor-class=\"arrow\">TWITTER <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n        \n        <a href=\"{{settings.opensea}}\" rel=\"nofollow\" target=\"_blank\" class=\"footer-url\" cursor-class=\"arrow\">OPENSEA <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n      \n        <a href=\"{{settings.medium}}\" rel=\"nofollow\" target=\"_blank\" class=\"footer-url\" cursor-class=\"arrow\">MEDIUM <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n\n\n        <p class=\"label-footer\">E.</p>\n      \n        <a href=\"mailto:{{settings.email}}\" target=\"_blank\" class=\"footer-url\" cursor-class=\"arrow\">EMAIL <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n        \n        <a href=\"{{settings.pressKit}}\" download=\"WlunaRichGang - PRESS KIT\" class=\"footer-url\" cursor-class=\"arrow\">PRESS KIT <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n      </div>\n      \n\n      <div class=\"inner-box\">\n        <p class=\"label-footer\">M.</p>\n        <a [routerLink]=\"['/']\" class=\"footer-url\" cursor-class=\"arrow\">HOME <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n      \n        <a href=\"/#about\" class=\"footer-url\" cursor-class=\"arrow\">ABOUT <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n\n        <a href=\"/#exchanges\" class=\"footer-url\" cursor-class=\"arrow\">BUY/SELL <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n\n        <a href=\"{{settings.whitepaper}}\" target=\"_blank\" class=\"footer-url\" cursor-class=\"arrow\">WHITEPAPER <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n        \n        <a [routerLink]=\"['/terms']\" class=\"footer-url\" cursor-class=\"arrow\">TERMS <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n\n        <a [routerLink]=\"['/privacy']\" class=\"footer-url\" cursor-class=\"arrow\">PRIVACY <img src=\"assets/imgs/arrow-{{settings.darkMode}}.svg\" alt=\"Arrow\"/></a>\n      </div>\n      \n    </div>\n  </div> -->\n    \n    \n  <p class=\"footer-url\" style=\"width: 260px; padding: 0px 0px 34px 0px\">2021-{{settings.currentYear}} basniezmazur.pl</p>\n\n<div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_roadmap-page_roadmap-page_module_ts"],{

/***/ 2162:
/*!*************************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadmapPagePageRoutingModule": () => (/* binding */ RoadmapPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _roadmap_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roadmap-page.page */ 9024);




const routes = [{
  path: '',
  component: _roadmap_page_page__WEBPACK_IMPORTED_MODULE_0__.RoadmapPagePage
}];
let RoadmapPagePageRoutingModule = class RoadmapPagePageRoutingModule {};
RoadmapPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RoadmapPagePageRoutingModule);


/***/ }),

/***/ 9939:
/*!*****************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadmapPagePageModule": () => (/* binding */ RoadmapPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _roadmap_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roadmap-page-routing.module */ 2162);
/* harmony import */ var _roadmap_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roadmap-page.page */ 9024);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let RoadmapPagePageModule = class RoadmapPagePageModule {};
RoadmapPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _roadmap_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoadmapPagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_roadmap_page_page__WEBPACK_IMPORTED_MODULE_1__.RoadmapPagePage]
})], RoadmapPagePageModule);


/***/ }),

/***/ 9024:
/*!***************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadmapPagePage": () => (/* binding */ RoadmapPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _roadmap_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roadmap-page.page.html?ngResource */ 9493);
/* harmony import */ var _roadmap_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roadmap-page.page.scss?ngResource */ 4013);
/* harmony import */ var _roadmap_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_roadmap_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Service */ 8914);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
var _class;







let RoadmapPagePage = (_class = class RoadmapPagePage {
  constructor(service, route, settings) {
    this.service = service;
    this.route = route;
    this.settings = settings;
    this.roadmap = [];
    this.settings.langCode = this.route.snapshot.paramMap.get("lang");
    // this.loadRoadmap(this.settings.langCode);
    document.documentElement.setAttribute("lang", this.settings.langCode);
  }
  loadRoadmap(lang) {
    this.service.getRecentRoadmap(lang).then(response => {
      if (response['error']) {
        this.loadingRoadmap = false;
      } else if (response) {
        this.roadmap = this.roadmap.concat(response);
      }
    });
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: src_app_services_Service__WEBPACK_IMPORTED_MODULE_2__.Service
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__.Settings
}], _class);
RoadmapPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-roadmap-page',
  template: _roadmap_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_roadmap_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoadmapPagePage);


/***/ }),

/***/ 4013:
/*!****************************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".timeline {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: -18px;\n  padding: 1em 0;\n  list-style-type: none;\n}\n\n.timeline:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: \" \";\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: rgb(80, 80, 80);\n  background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);\n  z-index: 5;\n}\n\n.timeline li {\n  padding: 1em 0;\n}\n\n.timeline li:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.flag-wrapper {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.time-wrapper {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  vertical-align: middle;\n}\n\n.timeline {\n  width: 100%;\n  padding: 4em 0 1em 0;\n}\n\n.timeline li {\n  padding: 2em 0;\n}\n\n.box {\n  float: none;\n  width: 300px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.flag {\n  position: relative;\n  display: inline;\n  background: var(--ion-card-background);\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--ion-border-color);\n  font-weight: 600;\n  text-align: left;\n  z-index: 15;\n}\n\n.flag:before {\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  content: \" \";\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-left: -9px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid var(--flag-color);\n  z-index: 10;\n}\n\n.flag:after {\n  content: \"\";\n  position: absolute;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: var(--ion-card-background);\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.flag:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  height: 0;\n  width: 0;\n  margin-left: -8px;\n  border: solid transparent;\n  border-bottom-color: var(--ion-card-background);\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.desc {\n  position: relative;\n  margin: 12px;\n  font-size: 13px;\n  line-height: 1.5em;\n  padding: 12px;\n  background: var(--ion-card-background);\n  border: 1px solid var(--ion-border-color);\n  border-radius: 8px;\n  z-index: 15;\n}", "",{"version":3,"sources":["webpack://./src/app/roadmap-page/roadmap-page.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,MAAA;EACA,YAAA;EACA,cAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;EACA,2BAAA;EAMA,iIAAA;EACA,UAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,WAAA;EACA,cAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,sBAAA;AACF;;AAEA;EACE,WAAA;EACD,oBAAA;AACD;;AAEA;EACC,cAAA;AACD;;AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;EACA,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACI,kBAAA;EACA,UAAA;EACH,SAAA;EACA,YAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mCAAA;EACA,WAAA;AACD;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,8CAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACC,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,SAAA;EACA,QAAA;EACA,iBAAA;EACA,yBAAA;EACA,+CAAA;EACA,iBAAA;EACA,oBAAA;AACD;;AAEA;EACE,kBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,sCAAA;EACA,yCAAA;EACA,kBAAA;EACA,WAAA;AACF","sourcesContent":[".timeline {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: -18px;\n  padding: 1em 0;\n  list-style-type: none;\n}\n\n.timeline:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: ' ';\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: rgb(80,80,80);\n  background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));\n  background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  z-index: 5;\n}\n\n.timeline li {\n  padding: 1em 0;\n}\n\n.timeline li:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.flag-wrapper {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.time-wrapper {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  vertical-align: middle;\n}\n\n.timeline {\n \twidth: 100%;\n\tpadding: 4em 0 1em 0;\n}\n\n.timeline li {\n\tpadding: 2em 0;\n}\n\n.box {\n  float: none;\n  width: 300px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.flag {\n  position: relative;\n  display: inline;\n  background: var(--ion-card-background);\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--ion-border-color);\n  font-weight: 600;\n  text-align: left;\n  z-index: 15;\n}\n\n.flag:before {\n    position: absolute;\n    top: -30px;\n\tleft: 50%;\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 12px;\n\theight: 12px;\n\tmargin-left: -9px;\n\tmargin-top: -10px;\n\tbackground: #fff;\n\tborder-radius: 10px;\n\tborder: 4px solid var(--flag-color);\n\tz-index: 10;\n}\n\n.flag:after {\n  content: \"\";\n  position: absolute;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: var(--ion-card-background);\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.flag:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: 50%;\n\ttop: -8px;\n\theight: 0;\n\twidth: 0;\n\tmargin-left: -8px;\n\tborder: solid transparent;\n\tborder-bottom-color: var(--ion-card-background);\n\tborder-width: 8px;\n\tpointer-events: none;\n}\n\n.desc {\n  position: relative;\n  margin: 12px;\n  font-size: 13px;\n  line-height: 1.5em;\n  padding: 12px;\n  background: var(--ion-card-background);\n  border: 1px solid var(--ion-border-color);\n  border-radius: 8px;\n  z-index: 15;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9493:
/*!****************************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\" fullscreen>\n<div class=\"content-size\">\n\n  <h1 style=\"text-align: center;\">{{'ROADMAP' | translate}}</h1>\n  <p style=\"text-align: center; margin: 0px auto 48px auto; width: 350px;\">{{'ROADMAP_DESC' | translate}}</p>\n  \n  <ul class=\"timeline\">\n\t<li *ngFor=\"let post of settings.roadmap\">\n\t\t<div *ngIf=\"post?.wykonane\" class=\"box\">\n\t\t\t<div class=\"flag-wrapper\">\n\t\t\t\t<span style=\"--flag-color: green;\" class=\"flag\">{{post?.tytul}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"desc\" [innerHTML]=\"post?.opis\"></div>\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"!post?.wykonane\" class=\"box\">\n\t\t\t<div class=\"flag-wrapper\">\n\t\t\t\t<span style=\"--flag-color: var(--ion-color-gold);\" class=\"flag\">{{post?.tytul}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"desc\" [innerHTML]=\"post?.opis\"></div>\n\t\t</div>\n\t</li>\n  </ul>\n\n\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_roadmap-page_roadmap-page_module_ts.js.map
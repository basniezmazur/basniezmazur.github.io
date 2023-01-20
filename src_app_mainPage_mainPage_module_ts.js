(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mainPage_mainPage_module_ts"],{

/***/ 8185:
/*!*****************************************************!*\
  !*** ./src/app/mainPage/mainPage-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mainPage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.page */ 3315);




const routes = [{
  path: '',
  component: _mainPage_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
}];
let MainPageRoutingModule = class MainPageRoutingModule {};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MainPageRoutingModule);


/***/ }),

/***/ 9143:
/*!*********************************************!*\
  !*** ./src/app/mainPage/mainPage.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _mainPage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage-routing.module */ 8185);
/* harmony import */ var _mainPage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.page */ 3315);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);









let MainPageModule = class MainPageModule {};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _mainPage_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  providers: [],
  declarations: [_mainPage_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
})], MainPageModule);


/***/ }),

/***/ 3315:
/*!*******************************************!*\
  !*** ./src/app/mainPage/mainPage.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mainPage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.page.html?ngResource */ 4767);
/* harmony import */ var _mainPage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.page.scss?ngResource */ 8733);
/* harmony import */ var _mainPage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mainPage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Service */ 8914);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
var _class;








let MainPage = (_class = class MainPage {
  constructor(service, translate, route, settings) {
    this.service = service;
    this.translate = translate;
    this.route = route;
    this.settings = settings;
    this.legendy = [];
    this.loadingLegenda = true;
    this.lastNumberLegenda = 20;
    this.pageLegenda = 1;
    this.noMorePosts = false;
    this.searchLegenda = '';
    this.searchingFor = false;
    this.searchingLegenda = false;
    this.infinityShow = false;
    this.settings.langCode = this.route.snapshot.paramMap.get("lang");
    document.documentElement.setAttribute("lang", this.settings.langCode);
  }
  loadMoreLegendy(lang) {
    this.loadingLegenda = true;
    this.searchingFor = true;
    this.service.getRecentLegendy(this.pageLegenda, this.searchLegenda, lang).then(response => {
      if (response['error']) {
        // console.log(response['error'])
        this.lastNumberLegenda = 0;
        this.loadingLegenda = false;
        this.searchingFor = true;
        if (this.refreshEvent) this.refreshEvent.target.complete();
        if (this.infinityLegendyEvent) this.infinityLegendyEvent.target.complete();
      } else if (response) {
        // console.log(response);
        this.legendy = this.legendy.concat(response);
        this.legendy.forEach(Legenda => {
          if (this.settings.isPro === true) {
            Legenda.ACF.wersja_pro = false;
          }
        });
        this.lastNumberLegenda = response.length;
        this.pageLegenda = this.pageLegenda + 1;
        this.loadingLegenda = false;
        this.searchingFor = false;
        if (this.refreshEvent) this.refreshEvent.target.complete();
        if (this.infinityLegendyEvent) this.infinityLegendyEvent.target.complete();
      }
    });
  }
  searchLegendy() {
    this.searchingLegenda = true;
    this.noMorePosts = false;
    this.loadMoreLegendy(this.settings.langCode);
  }
  resetSearchLegendy() {
    this.loadingLegenda = true;
    this.searchingLegenda = false;
    this.searchingFor = false;
    this.searchLegenda = '';
    this.legendy.length = null;
    this.lastNumberLegenda = 0;
    this.pageLegenda = 1;
    this.loadMoreLegendy(this.settings.langCode);
  }
  resetSearch() {
    this.loadingLegenda = true;
    this.searchingFor = false;
    this.legendy.length = null;
    this.lastNumberLegenda = 0;
    this.pageLegenda = 1;
  }
  infinityLegendy(event) {
    this.infinityLegendyEvent = event;
    this.loadMoreLegendy(this.settings.langCode);
    setTimeout(() => {
      event.target.complete();
    }, 2400);
  }
  doRefresh(event) {
    this.legendy.length = null;
    this.lastNumberLegenda = 10;
    this.pageLegenda = 1;
    this.loadingLegenda = false;
    this.refreshEvent = event;
    this.loadMoreLegendy(this.settings.langCode);
  }
  madeRefresh(event) {
    location.reload();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: src_app_services_Service__WEBPACK_IMPORTED_MODULE_2__.Service
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__.Settings
}], _class);
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'mainPage',
  template: _mainPage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_mainPage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MainPage);


/***/ }),

/***/ 8733:
/*!********************************************************!*\
  !*** ./src/app/mainPage/mainPage.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".source-button {\n  text-align: left;\n  margin: 18px !important;\n  padding: 18px;\n  box-shadow: none;\n  border-radius: 12px;\n  display: flex;\n  --box-shadow: none;\n  box-shadow: 0px;\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n}\n\n.etykieta {\n  opacity: 0.5;\n}\n\nion-list ion-label {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-list ion-icon {\n  font-size: 18px;\n}\n\n.FaButton {\n  width: 112px;\n  height: 44px;\n  --box-shadow: 0px 3px 14px -4px var(--ion-color-gold);\n  border: 1px solid var(--ion-color-gold);\n  --background: #1e1f21 !important;\n  --color: var(--ion-color-gold);\n  border-radius: 8px;\n  --border-radius: 8px;\n  padding: 0px;\n  margin-bottom: 9px;\n  margin-left: -28.5px;\n}\n.FaButton ion-icon {\n  font-size: 18px;\n  margin-right: 6px;\n  margin-top: -1px;\n}\n.FaButton ion-label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.resetButton {\n  width: auto;\n  height: 57px;\n  --box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.53);\n  border-radius: 8px 0px 0px 0px;\n  --border-radius: 0px 8px 8px 0px;\n  padding: 0px;\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  z-index: 10;\n  --background: var(--ion-text-color);\n  color: var(--ion-background-color) !important;\n  text-transform: capitalize;\n}\n.resetButton ion-icon {\n  font-size: 18px;\n  margin-right: 6px;\n  margin-top: -1px;\n}\n.resetButton ion-label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.website {\n  width: auto;\n  background-color: transparent;\n  --background: transparent;\n  color: rgba(255, 255, 255, 0.3764705882);\n  border-radius: 3px;\n  border: 0px solid var(--ion-border-color);\n  font-weight: 600;\n  font-size: 8pt;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 16px;\n  --box-shadow: none;\n  --border-radius: 3px;\n  box-shadow: none;\n  margin: 3px;\n  padding: 0px !important;\n}\n\n.actBtn4 {\n  border-radius: 3px;\n  border: 0px solid var(--ion-border-color);\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 38px;\n  width: auto;\n  --box-shadow: none;\n  --background: var(--ion-border-color);\n  --border-radius: 3px;\n  box-shadow: none;\n  margin-bottom: 12px !important;\n  margin-top: 0px !important;\n  margin-left: 3px !important;\n  margin-right: 3px !important;\n  padding: 0px !important;\n}\n\n.backVid {\n  padding: 0px;\n  margin: 16px !important;\n  -webkit-box-shadow: none;\n  border: 1px solid var(--ion-border-color);\n  box-shadow: none;\n  border-radius: 6px !important;\n}\n\n.img-holder {\n  display: inline-block;\n  width: 100%;\n  height: 75%;\n  overflow: hidden;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.img-holder img {\n  display: inline-block;\n  width: 100%;\n  height: 75%;\n  margin: -12% 0;\n}\n\n.backImg2 {\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n}\n\n.actBtn44 {\n  color: var(--ion-text-color);\n  border-radius: 50px;\n  border: 1px solid rgba(0, 71, 66, 0.4392156863);\n  background-color: transparent;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 0px;\n  text-transform: none;\n  min-height: 54px;\n  width: 54px;\n  --box-shadow: none;\n  --background: transparent;\n  --border-radius: 50px;\n  box-shadow: none;\n  margin-bottom: 12px !important;\n  margin-top: 0px !important;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.backImgNull {\n  height: 100%;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n  background-color: var(--ion-background-color) !important;\n}\n\n.backImg2 {\n  background-position: center !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n  padding: 0px;\n  margin: 0px !important;\n  box-shadow: none;\n  border: 1px solid var(--ion-border-color);\n  border-radius: 6px;\n  height: 232px;\n  display: flex;\n}\n\n.play-button {\n  display: flex;\n  width: 100%;\n  text-align: center;\n  margin: 0px !important;\n  background-color: var(--ion-color-primary);\n  --background: var(--ion-color-primary);\n  border-radius: 12px;\n  --border-radius: 12px;\n  border-color: #e3e3e3;\n  border-style: solid;\n  border-width: 0px;\n  color: #ffffff;\n  --color: #ffffff;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 47px;\n  --box-shadow: none;\n  box-shadow: none;\n  margin-right: 6px;\n}\n\nion-tab-bar {\n  display: none;\n}\n\nion-select::part(text) {\n  display: none;\n}\n\nion-item::part(native) {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: unset;\n  padding-inline-end: unset;\n  background-color: rgba(51, 51, 51, 0) !important;\n}\n\nion-select::part(icon) {\n  display: none;\n}\n\n.select-speed {\n  text-align: center;\n  font-size: 18px;\n  border-radius: 30%;\n  --border-radius: 30%;\n  padding: 0;\n  position: relative;\n  right: 0px;\n  width: 48px;\n  height: 48px;\n  line-height: 1px;\n  box-shadow: none;\n  opacity: 1;\n  color: var(--ion-text-color);\n  background-color: var(--ion-background-color) !important;\n  padding-inline-start: 0px !important;\n}\n\n.togleFav ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all 0.3s;\n  opacity: 0;\n  font-size: 22px;\n}\n.togleFav ion-icon.zmdi-bookmark-outline {\n  width: 22px;\n  height: 22px;\n  opacity: 1;\n}\n\nbutton.active ion-icon.zmdi-bookmark-outline {\n  width: 0px;\n  height: 0px;\n  opacity: 0;\n}\nbutton.active ion-icon.zmdi-bookmark {\n  width: 22px;\n  height: 22px;\n  opacity: 1;\n  color: var(--primary);\n}\n\n.zwiedza-tlo {\n  width: 100%;\n  height: 350px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 0px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  padding: 0px;\n  background-color: #00A698 !important;\n}\n\n.parallax-image3 {\n  z-index: -5;\n  margin: 0px !important;\n  padding-bottom: 0px;\n  box-shadow: none;\n  border: none;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 18px;\n  width: 100%;\n  height: 350px;\n  margin-bottom: 0px !important;\n  overflow: hidden;\n  background-position: center !important;\n  background-size: cover !important;\n  transition: opacity 350ms linear;\n}\n\n.zwiedza-wstep {\n  transition: opacity 350ms linear;\n  padding: 12px;\n  box-shadow: none;\n  margin: 0px;\n  position: absolute;\n  left: 18px;\n  right: 18px;\n  bottom: 20px;\n  width: auto;\n  border-radius: 18px;\n}\n\n.zwiedza-tyt {\n  font-size: 14pt;\n  font-weight: 600;\n  white-space: normal;\n}\n\ndiv h2 {\n  margin: 0;\n  font-size: 1.6rem;\n}\ndiv ion-card .item_inner {\n  width: 100%;\n}\ndiv ion-card .item_inner .item_image {\n  width: 100%;\n  height: 170px;\n}\ndiv ion-card .item_inner .item_image h4 {\n  position: absolute;\n  bottom: 14px;\n  left: 15px;\n  margin: 0;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-weight: 400;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.7rem;\n  padding: 4px 23px;\n  letter-spacing: 0.5px;\n}\ndiv ion-card .item_inner .item_image h4.helth_care {\n  background: #a1e548;\n}\ndiv ion-card .item_inner .item_image h4.life_style {\n  background: #23ecdb;\n}\ndiv ion-card .item_inner .item_image h4.family {\n  background: #ffc016;\n}\ndiv ion-card .item_inner .item_detail {\n  padding: 16px;\n  width: 100%;\n}\ndiv ion-card .item_inner .item_detail p {\n  margin: 0;\n  font-weight: 500;\n  font-size: 1.13rem;\n  padding-bottom: 10px;\n}\ndiv ion-card .item_inner .item_detail h5 {\n  margin: 0;\n  font-size: 0.75rem;\n}\ndiv ion-card .item_inner .item_detail h5 span {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n}\ndiv ion-card .item_inner .item_detail h5 span small {\n  font-size: 0.75rem;\n  color: #ffd05d;\n  display: flex;\n  align-items: center;\n}\ndiv ion-card .item_inner .item_detail h5 span small img {\n  width: 20px;\n}", "",{"version":3,"sources":["webpack://./src/app/mainPage/mainPage.page.scss"],"names":[],"mappings":"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","sourcesContent":[".source-button {\n  text-align: left;\n  margin: 18px !important;\n  padding: 18px;\n  box-shadow: none;\n  border-radius: 12px;\n  display: flex;\n  --box-shadow: none;\n  box-shadow: 0px;\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n}\n\n\n\n.etykieta {\n  opacity: 0.5;\n}\n\nion-list {\n  ion-label {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n  ion-icon {\n    font-size: 18px;\n  }\n}\n\n\n.FaButton {\n  width: 112px;\n  height: 44px;\n  --box-shadow: 0px 3px 14px -4px var(--ion-color-gold);\n  border: 1px solid var(--ion-color-gold);\n  --background: #1e1f21 !important;\n  --color: var(--ion-color-gold);\n  border-radius: 8px;\n  --border-radius: 8px;\n  padding: 0px;\n  margin-bottom: 9px;\n  margin-left: -28.5px;\n  \n  ion-icon {\n    font-size: 18px;\n    margin-right: 6px;\n    margin-top: -1px;\n  }\n\n  ion-label {\n    font-size: 14px;\n    font-weight: 600;\n  }\n}\n\n.resetButton {\n  width: auto;\n  height: 57px;\n  --box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.53);\n  border-radius: 8px 0px 0px 0px;\n  --border-radius: 0px 8px 8px 0px;\n  padding: 0px;\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  z-index: 10;\n  --background: var(--ion-text-color);\n  color: var(--ion-background-color) !important;\n  text-transform: capitalize;\n  \n  ion-icon {\n    font-size: 18px;\n    margin-right: 6px;\n    margin-top: -1px;\n  }\n\n  ion-label {\n    font-size: 14px;\n    font-weight: 600;\n  }\n}\n\n\n\n.website {\n  width: auto;\n  background-color: transparent;\n  --background: transparent;\n  color: #ffffff60;\n  border-radius: 3px;\n  border: 0px solid var(--ion-border-color);\n  font-weight:600;\n  font-size: 8pt;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 16px;\n--box-shadow: none;\n--border-radius: 3px;\nbox-shadow:none;\nmargin: 3px;\npadding: 0px !important; \n}\n\n.actBtn4 {\n  border-radius: 3px;\n  border: 0px solid var(--ion-border-color);\n  font-weight:600;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 38px;\n  width: auto;\n--box-shadow: none;\n--background: var(--ion-border-color);\n--border-radius: 3px;\nbox-shadow:none;\nmargin-bottom: 12px !important; \nmargin-top: 0px !important; \nmargin-left: 3px !important; \nmargin-right: 3px !important;\npadding: 0px !important; \n}\n\n\n\n.backVid {\n  padding: 0px;\n  margin: 16px !important;\n  -webkit-box-shadow: none;\n  border: 1px solid var(--ion-border-color);\n  box-shadow: none;\n  border-radius: 6px !important;\n}\n\n.img-holder {\n    display: inline-block;\n    width: 100%;\n    height: 75%;\n    overflow: hidden;\n    border-radius: 5px 5px 0px 0px;\n}\n\n.img-holder img {\n    display: inline-block;\n    width: 100%;\n    height: 75%;\n    margin: -12% 0;\n}\n\n.backImg2 {\n  height: 100%;\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n}\n\n.actBtn44 {\n  color: var(--ion-text-color);\n  border-radius: 50px;\n  border: 1px solid #00474270;\n  background-color: transparent;\n  font-weight:600;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 0px;\n  text-transform: none;\n  min-height: 54px;\n  width: 54px;\n--box-shadow: none;\n--background: transparent;\n--border-radius: 50px;\nbox-shadow:none;\nmargin-bottom: 12px !important; \nmargin-top: 0px !important; \nmargin-left: 0px !important; \nmargin-right: 0px !important; \n}\n\n.backImgNull {\n  height: 100%;\n  width: 100%;\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n  background-color: var(--ion-background-color) !important;\n}\n\n.backImg2 {\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n  padding: 0px;\n  margin: 0px !important;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 1px solid var(--ion-border-color);\n  border-radius: 6px;\n  height: 232px;\n  display: flex;\n}\n\n.play-button {\n  display: flex;\n  width: 100%;\n  text-align: center;\n  margin: 0px !important;\n  background-color: var(--ion-color-primary);\n  --background: var(--ion-color-primary);\n  border-radius: 12px;\n  --border-radius: 12px;\n  border-color:#e3e3e3;\n  border-style:solid;\n  border-width:0px;\n  color: #ffffff;\n  --color: #ffffff;\n  font-weight:600;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform:none;\n  min-height:47px;\n  --box-shadow: none;\n  box-shadow:none; margin-right: 6px;\n}\n\n\n\nion-tab-bar{\n    display: none;\n}\n\nion-select::part(text) {\n    display: none;\n}\n\nion-item::part(native) {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: unset;\n    padding-inline-end: unset;\n    background-color: #33333300 !important;\n}\n\nion-select::part(icon) {\n    display: none;\n}\n\n.select-speed {\n  text-align: center;\n  font-size: 18px;\n  border-radius: 30%;\n  --border-radius: 30%;\n  padding:0;\n  position: relative;\n  right: 0px;\n  width: 48px;\n  height: 48px;\n  line-height: 1px;\n  box-shadow: none;\n  opacity: 1;\n  color: var(--ion-text-color);\n  background-color: var(--ion-background-color) !important;\n  padding-inline-start: 0px  !important;\n}\n\n.togleFav ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all .3s;\n  opacity: 0;\n  font-size: 22px;\n\n  &.zmdi-bookmark-outline {\n    width: 22px;\n    height: 22px;\n    opacity: 1;\n    }\n  }\n\n  button.active {\n    ion-icon {\n      &.zmdi-bookmark-outline {\n        width: 0px;\n        height: 0px;\n        opacity: 0;\n      }\n\n      &.zmdi-bookmark {\n        width: 22px;\n        height: 22px;\n        opacity: 1;\n        color: var(--primary)\n      }\n    }\n  }\n\n\n\n\n.zwiedza-tlo{\n  width: 100%;\n  height: 350px;\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  border-radius: 0px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  padding: 0px;\n  background-color: #00A698 !important; \n}\n\n.parallax-image2 {\n\n}\n\n.parallax-image3 {\n  z-index: -5;\n  margin: 0px !important;\n  padding-bottom: 0px;\n  box-shadow: none;\n  border: none;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 18px;\n  width: 100%;\n  height: 350px;\n  margin-bottom: 0px !important;\n  overflow: hidden;\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  -webkit-transition: opacity 350ms linear;\n  transition: opacity 350ms linear;\n}\n\n.zwiedza-wstep {\n  -webkit-transition: opacity 350ms linear;\n  transition: opacity 350ms linear;\n  padding: 12px;\n  box-shadow: none;\n  margin: 0px;\n  position: absolute;\n  left: 18px;\n  right: 18px;\n  bottom: 20px;\n  width: auto;\n  border-radius: 18px;\n}\n\n.zwiedza-tyt {\n  font-size: 14pt;\n  font-weight: 600;\n  white-space: normal;\n}\n  \n\n\ndiv {\n\n\n    h2 {\n        margin: 0;\n\n        font-size: 1.6rem;\n\n    }\n\n    ion-card {\n\n        .item_inner {\n            width: 100%;\n\n            .item_image {\n                width: 100%;\n                height: 170px;\n\n                h4 {\n                    position: absolute;\n                    bottom: 14px;\n                    left: 15px;\n                    margin: 0;\n\n                    border-radius: 4px;\n                    text-transform: uppercase;\n                    font-weight: 400;\n                    width: fit-content;\n                    font-size: .7rem;\n                    padding: 4px 23px;\n                    letter-spacing: .5px;\n\n\n                    &.helth_care {\n                        background: #a1e548;\n                    }\n\n                    &.life_style {\n                        background: #23ecdb;\n                    }\n\n                    &.family {\n                        background: #ffc016;\n                    }\n                }\n            }\n\n            .item_detail {\n                padding: 16px;\n                width: 100%;\n\n                p {\n                    margin: 0;\n\n                    font-weight: 500;\n                    font-size: 1.13rem;\n                    padding-bottom: 10px;\n                }\n\n                h5 {\n                    margin: 0;\n\n                    font-size: .75rem;\n\n                    span {\n                        width: fit-content;\n                        display: flex;\n                        align-items: center;\n\n                        small {\n                            font-size: .75rem;\n                            color: #ffd05d;\n                            display: flex;\n                            align-items: center;\n\n                            img {\n                                width: 20px;\n                            }\n                        }\n                    }\n\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4767:
/*!********************************************************!*\
  !*** ./src/app/mainPage/mainPage.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\" fullscreen >\n  \n      <!-- REFRESH --> \n      <ion-refresher style=\"padding: 34px 0px 120px 0px; margin-top: 0px;\" slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"madeRefresh($event)\">\n          <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n      <!-- MAPA FAB BUTTON --> \n      <ion-fab *ngIf=\"!searchingLegenda\" horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\" [routerLink]=\"['mapa']\">\n        <ion-fab-button class=\"FaButton\">\n          <ion-icon name=\"map\"></ion-icon>\n          <ion-label>{{'MAP' | translate}}</ion-label>\n        </ion-fab-button>\n      </ion-fab>\n      \n      <div class=\"content-size\">\n      <!-- SEARCH -->\n      <ion-card style=\"--ripple-color: white !important; margin: 0px 16px 0px 16px; padding: 8px 18px 8px 18px; box-shadow: 0px 0px 0px 0px var(--ion-box-shadow); border-radius: 8px; background-color: var(--ion-card-background-2);\"> \n        <ion-input style=\"color: var(--ion-text-color); font-weight: 500; font-size: 16px; margin: 0px; padding: 0px;\"\n        #searchInput\n        placeholder=\"{{'SEARCH' | translate}}\"\n        [(ngModel)]=\"searchLegenda\"\n        enterkeyhint=\"search\"\n        (keyup.enter)=\"searchLegendy()\"\n        (change)=\"resetSearch()\"\n        ><ion-icon name=\"search-sharp\" style=\"opacity: 0.6; padding-right: 6px; margin-bottom: -1px;\"></ion-icon></ion-input>\n        <!-- RESET SEARCH --> \n        <ion-button *ngIf=\"searchingLegenda\" class=\"resetButton\" (click)=\"resetSearchLegendy()\">\n          <ion-icon name=\"close-circle-outline\"></ion-icon>\n          <ion-label style=\"color: var(--ion-background-color) !important;\">{{'CLEAR' | translate}}</ion-label>\n        </ion-button>\n      </ion-card>\n\n\n      <!-- POSTS -->\n    <!--<ion-grid style=\"margin: 0px; padding: 0px;\">\n    <ion-row>\n      <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeXs=\"12\" *ngFor=\"let post of settings.legends; let i = index\" style=\"margin: 0px; padding: 0px;\">\n\n      </ion-col>\n    </ion-row>\n    </ion-grid> -->\n    \n      <ion-card *ngFor=\"let post of settings.legends; let i = index\" [routerLink]=\"['legenda',post?.Slug]\" class=\"ion-activatable ripple-parent\" style=\"--ripple-color: var(--ion-color-gold) !important; margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;\">\n        <div *ngIf=\"!post?.FeaturedImage\">\n          <img style=\"width: 100%; background-color: var(--ion-border-color); opacity: 0.6;\" src=\"assets/imgs/placeholder.png\" alt=\"Placeholder image\"/>\n          <ion-thumbnail style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\"><ion-skeleton-text animated></ion-skeleton-text></ion-thumbnail>\n        </div>\n        \n        <ion-card-content *ngIf=\"post?.FeaturedImage\" style=\"padding: 0px;\">\n          <img *ngIf=\"i == 0\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{post?.FeaturedImage}}\" alt=\"{{post?.Title}}\"/>\n          <img *ngIf=\"i > 0\" loading=\"lazy\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{post?.FeaturedImage}}\" alt=\"{{post?.Title}}\"/>\n          \n          <div style=\"margin: -48px 0px 0px 2px;\">\n            <div *ngIf=\"post?.Points > 0\" class=\"postChip\">\n              <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); font-size: 10pt; margin: 0px 5px -2.5px 0px;\"></ion-icon>\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">{{'PREMIUM' | translate}}</ion-label>\n            </div>\n    \n            <div *ngIf=\"post?.Date\" class=\"postChip\">\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">· {{post?.Date}} ·</ion-label>\n            </div>\n\n            <!-- <div *ngIf=\"post?.formatted_date\" class=\"postChip\">\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\"><ion-icon name=\"eye-outline\" style=\"margin: 0px 3px -2px 0px;\"></ion-icon> ·  {{post?.meta.views}} ·</ion-label>\n            </div>\n    \n            <div *ngIf=\"post?.total_comments > '0'\" class=\"postChip\">\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\"><ion-icon name=\"chatbox-ellipses-outline\" style=\"margin: 0px 3px -2px 0px;\"></ion-icon> · {{post?.total_comments}} ·</ion-label>\n            </div> -->\n            \n          </div>\n        </ion-card-content>\n        \n        <ion-card-content style=\"text-align: left; padding: 28px 18px 18px 18px;\">\n          <ion-label style=\"font-weight: normal; font-size: 24px; line-height: 30px;\" [innerHTML]=\"post?.Title\"></ion-label>\n          <p style=\"font-size: 12pt; font-weight: 500; padding-top: 6px;\" [innerHTML]=\"post?.Excerpt\"></p>\n        </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n      </ion-card>\n\n    \n      \n      <!-- INFINITY LOADING\n      <ion-infinite-scroll (ionInfinite)=\"infinityLegendy($event)\">\n        <div *ngIf=\"loadingLegenda\" style=\"height: 18px\"></div>\n        <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n        <div *ngIf=\"loadingLegenda\" style=\"height: 18px\"></div>\n      </ion-infinite-scroll> -->\n      \n    </div>\n    \n    \n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_mainPage_mainPage_module_ts.js.map
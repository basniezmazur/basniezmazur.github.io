(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stronica_stronica_module_ts"],{

/***/ 4464:
/*!*****************************************************!*\
  !*** ./src/app/stronica/stronica-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StronicaPageRoutingModule": () => (/* binding */ StronicaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stronica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stronica.page */ 4337);




const routes = [{
  path: '',
  component: _stronica_page__WEBPACK_IMPORTED_MODULE_0__.StronicaPage
}];
let StronicaPageRoutingModule = class StronicaPageRoutingModule {};
StronicaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], StronicaPageRoutingModule);


/***/ }),

/***/ 5333:
/*!*********************************************!*\
  !*** ./src/app/stronica/stronica.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StronicaPageModule": () => (/* binding */ StronicaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stronica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stronica-routing.module */ 4464);
/* harmony import */ var _stronica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stronica.page */ 4337);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);








let StronicaPageModule = class StronicaPageModule {};
StronicaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _stronica_routing_module__WEBPACK_IMPORTED_MODULE_0__.StronicaPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_stronica_page__WEBPACK_IMPORTED_MODULE_1__.StronicaPage]
})], StronicaPageModule);


/***/ }),

/***/ 4337:
/*!*******************************************!*\
  !*** ./src/app/stronica/stronica.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StronicaPage": () => (/* binding */ StronicaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stronica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stronica.page.html?ngResource */ 7598);
/* harmony import */ var _stronica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stronica.page.scss?ngResource */ 4099);
/* harmony import */ var _stronica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stronica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/Service */ 8914);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
var _class;










let StronicaPage = (_class = class StronicaPage {
  constructor(titleService, meta, route, service, settings, sanitizer) {
    this.titleService = titleService;
    this.meta = meta;
    this.route = route;
    this.service = service;
    this.settings = settings;
    this.sanitizer = sanitizer;
    this.loading = true;
    this.loadingFailed = false;
    document.documentElement.setAttribute("lang", this.settings.langCode);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.slug = paramMap.get('slug');
      this.settings.langCode = this.route.snapshot.paramMap.get("lang");
      let data;
      setTimeout(() => {
        this.service.getData(this.slug).then(response => {
          if (response['error']) {
            this.loading = false;
            this.loadingFailed = true;
          } else if (response) {
            //console.log(response);
            this.post = this.service.convertData(response.values)[0];
            this.contents_new = this.post.Content;
            this.post.Content = this.sanitizer.bypassSecurityTrustHtml(this.post.Content);
            this.loading = false;
          }
          this.content_short = this.contents_new.match(/^[\s\S]{0,700}/g) + "...";
          this.seo_description = this.contents_new.match(/^.{1,150}/g);
          this.titleService.setTitle(this.post.Title);
          this.meta.updateTag({
            name: 'description',
            content: this.seo_description
          });
          // OpenGraph Meta Tags
          this.meta.updateTag({
            property: 'og:title',
            content: this.post.Title
          });
          this.meta.updateTag({
            property: 'og:description',
            content: this.seo_description
          });
          this.meta.updateTag({
            property: 'og:image',
            content: this.post.image_url
          });
          this.meta.updateTag({
            property: 'og:type',
            content: 'website'
          });
          this.meta.updateTag({
            property: 'og:url',
            content: 'https://basniezmazur.pl'
          });
          // Twitter Meta Tags
          this.meta.updateTag({
            property: 'twitter:title',
            content: this.post.Title
          });
          this.meta.updateTag({
            property: 'twitter:description',
            content: this.seo_description
          });
          this.meta.updateTag({
            property: 'twitter:image',
            content: this.post.image_url
          });
          this.meta.updateTag({
            property: 'twitter:url',
            content: 'https://basniezmazur.pl'
          });
          // Schema Markup
          function addScript(attribute, text, callback) {
            var schema = document.createElement('script');
            for (var attr in attribute) {
              schema.setAttribute(attr, attribute[attr] ? attribute[attr] : null);
            }
            schema.innerHTML = text;
            schema.onload = callback;
            document.head.appendChild(schema);
          }
          addScript({
            type: 'application/ld+json'
          }, '{"@context":"https://schema.org","@graph":[{"@type":"Article","datePublished":"' + this.post.formatted_date + '","headline":"' + this.post.Title + '","description":"' + this.seo_description + '","name":"' + this.post.Title + '","image":{"@type":"ImageObject","@id":"' + this.post.image_url + '","url":"' + this.post.image_url + '","height":670,"width":1200,"caption":"' + this.post.Title + '"},"thumbnailUrl":"' + this.post.image_url + '"}]}', function () {});
        });
      }, 200);
    });
  }
  madeRefresh(event) {
    location.reload();
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ionViewDidEnter() {
    this.content.scrollToTop(400);
  }
}, _class.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _app_services_Service__WEBPACK_IMPORTED_MODULE_2__.Service
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__.Settings
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
}], _class.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, {
      static: true
    }]
  }]
}, _class);
StronicaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-stronica',
  template: _stronica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_stronica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StronicaPage);


/***/ }),

/***/ 4099:
/*!********************************************************!*\
  !*** ./src/app/stronica/stronica.page.scss?ngResource ***!
  \********************************************************/
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

/***/ 7598:
/*!********************************************************!*\
  !*** ./src/app/stronica/stronica.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n\n  <!-- REFRESH --> \n  <ion-refresher style=\"padding: 34px 0px 120px 0px; margin-top: 0px;\" slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"madeRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n\n<div class=\"content-size\" style=\"padding: 12px; margin-bottom: 12px\">\n\n  <!-- Loading Error -->\n  <ion-card *ngIf=\"loadingFailed\" class=\"cookies\" style=\"box-shadow: none;\">\n    <p style=\"font-size: 18px; font-weight: 500;\">Nie udało się załadować tej strony</p>\n                         \n    <div style=\"display: flex; justify-content: center; margin: 18px 0px 0px 0px;\">\n      <ion-button (click)=\"madeRefresh($event)\" class=\"basicButton ion-activatable ripple-parent\">\n        <ion-icon name=\"refresh-outline\" style=\"margin: 0px 3px -1px 0px;\"></ion-icon>Odśwież\n      <ion-ripple-effect></ion-ripple-effect>\n      </ion-button>\n    </div>\n  </ion-card>\n         \n  <!-- Loading -->\n  <div *ngIf=\"this.loading\" style=\"height: 800px;\"></div>\n  <div *ngIf=\"this.loading\" style=\"text-align: center !important; width: 100%; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\n    <ion-spinner style=\"display: block; margin-left: auto; margin-right: auto;\" name=\"lines\"></ion-spinner>\n    <ion-label style=\"font-weight: 500; font-size: 12pt; line-height: 16pt;\">Ładowanie..</ion-label>\n  </div>\n  \n  <h1 style=\"font-weight: 500; font-size: 36px; line-height: 36px; display: block; margin: 0px 0px 12px 0px;\" [innerHTML]=\"post?.Title\"></h1>\n  <p [innerHTML]=\"post?.Content\"></p>\n\n</div>\n\n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_stronica_stronica_module_ts.js.map
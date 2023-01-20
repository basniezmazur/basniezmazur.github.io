(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tag-page_tag-page_module_ts"],{

/***/ 8182:
/*!*****************************************************!*\
  !*** ./src/app/tag-page/tag-page-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagPagePageRoutingModule": () => (/* binding */ TagPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tag_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-page.page */ 1814);




const routes = [{
  path: '',
  component: _tag_page_page__WEBPACK_IMPORTED_MODULE_0__.TagPagePage
}];
let TagPagePageRoutingModule = class TagPagePageRoutingModule {};
TagPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TagPagePageRoutingModule);


/***/ }),

/***/ 7922:
/*!*********************************************!*\
  !*** ./src/app/tag-page/tag-page.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagPagePageModule": () => (/* binding */ TagPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tag_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-page-routing.module */ 8182);
/* harmony import */ var _tag_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-page.page */ 1814);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);









let TagPagePageModule = class TagPagePageModule {};
TagPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _tag_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.TagPagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_tag_page_page__WEBPACK_IMPORTED_MODULE_1__.TagPagePage]
})], TagPagePageModule);


/***/ }),

/***/ 1814:
/*!*******************************************!*\
  !*** ./src/app/tag-page/tag-page.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagPagePage": () => (/* binding */ TagPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tag_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-page.page.html?ngResource */ 7610);
/* harmony import */ var _tag_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-page.page.scss?ngResource */ 7176);
/* harmony import */ var _tag_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tag_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/Service */ 8914);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
var _class;








let TagPagePage = (_class = class TagPagePage {
  constructor(titleService, meta, route, service, settings) {
    this.titleService = titleService;
    this.meta = meta;
    this.route = route;
    this.service = service;
    this.settings = settings;
    this.legendy = [];
    this.categories = [];
    this.loadingLegenda = true;
    this.lastNumberLegenda = 20;
    this.pageLegenda = 1;
    this.noMorePosts = false;
    this.infinityShow = false;
    this.today = new Date();
    this.currentDate = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  }
  loadMoreLegendy(lang) {
    this.loadingLegenda = true;
    this.service.getTag(this.pageLegenda, this.categoryId, lang).then(response => {
      if (response['error']) {
        // console.log(response['error'])
        this.lastNumberLegenda = 0;
        this.loadingLegenda = false;
        if (this.refreshEvent) this.refreshEvent.target.complete();
        if (this.infinityLegendyEvent) this.infinityLegendyEvent.target.complete();
        if (response['error'].data.status == 400) {
          setTimeout(() => {
            this.noMorePosts = true;
          }, 0);
        }
      } else if (response) {
        // console.log(response);
        this.legendy = this.legendy.concat(response);
        this.lastNumberLegenda = response.length;
        this.pageLegenda = this.pageLegenda + 1;
        this.loadingLegenda = false;
        if (this.refreshEvent) this.refreshEvent.target.complete();
        if (this.infinityLegendyEvent) this.infinityLegendyEvent.target.complete();
      }
    });
  }
  infinityLegendy(event) {
    this.infinityLegendyEvent = event;
    this.loadMoreLegendy(this.settings.langCode);
    setTimeout(() => {
      event.target.complete();
    }, 2400);
  }
  madeRefresh(event) {
    location.reload();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.settings.langCode = this.route.snapshot.paramMap.get("lang");
      this.category = paramMap.get('slug');
      this.loadingLegenda = true;
      this.service.searchCategory(this.category, this.settings.langCode).then(response => {
        if (response['error']) {
          // console.log(response['error'])
        } else if (response) {
          // console.log(response);
          this.categoryId = response[0].id;
          this.categoryName = response[0].name;
          this.categoryDescripton = response[0].description;
          this.seo_short = this.categoryDescripton.replaceAll(/(\r\n|\n|\r)/gm, "");
          this.seo_description = this.seo_short.match(/^.{1,150}/g);
          // console.log(this.seo_description);
          this.loadMoreLegendy(this.settings.langCode);
          document.documentElement.setAttribute("lang", this.settings.langCode);
          this.titleService.setTitle('Tag: ' + this.categoryName + ' • Baśnie z Mazur');
          this.meta.updateTag({
            name: 'description',
            content: this.seo_description
          });
          // OpenGraph Meta Tags
          this.meta.updateTag({
            property: 'og:title',
            content: 'Tag: ' + this.categoryName + ' • Baśnie z Mazur'
          });
          this.meta.updateTag({
            property: 'og:description',
            content: this.seo_description
          });
          this.meta.updateTag({
            property: 'og:image',
            content: 'https://basniezmazur.pl/service/assets/images/2022/02/legendy_z_mazur_tlo.png'
          });
          this.meta.updateTag({
            property: 'og:type',
            content: 'website'
          });
          this.meta.updateTag({
            property: 'og:url',
            content: 'https://basniezmazur.pl/tag/' + this.category
          });
          // Twitter Meta Tags
          this.meta.updateTag({
            property: 'twitter:title',
            content: 'Tag: ' + this.categoryName + ' • Baśnie z Mazur'
          });
          this.meta.updateTag({
            property: 'twitter:description',
            content: this.seo_description
          });
          this.meta.updateTag({
            property: 'twitter:image',
            content: 'https://basniezmazur.pl/service/assets/images/2022/02/legendy_z_mazur_tlo.png'
          });
          this.meta.updateTag({
            property: 'twitter:url',
            content: 'https://basniezmazur.pl/tag/' + this.category
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
          }, '{"@context":"https://schema.org","@graph":[{"@type":"Article","datePublished":"' + this.currentDate + '","headline":"Tag: ' + this.categoryName + ' • Legendy z Mazur","description":"' + this.seo_description + '","name":"' + this.categoryName + '","image":{"@type":"ImageObject","@id":"Tag: ' + this.categoryName + ' • Legendy z Mazur","url":"' + this.categoryName + '","height":670,"width":1200,"caption":"Tag: ' + this.categoryName + ' • Legendy z Mazur"},"thumbnailUrl":"' + this.categoryName + '"}]}', function () {});
        }
      });
    });
  }
  ionViewDidEnter() {}
  ngOnDestroy() {
    this.legendy = [];
    this.lastNumberLegenda = 0;
    this.pageLegenda = 0;
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
}], _class);
TagPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tag-page',
  template: _tag_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tag_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TagPagePage);


/***/ }),

/***/ 7176:
/*!********************************************************!*\
  !*** ./src/app/tag-page/tag-page.page.scss?ngResource ***!
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

/***/ 7610:
/*!********************************************************!*\
  !*** ./src/app/tag-page/tag-page.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\" fullscreen >\n  \n      <!-- REFRESH --> \n      <ion-refresher style=\"padding: 34px 0px 120px 0px; margin-top: 0px;\" slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"madeRefresh($event)\">\n          <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n\n      <div class=\"content-size\">\n\n      <div style=\"margin: 0px 16px 20px 16px;\">\n        <p style=\"text-transform: capitalize; margin: 0px; padding: 0px; font-weight: 500; font-size: 24px;\"><ion-icon name=\"bookmark\" style=\"border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); font-size: 16px; padding: 8px; margin: 0px 6px -8px 0px;\"></ion-icon>{{'TAG' | translate}}: {{this.categoryName}}</p>\n        <p *ngIf=\"this.legendy.length\" style=\"margin: 0px; padding: 8px 0px 0px 0px; font-weight: 500; font-size: 16px;\">{{this.categoryDescripton}}</p>\n        <ion-thumbnail *ngIf=\"!this.legendy.length && loadingLegenda\" style=\"width: 100%; height: 64px; margin: 8px 0px 0px 0px;\"><ion-skeleton-text animated></ion-skeleton-text></ion-thumbnail>\n      </div>\n\n      <!-- POSTS -->\n      <ion-card *ngFor=\"let post of legendy; let i = index\" [routerLink]=\"['/' + post?.lang,'legenda',post?.slug]\" class=\"ion-activatable ripple-parent\" style=\"--ripple-color: var(--ion-border-color-2) !important; border: 1px solid var(--ion-border-color); margin: 16px 16px 0px 16px !important; box-shadow: none; border-radius: 8px;\">\n        <div *ngIf=\"!post?.image_url\">\n          <img style=\"width: 100%; background-color: var(--ion-border-color); opacity: 0.6;\" src=\"assets/imgs/placeholder.png\" alt=\"Placeholder image\"/>\n          <ion-thumbnail style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\"><ion-skeleton-text animated></ion-skeleton-text></ion-thumbnail>\n        </div>\n        \n        <ion-card-content *ngIf=\"post?.image_url\" style=\"padding: 0px;\">\n          <img *ngIf=\"i == 0\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{post?.image_url}}\" alt=\"{{post?.title.rendered}}\"/>\n          <img *ngIf=\"i > 0\" loading=\"lazy\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{post?.image_url}}\" alt=\"{{post?.title.rendered}}\"/>\n          \n          <div style=\"margin: -48px 0px 0px 2px;\">\n            <div *ngIf=\"post?.ACF.wersja_pro\" class=\"postChip\">\n              <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); font-size: 10pt; margin: 0px 5px -2.5px 0px;\"></ion-icon>\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">{{'PREMIUM' | translate}}</ion-label>\n            </div>\n    \n            <div *ngIf=\"post?.formatted_date\" class=\"postChip\">\n              <ion-label style=\"font-weight: 500; font-size: 8pt;\">· {{post?.formatted_date}} ·</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n        \n        <ion-card-content style=\"text-align: left; padding: 22px 12px 12px 12px;\">\n          <ion-label style=\"font-weight: regular; font-size: 22px; line-height: 22px;\" [innerHTML]=\"post?.title.rendered\"></ion-label>\n          <p style=\"font-size: 12pt; font-weight: 500; padding-top: 6px;\" [innerHTML]=\"post?.excerpt.rendered\"></p>\n        </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n      </ion-card>\n\n      <!-- Loading -->\n      <div *ngIf=\"!this.legendy.length && loadingLegenda\" style=\"text-align: center !important;\">\n        <ion-spinner style=\"margin-top: 24px; display: block; margin-left: auto; margin-right: auto;\" name=\"dots\"></ion-spinner>\n        <ion-label style=\"font-weight: 500; font-size: 12pt; line-height: 16pt;\">{{'LOADING' | translate}}</ion-label>\n      </div>\n  \n      <!-- NO MORE POSTS -->\n      <h5 *ngIf=\"!loadingLegenda && noMorePosts\" style=\"\t-webkit-animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both; animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0s both;width: 100%; text-align: center;\">\n        <ion-icon name=\"trail-sign-outline\" style=\"font-size: 64px;\"></ion-icon>\n        <p style=\"text-align: center; font-size: 12pt; font-weight: 500; padding-top: 6px; padding-right: 24px; padding-left: 24px; margin: 0px !important;\">{{'THAT_ALL' | translate}}</p>\n      </h5>\n      \n      <!-- INFINITY LOADING -->\n      <ion-infinite-scroll (ionInfinite)=\"infinityLegendy($event)\">\n        <div *ngIf=\"loadingLegenda\" style=\"height: 18px\"></div>\n        <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n        <div *ngIf=\"loadingLegenda\" style=\"height: 58px\"></div>\n      </ion-infinite-scroll>\n      \n    </div>\n    \n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tag-page_tag-page_module_ts.js.map
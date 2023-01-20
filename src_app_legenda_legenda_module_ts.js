(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_legenda_legenda_module_ts"],{

/***/ 8946:
/*!***************************************************!*\
  !*** ./src/app/legenda/legenda-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendaPageRoutingModule": () => (/* binding */ LegendaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _legenda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legenda.page */ 3891);




const routes = [{
  path: '',
  component: _legenda_page__WEBPACK_IMPORTED_MODULE_0__.LegendaPage
}];
let LegendaPageRoutingModule = class LegendaPageRoutingModule {};
LegendaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LegendaPageRoutingModule);


/***/ }),

/***/ 7446:
/*!*******************************************!*\
  !*** ./src/app/legenda/legenda.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendaPageModule": () => (/* binding */ LegendaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _legenda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legenda-routing.module */ 8946);
/* harmony import */ var _legenda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legenda.page */ 3891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);









let LegendaPageModule = class LegendaPageModule {};
LegendaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _legenda_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegendaPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  providers: [],
  declarations: [_legenda_page__WEBPACK_IMPORTED_MODULE_1__.LegendaPage]
})], LegendaPageModule);


/***/ }),

/***/ 3891:
/*!*****************************************!*\
  !*** ./src/app/legenda/legenda.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendaPage": () => (/* binding */ LegendaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _legenda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legenda.page.html?ngResource */ 6367);
/* harmony import */ var _legenda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legenda.page.scss?ngResource */ 8318);
/* harmony import */ var _legenda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_legenda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/Service */ 8914);
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commonfunction.service */ 5806);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
var _class;











let LegendaPage = (_class = class LegendaPage {
  constructor(route, service, CFS, domSanitizer, settings, translate) {
    this.route = route;
    this.service = service;
    this.CFS = CFS;
    this.domSanitizer = domSanitizer;
    this.settings = settings;
    this.translate = translate;
    this.loading = true;
    this.loadingFailed = false;
    this.FavoriteIcon = false;
    this.subscriptions = [];
    this.loadingComment = true;
    this.lastNumberComment = 6;
    this.pageComment = 1;
    this.hasComments = false;
    this.profileData = false;
    this.spinner = false;
    this.spinnerComment = false;
    this.authorName = '';
    this.authorAvatar = '';
    this.authorPremium = '0';
    this.commentText = '';
    this.commentTextCount = 0;
    this.slideEpic = {
      slidesPerView: 4.5,
      spaceBetween: 18,
      centeredSlides: false,
      freeMode: true
      // loop: true,
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.slug = paramMap.get('slug');
      this.settings.legendsPageSlug = this.slug;
      this.settings.langCode = this.route.snapshot.paramMap.get("lang");
      this.service.getLegendPage();
      this.content.scrollToTop(400);
      let profile_data = localStorage.getItem('profile_data');
      if (profile_data == 'true') {
        this.profileData = true;
        this.authorName = localStorage.getItem('author_name');
        this.authorAvatar = localStorage.getItem('author_avatar');
      }
    });
  }
  getsomo() {
    this.service.getLegenda(this.slug, this.settings.langCode).then(response => {
      this.tags_names = response[0].categories_names;
      if (this.tags_names) {
        let i = 1;
        let tag = [];
        while (this.tags_names[i + '']) {
          tag.push(this.tags_names[i + '']);
          i = i + 1;
        }
        this.tags_names = tag;
      }
    });
  }
  getSlug(r) {
    r = r.replace(/[^a-zA-Z ]/g, "").replace(/ +/g, '-');
    r = r.toLowerCase();
    return r;
  }
  appToast() {
    this.CFS.presentToast(this.translate.instant('APP_SOON'), 'top', 1300);
  }
  getTagSlug(r) {
    r = r.replace(/ +/g, '-');
    r = r.toLowerCase();
    r = r.replace(new RegExp("[ą]", 'g'), "a");
    r = r.replace(new RegExp("[ć]", 'g'), "c");
    r = r.replace(new RegExp("[ę]", 'g'), "e");
    r = r.replace(new RegExp("[ł]", 'g'), "l");
    r = r.replace(new RegExp("[ń]", 'g'), "n");
    r = r.replace(new RegExp("[ó]", 'g'), "o");
    r = r.replace(new RegExp("[ś]", 'g'), "s");
    r = r.replace(new RegExp("[ź,ż]", 'g'), "z");
    r = r.replace(new RegExp("[ÿ]", 'g'), "y");
    return r;
  }
  authorImage(item) {
    localStorage.setItem('avatar', item);
    this.authorAvatar = item;
  }
  getAuthorName(item) {
    return item.substring(2);
  }
  getAuthorAvatar(item) {
    let r = item.match(/^.{1,1}/g);
    return "assets/imgs/avatar-" + r + ".png";
  }
  getAuthorPremium(item) {
    item = item.substring(1);
    item = item.match(/^.{1,1}/g);
    return item;
  }
  selectedAvatar(item) {
    if (this.authorPremium == '0') {
      if (this.authorAvatar.includes(item)) {
        return {
          'opacity': '1',
          'transform': 'scale(1.1)',
          'background-color': '#ffffff'
        };
      } else {
        return {
          'opacity': '0.5',
          'transform': 'scale(1)',
          'background-color': '#ffffff50'
        };
      }
    } else if (this.authorPremium == '1') {
      if (this.authorAvatar.includes(item)) {
        return {
          'opacity': '1',
          'transform': 'scale(1.1)',
          'background-color': '#ffc900'
        };
      } else {
        return {
          'opacity': '0.5',
          'transform': 'scale(1)',
          'background-color': '#ffc90050'
        };
      }
    }
  }
  editProfileData() {
    this.profileData = false;
  }
  authorNameRestrict() {
    let pattern = /jebać|jebac|chuj|skurwiel|ciota|pedał|dziwka|czarnuch|pizda|zjeb|rucha|pieprzy|pierdol|kurw|pizdy|gówno|gowno|kutas/ig;
    let pattern_2 = /putin|legendy z mazur|legendyzmazur/ig;
    if (this.authorName.match(pattern)) {
      this.authorName = this.authorName.replace(pattern, "****");
      this.CFS.presentToast(this.translate.instant('NO_BAD_WORDS'), 'top', 1300);
    } else if (this.authorName.match(pattern_2)) {
      this.authorName = this.authorName.replace(pattern_2, "****");
      this.CFS.presentToast(this.translate.instant('CHOOSE_DIFFERENT_ NAME'), 'top', 1300);
    }
  }
  commentCount() {
    this.commentTextCount = this.commentText.split('').length;
    let pattern = /jebać|jebac|chuj|skurwiel|ciota|pedał|dziwka|czarnuch|pizda|zjeb|rucha|pieprzy|pierdol|kurw|pizdy|gówno|gowno|kutas/ig;
    if (this.commentText.match(pattern)) {
      this.commentText = this.commentText.replace(pattern, "****");
      this.CFS.presentToast(this.translate.instant('NO_BAD_WORDS'), 'top', 1300);
    }
  }
  madeRefresh(event) {
    location.reload();
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ionViewDidEnter() {}
  postComment() {
    if (this.authorAvatar && this.commentText && this.authorName) {
      this.spinnerComment = true;
      let authorName = this.domSanitizer.bypassSecurityTrustHtml(this.authorAvatar + this.authorPremium + this.authorName);
      let content = this.domSanitizer.bypassSecurityTrustHtml(this.commentText);
      let commentDataObj = {
        author_name: authorName['changingThisBreaksApplicationSecurity'],
        content: content['changingThisBreaksApplicationSecurity'],
        post: this.postId
        // parent: "622"
      };

      const commentDataJson = JSON.stringify(commentDataObj);
      this.service.postAComment(commentDataJson).then(response => {
        if (response['error']) {
          this.spinnerComment = false;
          this.CFS.presentToast(response['error'].message, 'top', 3000);
          console.log(response['error']);
        } else {
          this.spinnerComment = false;
          this.CFS.presentToast(this.translate.instant('WAITING_FOR_APPROVE'), 'top', 3000);
          this.commentText = "";
        }
      });
      localStorage.setItem('author_name', this.authorName);
      localStorage.setItem('author_avatar', this.authorAvatar);
      localStorage.setItem('profile_data', 'true');
      this.profileData = true;
    } else {
      this.CFS.presentToast(this.translate.instant('FILL_FIELDS'), 'top', 3000);
    }
  }
  favorite() {
    if (this.settings.legendPage.Favorite) {
      this.settings.favoriteLegends.map((element, index) => {
        if (element.Slug == this.settings.legendPage.Slug) {
          this.settings.favoriteLegends.splice(index, 1);
        }
      });
      localStorage.setItem('favoriteLegends', JSON.stringify(this.settings.favoriteLegends));
      this.settings.legendPage.Favorite = !this.settings.legendPage.Favorite;
      this.settings.legendPage.Likes -= 1;
    } else {
      this.settings.favoriteLegends = this.settings.favoriteLegends || [];
      this.settings.favoriteLegends.push(this.settings.legendPage);
      localStorage.setItem('favoriteLegends', JSON.stringify(this.settings.favoriteLegends));
      this.settings.legendPage.Favorite = !this.settings.legendPage.Favorite;
      this.settings.legendPage.Likes += 1;
    }
  }
  // POST VIEW
  views() {}
  // LIKE COMMENT
  likeComment(comment) {}
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _app_services_Service__WEBPACK_IMPORTED_MODULE_2__.Service
}, {
  type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__.CommonfunctionService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_4__.Settings
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}], _class.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, {
      static: true
    }]
  }]
}, _class);
LegendaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-legenda',
  template: _legenda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_legenda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LegendaPage);


/***/ }),

/***/ 8318:
/*!******************************************************!*\
  !*** ./src/app/legenda/legenda.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pageTitle:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  background: #222222;\n}\n\n.legend p {\n  font-weight: regular;\n  font-size: 18px;\n}\n.legend p:first-child:first-letter {\n  float: left;\n  font-weight: bold;\n  font-size: 59px;\n  margin: 10px 10px 0 0;\n  padding: 0px 8px 2px 8px;\n  color: var(--ion-background-color);\n  background-color: var(--ion-text-color);\n  border-radius: 6px;\n}\n\n.content-pro:before {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  content: \" \";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, var(--ion-background-color) 100%);\n  z-index: 5;\n}\n\n.image-background {\n  background: url('handwrite.svg') repeat center center;\n  background-size: 30% auto;\n}\n\n.progress-outer {\n  width: 100%;\n  margin: 2px 0px 12px 0px;\n  padding: 2px;\n  text-align: center;\n  background-color: rgba(255, 201, 0, 0.1254901961);\n  border: 3px solid var(--ion-text-color);\n  color: #1e1f21;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 14px;\n}\n\n.progress-inner {\n  min-width: 15%;\n  width: var(--progress-width);\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: var(--ion-color-gold);\n  border: 1px solid var(--ion-color-gold);\n  box-shadow: 0px 3px 14px -4px var(--ion-color-gold);\n}\n\n.toggleFav ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all 0.3s;\n  opacity: 0;\n  font-size: 22px;\n}\n.toggleFav ion-icon.heart-outline {\n  width: 24px;\n  height: 24px;\n  opacity: 1;\n}\n\nbutton.active ion-icon.heart {\n  width: 24px;\n  height: 24px;\n  opacity: 1;\n  will-change: transform;\n  transform: scale(1);\n  visibility: visible;\n  animation: bounce-in-fwd 0.4s both;\n  color: var(--ion-color-red);\n}\nbutton.active ion-icon.heart-outline {\n  width: 54px;\n  height: 54px;\n  opacity: 0;\n  will-change: transform;\n  transform: scale(1);\n  visibility: hidden;\n}\n\n.avatar-click {\n  cursor: pointer;\n  padding: 0px;\n  margin: 4%;\n  opacity: 0.5;\n  transform: scale(1);\n  transition: all 0.12s linear;\n  border-radius: 50%;\n}\n\n.comment-avatar {\n  background-color: var(--ion-border-color);\n  border-radius: 50%;\n}\n\n.editButton {\n  color: var(--ion-text-color);\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n  --background: var(--ion-card-background-2);\n  text-transform: none !important;\n  font-size: 12px;\n  border-radius: 0%;\n  --border-radius: 0%;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 24px;\n  margin: 0px;\n}\n\n.likeButton {\n  color: var(--ion-text-color);\n  background-color: transparent;\n  --background: transparent;\n  text-transform: none !important;\n  font-size: 10px;\n  border-radius: 0%;\n  --border-radius: 0%;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 23px;\n  width: 50px;\n  margin: -7px 0px 0px 0px;\n}\n\n.likeButton.active {\n  color: var(--ion-color-red);\n}\n\n.infoPost {\n  color: #ffffff;\n  border-radius: 8px;\n  border: 1px solid rgba(117, 111, 99, 0.5647058824);\n  background-color: rgba(30, 31, 33, 0.5647058824);\n  padding: 2px 12px 6px 12px;\n  display: inline-block;\n  margin: 0px 0px 0px 10px;\n}\n\n.moreButton {\n  color: var(--ion-text-color);\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n  --background: var(--ion-card-background-2);\n  text-transform: none !important;\n  font-size: 16px;\n  border-radius: 8px;\n  --border-radius: 8px;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 40px;\n  width: 240px;\n  margin: 12px auto 0px auto;\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/app/legenda/legenda.page.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;AACF;;AAGE;EACE,oBAAA;EACA,eAAA;AAAJ;AAEM;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,wBAAA;EACA,kCAAA;EACA,uCAAA;EACA,kBAAA;AAAR;;AAMA;EACE,kBAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,oGAAA;EACA,UAAA;AAHF;;AAMA;EACE,qDAAA;EACA,yBAAA;AAHF;;AAOA;EACE,WAAA;EACA,wBAAA;EACA,YAAA;EACA,kBAAA;EACA,iDAAA;EACA,uCAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAJF;;AAOA;EACE,cAAA;EACA,4BAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,uCAAA;EACA,uCAAA;EACA,mDAAA;AAJF;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,oBAAA;EACA,UAAA;EACA,eAAA;AAPF;AASE;EACE,WAAA;EACA,YAAA;EACA,UAAA;AAPJ;;AAaI;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EAEA,kCAAA;EACA,2BAAA;AAVN;AAaI;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAXN;;AAkBA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,4BAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,yCAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,4BAAA;EACA,2CAAA;EACA,8CAAA;EACA,0CAAA;EACA,+BAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;AAfF;;AAkBA;EACE,4BAAA;EACA,6BAAA;EACA,yBAAA;EACA,+BAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;AAfF;;AAkBA;EACE,2BAAA;AAfF;;AAkBA;EACE,cAAA;EACA,kBAAA;EACA,kDAAA;EACA,gDAAA;EACA,0BAAA;EACA,qBAAA;EACA,wBAAA;AAfF;;AAkBA;EACE,4BAAA;EACA,2CAAA;EACA,8CAAA;EACA,0CAAA;EACA,+BAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,0BAAA;EACA,cAAA;AAfF","sourcesContent":[".pageTitle:before{\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  background: #222222;\n}\n\n.legend {\n  p {\n    font-weight: regular;\n    font-size: 18px;\n    &:first-child {\n      &:first-letter {\n        float: left;\n        font-weight: bold;\n        font-size: 59px;\n        margin: 10px 10px 0 0;\n        padding: 0px 8px 2px 8px;\n        color: var(--ion-background-color);\n        background-color: var(--ion-text-color);\n        border-radius: 6px;\n      }\n    }\n  }\n}\n\n.content-pro:before {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  content: ' ';\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, #ffffff00 40%, var(--ion-background-color) 100%);\n  z-index: 5;\n}\n\n.image-background {\n  background: url(../../assets/imgs/handwrite.svg) repeat center center;\n  background-size: 30% auto;\n}\n\n\n.progress-outer {\n  width: 100%;\n  margin: 2px 0px 12px 0px;\n  padding: 2px;\n  text-align: center;\n  background-color: #ffc90020;\n  border: 3px solid var(--ion-text-color);\n  color: #1e1f21;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 14px;\n}\n\n.progress-inner {\n  min-width: 15%;\n  width: var(--progress-width);\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: var(--ion-color-gold);\n  border: 1px solid var(--ion-color-gold);\n  box-shadow: 0px 3px 14px -4px var(--ion-color-gold);\n}\n\n\n\n\n.toggleFav ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all .3s;\n  opacity: 0;\n  font-size: 22px;\n\n  &.heart-outline {\n    width: 24px;\n    height: 24px;\n    opacity: 1;\n  }\n}\n\nbutton.active {\n  ion-icon {\n    &.heart {\n      width: 24px;\n      height: 24px;\n      opacity: 1;\n      will-change: transform;\n      transform: scale(1);\n      visibility: visible;\n      -webkit-animation: bounce-in-fwd 0.4s both;\n      animation: bounce-in-fwd 0.4s both;\n      color: var(--ion-color-red);\n    }\n      \n    &.heart-outline {\n      width: 54px;\n      height: 54px;\n      opacity: 0;\n      will-change: transform;\n      transform: scale(1);\n      visibility: hidden;\n    }\n  }\n}\n  \n  \n  \n.avatar-click {\n  cursor: pointer;\n  padding: 0px;\n  margin: 4%;\n  opacity: 0.5;\n  transform: scale(1);\n  transition: all 0.12s linear;\n  border-radius: 50%;\n}\n\n.comment-avatar {\n  background-color: var(--ion-border-color);\n  border-radius: 50%;\n}\n\n.editButton {\n  color: var(--ion-text-color);\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n  --background: var(--ion-card-background-2); \n  text-transform: none !important;\n  font-size: 12px;\n  border-radius: 0%;\n  --border-radius: 0%;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 24px;\n  margin: 0px;\n}\n\n.likeButton {\n  color: var(--ion-text-color);\n  background-color: transparent; \n  --background: transparent; \n  text-transform: none !important;\n  font-size: 10px;\n  border-radius: 0%;\n  --border-radius: 0%;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 23px;\n  width: 50px;\n  margin: -7px 0px 0px 0px;\n}\n\n.likeButton.active {\n  color: var(--ion-color-red);\n}\n\n.infoPost {\n  color: #ffffff;\n  border-radius: 8px;\n  border: 1px solid #756f6390;\n  background-color: #1e1f2190;\n  padding: 2px 12px 6px 12px;\n  display: inline-block;\n  margin: 0px 0px 0px 10px;\n}\n\n.moreButton {\n  color: var(--ion-text-color);\n  border: 1px solid var(--ion-border-color-2);\n  background-color: var(--ion-card-background-2);\n  --background: var(--ion-card-background-2); \n  text-transform: none !important;\n  font-size: 16px;\n  border-radius: 8px;\n  --border-radius: 8px;\n  --box-shadow: none;\n  box-shadow: none;\n  padding: 0px;\n  height: 40px;\n  width: 240px;\n  margin: 12px auto 0px auto;\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6367:
/*!******************************************************!*\
  !*** ./src/app/legenda/legenda.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n\n  <!-- REFRESH --> \n  <ion-refresher style=\"padding: 34px 0px 120px 0px; margin-top: 0px;\" slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"madeRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n<div class=\"content-size\" style=\"padding: 16px; margin-bottom: 12px\">\n\n  <!-- LOADING IMAGE -->\n  <div *ngIf=\"!settings.legendPage?.FeaturedImage\">\n    <ion-thumbnail style=\"width: 100%; height: 36px; margin: 0px 0px 12px 0px;\"><ion-skeleton-text animated></ion-skeleton-text></ion-thumbnail>\n    <img style=\"width: 100%; background-color: var(--ion-border-color);\" src=\"assets/imgs/placeholder.png\" alt=\"Placeholder image\"/>\n  </div>\n\n<div *ngIf=\"settings.legendPage?.FeaturedImage\"> <!-- CONTENT START -->\n\n  <!-- TITLE --> \n  <h1 style=\"font-weight: 500; font-size: 36px; line-height: 36px; display: block; margin: 0px 0px 12px 0px;\" [innerHTML]=\"settings.legendPage?.Title\"></h1>\n    \n  <!-- REACT -->\n  <button *ngIf=\"settings.legendPage?.Date\" slot=\"end\" style=\"margin: 20px 0px 0px 12px !important; color: #ffffff; border: 1px solid #756f6390; background-color: #1e1f2190; box-shadow: none; font-size: 26px;\" class=\"toggleFav headerButton ion-activatable ripple-parent\" [ngClass]=\"{'active': settings.legendPage?.Favorite}\" (click)=\"favorite()\">\n    <ion-icon class=\"heart-outline\" name=\"heart-outline\"></ion-icon>\n    <ion-icon class=\"heart\" name=\"heart\"></ion-icon>\n    <ion-label style=\"position: absolute; top: -2px; right: -2px; min-width: 14px; padding: 3px 5px 3px 5px; background-color: var(--ion-color-gold); color: #000000; border-radius: 50px; font-weight: 500; font-size: 8px;\">{{settings.legendPage?.Likes}}</ion-label>\n  <ion-ripple-effect type=\"bounded\" style=\"border-radius: 8px;\"></ion-ripple-effect>\n  </button>\n    \n  <!-- IMAGE --> \n  <img *ngIf=\"settings.legendPage?.FeaturedImage\" loading=\"lazy\" width=\"1200\" height=\"670\" style=\"margin-top: -56px; border-radius: 8px; width: 100%; height: auto;\" src=\"{{settings.legendPage?.FeaturedImage}}\" alt=\"{{settings.legendPage?.Title}}\"/>\n  \n  <!-- CHIPS -->\n  <div style=\"margin: -48px 0px 0px 2px;\">\n    <div *ngIf=\"settings.legendPage?.Points > 0\" class=\"postChip\">\n      <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); font-size: 10pt; margin: 0px 5px -2.5px 0px;\"></ion-icon>\n      <ion-label style=\"font-weight: 500; font-size: 8pt;\">{{'PREMIUM' | translate}}</ion-label>\n    </div>\n  \n    <div class=\"postChip\">\n      <ion-label style=\"font-weight: 500; font-size: 8pt;\">· {{settings.legendPage?.Date}} ·</ion-label>\n    </div>\n\n    <!-- <div *ngIf=\"legenda?.formatted_date\" class=\"postChip\">\n      <ion-label style=\"font-weight: 500; font-size: 8pt;\"><ion-icon name=\"eye-outline\" style=\"margin: 0px 3px -2px 0px;\"></ion-icon> ·  {{legenda?.meta.views}} ·</ion-label>\n    </div>\n    \n    <div *ngIf=\"legenda?.total_comments > '0'\" class=\"postChip\">\n      <ion-label style=\"font-weight: 500; font-size: 8pt;\"><ion-icon name=\"chatbox-ellipses-outline\" style=\"margin: 0px 3px -2px 0px;\"></ion-icon> · {{legenda?.total_comments}} ·</ion-label>\n    </div> -->\n\n  </div>\n  \n  <!-- CONTENT -->\n  <ion-card class=\"legend\" lines=\"none\" style=\"--background: transparent; margin: 0px !important; padding: 0px !important; box-shadow: none; border-radius: 0px; transform: none;\">\n    <p *ngIf=\"settings.legendPage?.Points == 0\" [innerHTML]=\"settings.legendPage?.ContentHTML\"></p>\n    <p *ngIf=\"settings.legendPage?.Points > 0\" [innerHTML]=\"settings.legendPage?.ContentShort\" class=\"content-pro\"></p>\n  </ion-card>\n\n  <!-- PROGRESS BAR -->\n  <p *ngIf=\"settings.legendPage?.Points > 0\" style=\"font-size: 12px; padding: 0px; margin: 0px 0px 0px 0px; text-align: center; font-weight: bold; z-index: 10;\">{{'LEFT_MORE' | translate}} {{settings.legendPage?.Progress_left}}% {{'TEXT' | translate}}</p>\n  <div *ngIf=\"settings.legendPage?.Points > 0\" class=\"p5 progress-outer\">\n    <div class=\"progress-inner\">{{settings.legendPage?.Progress}}</div>\n  </div>\n\n  <!-- DOWNLOAD APP -->\n  <ion-card class=\"image-background\" style=\"text-align: center; padding: 12px; margin: 0px; box-shadow: none; background-color: var(--ion-card-background-2); border-radius: 8px; border: 1px solid var(--ion-border-color-2);\">\n    <ion-label *ngIf=\"settings.legendPage?.Points == 0\" style=\"font-size: 22px; font-weight: 500;\">{{'DOWNLOAD_APP' | translate}}</ion-label>\n    <ion-label *ngIf=\"settings.legendPage?.Points > 0\" style=\"font-size: 22px; font-weight: 500;\">{{'MORE_IN_APP' | translate}}</ion-label>\n                         \n    <div style=\"display: flex; justify-content: center; margin: 12px 0px 0px 0px; \">\n      <a *ngIf=\"!settings.aplikacja_ios\" (click)=\"appToast()\" class=\"socialButtons\">\n        <ion-img style=\"margin-right: 3px; height: 40px;\" src=\"assets/imgs/apple_{{this.settings.langCode}}.svg\"></ion-img>\n      </a>\n\n      <a *ngIf=\"settings.aplikacja_ios\" href=\"{{settings.aplikacja_ios}}\" target=\"_blank\" class=\"socialButtons\">\n        <ion-img style=\"margin-right: 3px; height: 40px;\" src=\"assets/imgs/apple_{{this.settings.langCode}}.svg\"></ion-img>\n      </a>\n      \n      <a *ngIf=\"settings.aplikacja_android\" href=\"{{settings.aplikacja_android}}\" target=\"_blank\" class=\"socialButtons\">\n        <ion-img style=\"margin-left: 3px; height: 40px;\" src=\"assets/imgs/google_{{this.settings.langCode}}.svg\"></ion-img>\n      </a>\n    </div>\n  </ion-card>\n\n\n  <!-- TAGS\n  <p *ngIf=\"this.tags_names\" style=\"margin: 0px; padding: 20px 0px 8px 0px; font-weight: 500; font-size: 20px;\"><ion-icon name=\"bookmark\" style=\"border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); font-size: 12px; padding: 6px; margin: 0px 6px -6px 0px;\"></ion-icon>{{'TAGS' | translate}}</p>\n  <div>\n    <ion-card *ngFor=\"let tag of this.tags_names; let i = index\" [routerLink]=\"['/' + this.settings.langCode,'tag',getTagSlug(tag)]\" title=\"Tag: {{tag}}\" style=\"text-decoration: underline; box-shadow: none; color: var(--ion-text-color); border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); padding: 3px 12px 6px 12px; display: inline-block; margin: 0px 6px 0px 0px;\">{{tag}}, </ion-card>\n  </div>\n\n -->\n  <!-- KOMENTARZE\n  <div *ngIf=\"!this.loading\">\n  <ion-card *ngIf=\"hasComments\" style=\"box-shadow: none; border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-card-background); padding: 12px 12px 12px 0px; margin: 16px 0px 0px 0px;\">\n    <ion-list style=\"background-color: transparent; padding: 0px;\">\n      <h2 style=\"margin: 0px 0px 5px 16px;\">{{'COMMENTS' | translate}}</h2>\n      <ion-item *ngFor=\"let comments of comment\" lines=\"none\" style=\"--background: transparent; margin: 0px; padding: 0px;\">\n        <ion-avatar style=\"width: 60px; height: 60px; margin-bottom: auto;\" slot=\"start\">\n        <img *ngIf=\"getAuthorPremium(comments.author_name) == '0' || settings.subskrybcja\" loading=\"lazy\" class=\"comment-avatar\" src=\"{{getAuthorAvatar(comments.author_name)}}\">\n        <div *ngIf=\"getAuthorPremium(comments.author_name) == '1' && !settings.subskrybcja\">\n          <img loading=\"lazy\" style=\"background-color: var(--ion-color-gold) !important;\" class=\"comment-avatar\" src=\"{{getAuthorAvatar(comments.author_name)}}\">\n          <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); background-color: #242527; border-radius: 50%; border: 1px solid #ffffff; padding: 3px; font-size: 8px; position: absolute; top: 12px; left: 14px;\"></ion-icon>\n        </div>\n        </ion-avatar>\n        <ion-label>\n          <div style=\"border-radius: 8px; background-color: var(--ion-background-color); padding: 8px;\">\n            <h3 style=\"color: var(--ion-text-color); font-weight: bold;\">{{getAuthorName(comments.author_name)}}</h3>\n            <p style=\"color: var(--ion-text-color); white-space: normal;\" [innerHTML]=\"comments.content.rendered\"></p>\n          </div>\n          <p style=\"display: inline-flex; color: var(--ion-text-color); font-size: 10px; line-height: 14px; margin-right: 6px;\">{{comments.formatted_date}}</p>\n          <ion-button *ngIf=\"!comments.liked\" class=\"likeButton\" (click)=\"likeComment(comments)\">{{'LIKE_IT' | translate}}</ion-button>\n          <ion-button *ngIf=\"comments.liked\" class=\"likeButton\" (click)=\"likeComment(comments)\" style=\"color: var(--ion-color-red);\">{{'YOU_LIKE_IT' | translate}}</ion-button>\n\n          <p *ngIf=\"comments.meta.like > 0\" style=\"border: 1px solid var(--ion-border-color); border-radius: 8px; padding: 2px 3px 2px 3px; display: inline-flex; color: var(--ion-text-color); font-size: 10px; line-height: 10px; margin-left: 2px;\">{{comments.meta.like}}<ion-icon name=\"heart\" style=\"color: var(--ion-color-red); font-size: 10px; margin: 0px 0px -3px 2px;\"></ion-icon></p>\n          \n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-button *ngIf=\"this.totalComments > 0 && !loadingComment\" class=\"moreButton\" (click)=\"loadComments()\">{{'LOAD_ALSO' | translate}} {{this.totalComments}} {{'COMMENTS' | translate}}</ion-button>\n     -->\n    <!-- LOADING COMMENTS\n    <div *ngIf=\"loadingComment\" style=\"text-align: center !important;\">\n      <ion-spinner style=\"margin-top: 12px; display: block; margin-left: auto; margin-right: auto;\" name=\"lines\"></ion-spinner>\n      <ion-label style=\"font-weight: 500; font-size: 12pt; line-height: 16pt;\">{{'LOADING' | translate}}</ion-label>\n    </div> -->\n\n\n  <!-- BRAK KOMENTARZY -->\n  <ion-card *ngIf=\"!hasComments\" style=\"box-shadow: none; border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); padding: 12px; margin: 16px 0px 0px 0px;\">\n      <span style=\"color: var(--ion-text-color);\">{{'NO_COMMENTS' | translate}}</span>\n  </ion-card>\n\n  <!-- FORMULARZ -->\n  <h3 style=\"text-align: center;\">{{'WRITE_COMMENTS' | translate}}</h3>\n    <form #commentForm=\"ngForm\" style=\"margin: 0px; padding: 0px;\">\n\n    <!-- ZAPISANE DANE -->\n    <ion-item *ngIf=\"this.profileData\" lines=\"none\" style=\"box-shadow: none; border-radius: 8px; border: 1px solid var(--ion-border-color-2); --background: transparent; background-color: var(--ion-card-background); padding: 0px; margin: 0px;\">\n      <ion-avatar style=\"width: 60px; height: 60px;\" slot=\"start\">\n        <img *ngIf=\"authorPremium == '0'\" loading=\"lazy\" class=\"comment-avatar\" src=\"{{getAuthorAvatar(this.authorAvatar)}}\">\n        <div *ngIf=\"authorPremium == '1'\">\n          <img loading=\"lazy\" style=\"background-color: var(--ion-color-gold) !important;\" class=\"comment-avatar\" src=\"{{getAuthorAvatar(this.authorAvatar)}}\">\n          <ion-icon name=\"star\" style=\"color: var(--ion-color-gold); background-color: #242527; border-radius: 50%; border: 1px solid #ffffff; padding: 3px; font-size: 8px; position: absolute; top: 12px; left: 14px;\"></ion-icon>\n        </div>\n      </ion-avatar>\n      <ion-label>\n        <h3><strong style=\"color: var(--ion-text-color);\">{{'NAME' | translate}}</strong>{{this.authorName}}</h3>\n        <ion-button (click)=\"editProfileData()\" class=\"editButton\">{{'EDIT' | translate}}\n        </ion-button>\n      </ion-label>\n    </ion-item>\n      \n    <!-- AVATAR -->\n    <ion-card *ngIf=\"!this.profileData\" style=\"box-shadow: none; border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-card-background); padding: 12px 0px 12px 12px; margin: 16px 0px 8px 0px;\">\n    <p style=\"text-align: center;\">{{'CHOOSE_AVATAR' | translate}}</p>\n    \n    <ion-slides [options]=\"slideEpic\">\n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-1.png\" (click)=\"authorImage('1')\" [ngStyle]=\"selectedAvatar('1')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n        \n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-2.png\" (click)=\"authorImage('2')\" [ngStyle]=\"selectedAvatar('2')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n\n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-3.png\" (click)=\"authorImage('3')\" [ngStyle]=\"selectedAvatar('3')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n      \n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-4.png\" (click)=\"authorImage('4')\" [ngStyle]=\"selectedAvatar('4')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n      \n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-5.png\" (click)=\"authorImage('5')\" [ngStyle]=\"selectedAvatar('5')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n\n      <ion-slide style=\"justify-content: left; align-items: left;\">\n        <ion-img src=\"assets/imgs/avatar-6.png\" (click)=\"authorImage('6')\" [ngStyle]=\"selectedAvatar('6')\" class=\"avatar-click ion-activatable ripple-parent\">\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-img>\n      </ion-slide>\n    </ion-slides>\n    </ion-card>\n      \n    <!-- IMIĘ -->\n    <ion-item *ngIf=\"!this.profileData\" lines=\"none\" class=\"field-i\">\n        <ion-label position=\"floating\" class=\"label-i\"><ion-icon name=\"person-outline\" style=\"margin-right: 2px; font-size: 12px; margin-bottom: -1px;\"></ion-icon>{{'NAME_2' | translate}}</ion-label>\n        <ion-input (ionChange)=\"authorNameRestrict()\" style=\"color: var(--ion-text-color);\" class=\"input-i\" [inputmode]=\"'text'\" type=\"text\" name=\"authorName\" [(ngModel)]=\"authorName\" #aName=\"ngModel\" required ></ion-input>\n    </ion-item>\n\n    <!-- KOMENTARZ -->\n    <ion-item lines=\"none\" class=\"field-i\" style=\"margin-top: -8px;\">\n        <ion-label position=\"floating\" style=\"margin-top: 8px; -webkit-transform: translateY(100%);\" class=\"label-i\">{{'YOUR_COMMENT' | translate}}</ion-label>\n        <ion-textarea (ionChange)=\"commentCount()\" style=\"padding: 12px 12px 4px 12px !important;\" class=\"input-i\" [inputmode]=\"'text'\" type=\"text\" name=\"commentText\" [(ngModel)]=\"commentText\" #cmtTxt=\"ngModel\" required spellcheck=\"true\" rows=\"3\" autoGrow=\"true\" type=\"text\" maxlength=\"400\"><p style=\"overflow: hidden; display: inline; position: absolute; bottom: -8px; right: 5px; font-size: 10px;\">{{this.commentTextCount}}/400</p></ion-textarea>\n    </ion-item>\n        \n    <!-- PRZYCISK -->\n    <ion-button expand=\"block\" (click)=\"postComment()\" style=\"margin: 12px 0px 0px 0px; text-transform: capitalize; height: 50px; font-size: 16px; box-shadow: none; --box-shadow: none; border-radius: 8px; --background: var(--ion-text-color);\">\n    {{'ADD_COMMENT' | translate}}<ion-spinner *ngIf=\"spinnerComment\" name=\"lines\" style=\"margin-left: 6px; width: 22px; margin-bottom: -2px;\"></ion-spinner>\n    </ion-button>\n    \n    </form>\n  </div>\n\n</div> <!-- CONTENT END-->\n\n\n<app-footer></app-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_legenda_legenda_module_ts.js.map
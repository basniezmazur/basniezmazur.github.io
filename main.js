(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [{
  path: '',
  redirectTo: '/pl',
  pathMatch: 'full'
}, {
  path: ':lang',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_mainPage_mainPage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mainPage/mainPage.module */ 9143)).then(m => m.MainPageModule)
}, {
  path: ':lang/legenda/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_legenda_legenda_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./legenda/legenda.module */ 7446)).then(m => m.LegendaPageModule)
}, {
  path: ':lang/mapa',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_mapa_mapa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mapa/mapa.module */ 7607)).then(m => m.MapaPageModule)
}, {
  path: ':lang/stronica/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_stronica_stronica_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stronica/stronica.module */ 5333)).then(m => m.StronicaPageModule)
}, {
  path: ':lang/ulubione',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_ulubione-page_ulubione-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ulubione-page/ulubione-page.module */ 5810)).then(m => m.UlubionePagePageModule)
}, {
  path: ':lang/roadmap',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_roadmap-page_roadmap-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./roadmap-page/roadmap-page.module */ 9939)).then(m => m.RoadmapPagePageModule)
}, {
  path: ':lang/tag/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_tag-page_tag-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tag-page/tag-page.module */ 7922)).then(m => m.TagPagePageModule)
}, {
  path: ':lang/404',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_error-page_error-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./error-page/error-page.module */ 6867)).then(m => m.ErrorPagePageModule)
}, {
  path: '**',
  redirectTo: '/404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules,
    initialNavigation: 'enabledBlocking',
    useHash: true
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_hieviimedia_Desktop_Inne_APLIKACJE_legendy_web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commonfunction.service */ 5806);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var src_app_services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Service */ 8914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);

var _class;













let AppComponent = (_class = class AppComponent {
  constructor(meta, router, CFS, swUpdate, settings, service, route, translate, navCtrl) {
    this.meta = meta;
    this.router = router;
    this.CFS = CFS;
    this.swUpdate = swUpdate;
    this.settings = settings;
    this.service = service;
    this.route = route;
    this.translate = translate;
    this.navCtrl = navCtrl;
    this.DarkIcon = false;
    this.darkMode = false;
    this.selectedPath = '';
    this.cookies = true;
    this.noConnection = false;
    this.settingsLoading = false;
    translate.setDefaultLang('pl');
    this.router.events.subscribe(event => {
      let r = this.route;
      while (r.firstChild) {
        r = r.firstChild;
      }
      r.params.subscribe(params => {
        // console.log(params.lang);
        let language = localStorage.getItem('language');
        if (params.lang != '404') {
          translate.use(params.lang);
          localStorage.setItem('language', params.lang);
          this.langImage = 'assets/imgs/' + params.lang + '.png';
        }
        if (params.lang != 'pl' && params.lang != 'en' && params.lang != 'de') {
          this.navCtrl.navigateForward('/pl');
          this.langImage = 'assets/imgs/pl.png';
        }
      });
    });
    this.selectedPath = this.router.url;
    this.router.events.subscribe(event => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.settings.currentYear = new Date().getFullYear();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_hieviimedia_Desktop_Inne_APLIKACJE_legendy_web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (localStorage.getItem('favoriteLegends')) {
        _this.settings.favoriteLegends = JSON.parse(localStorage.getItem('favoriteLegends'));
      }
      _this.getAccessToken();
      _this.checkDarkTheme();
      let cookies_data = localStorage.getItem('cookies');
      if (cookies_data === 'false') {
        _this.cookies = false;
      }
      _this.swUpdate.available.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_hieviimedia_Desktop_Inne_APLIKACJE_legendy_web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          //this.CFS.presentToast('Dostępna jest nowa wersja strony, odświeżanie za 3s.','top',3000);
          _this.swUpdate.activateUpdate();
          //setTimeout(() => {
          //  window.location.reload();
          //}, 3000);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      _this.swUpdate.checkForUpdate();
      //this.openai('Zasugeruj przepis na danie ze składników: jajko, mleko, płatki owsiane, jabłko');
    })();
  }

  openai(text) {
    this.service.openAICompletion(text).then(response => {
      if (response["error"]) {
        this.noConnection = true;
        console.log(response);
      } else if (response) {
        console.log(response);
      }
    });
  }
  getAccessToken() {
    this.service.getAccessToken().then(response => {
      if (response["error"]) {
        this.noConnection = true;
        console.log(response);
      } else if (response) {
        this.settings.token = response["access_token"];
        this.refreshAccessToken();
        this.getSettings();
      }
    });
  }
  // Refresh Acess Token Every 50 minutes
  refreshAccessToken() {
    let time = 3000000;
    this.countDownDate = new Date().getTime() + time;
    this.tokenInterval = setInterval(() => {
      let now = new Date().getTime();
      this.distance = this.countDownDate - now;
      if (this.distance < 0) {
        clearInterval(this.tokenInterval);
        this.service.getAccessToken().then(response => {
          if (response["error"]) {
            this.noConnection = true;
          } else if (response) {
            this.settings.token = response["access_token"];
            this.refreshAccessToken();
          }
        });
      }
    }, 1000);
  }
  getSettings() {
    this.settingsLoading = true;
    this.service.getData("settings").then(response => {
      if (response["error"]) {
        this.noConnection = true;
        this.settingsLoading = false;
      } else if (response) {
        this.settings.legends = this.service.convertData(response.values.splice(2)).reverse();
        this.settings.legends.forEach(Post => {
          Post.Excerpt = Post.Content.match(/^.{1,200}/g);
          Post.ContentHTML = Post.Content.replace(/(?:\r\n|\r|\n)/g, '<br>');
          Post.ContentShort = Post.ContentHTML.match(/^.{1,2300}/g);
          Post.Slug = this.getSlug(Post.Title);
          Post.FeaturedImage = '/assets/images/' + Post.FeaturedImage;
          Post.Progress = 230000 / Post.Content.length;
          Post.Progress_left = 100 - Post.Progress.toFixed(2);
          Post.Progress = Post.Progress.toFixed(2) + "%";
          if (this.settings.favoriteLegends) {
            if (this.settings.favoriteLegends.find(x => x.Slug == Post.Slug)) {
              Post.Favorite = true;
            } else {
              Post.Favorite = false;
            }
          } else {
            Post.Favorite = false;
          }
        });
        if (this.settings.legendsPageSlug) {
          this.service.getLegendPage();
        }
        //console.log(this.settings.legends);
        let setting = this.service.convertData(response.values)[0];
        //console.log(setting);
        this.settings.aplikacja_android = setting.AplikacjaAndroid;
        this.settings.aplikacja_ios = setting.AplikacjaiOS;
        this.settings.facebook = setting.Facebook;
        this.settings.instagram = setting.Instagram;
        this.settings.youtube = setting.Youtube;
        this.settings.przerwa_techniczna = JSON.parse(setting.TechnicalBreak.toLowerCase());
        this.noConnection = false;
        this.settingsLoading = false;
      }
    });
  }
  getSlug(r) {
    r = r.replace(/[^a-zA-Z ]/g, "").replace(/ +/g, '-');
    r = r.toLowerCase();
    return r;
  }
  acceptCookies() {
    this.cookies = false;
    localStorage.setItem('cookies', 'false');
  }
  checkDarkTheme() {
    this.darkMode = localStorage.getItem('dark_mode');
    if (this.darkMode === 'true') {
      document.body.classList.toggle('dark');
      this.DarkIcon = localStorage.getItem('dark_mode');
      this.meta.updateTag({
        name: 'theme-color',
        content: '#141413'
      });
      this.settings.mapStyle = this.settings.stylesNight;
    } else {
      localStorage.setItem('dark_mode', 'false');
      this.settings.mapStyle = this.settings.stylesDay;
    }
  }
  toggleDark() {
    this.darkMode = localStorage.getItem('dark_mode');
    if (this.darkMode === 'false') {
      document.body.classList.toggle('dark');
      localStorage.setItem('dark_mode', 'true');
      this.DarkIcon = localStorage.getItem('dark_mode');
      this.meta.updateTag({
        name: 'theme-color',
        content: '#141413'
      });
      this.settings.mapStyle = this.settings.stylesNight;
    } else {
      document.body.classList.toggle('dark');
      localStorage.setItem('dark_mode', 'false');
      this.DarkIcon = localStorage.getItem('dark_mode');
      this.DarkIcon = !this.DarkIcon;
      this.meta.updateTag({
        name: 'theme-color',
        content: '#e0d7c8'
      });
      this.settings.mapStyle = this.settings.stylesDay;
    }
  }
  selectedTab(path) {
    if (this.selectedPath.includes(path)) {
      return {
        'background-color': 'var(--ion-border-color-2)',
        'color': 'var(--ion-text-color)'
      };
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_3__.CommonfunctionService
}, {
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.SwUpdate
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_4__.Settings
}, {
  type: src_app_services_Service__WEBPACK_IMPORTED_MODULE_5__.Service
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}], _class);
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 1627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Service */ 8914);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/settings */ 5393);


















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({
    animated: false
  }), _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserTransferStateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
    }
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: true,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (30000) (whichever comes first).
    registrationStrategy: 'registerWhenStable: 0'
  })],
  providers: [_services_Service__WEBPACK_IMPORTED_MODULE_3__.Service, src_app_entities_settings__WEBPACK_IMPORTED_MODULE_5__.Settings, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__.HashLocationStrategy
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
  }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_0__.OneSignal, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
})], AppModule);

function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/***/ }),

/***/ 5393:
/*!**************************************!*\
  !*** ./src/app/entities/settings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
class Settings {
  constructor() {
    this.token = '';
    this.przerwa_techniczna = false;
    this.legends = [];
    this.favoriteLegends = [];
    this.stylesDay = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#ede4d3"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#948e84"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#ede4d3"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e8dcc5"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e0d7c8"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#d6cebf"
      }]
    }];
    this.stylesNight = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#1a1917"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#8f897e"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#1a1917"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#242220"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2e2e2a"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#080807"
      }]
    }];
    this.mapStyle = this.stylesDay;
  }
}

/***/ }),

/***/ 8914:
/*!*************************************!*\
  !*** ./src/app/services/Service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Service": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
var _class;






let Service = (_class = class Service {
  constructor(http, settings, router, titleService, meta) {
    this.http = http;
    this.settings = settings;
    this.router = router;
    this.titleService = titleService;
    this.meta = meta;
    this.suffix1 = 'master-of-masuria/';
    this.suffix2 = 'wp/v2/';
    this.languageSufix = '&lang=' + this.settings.langCode;
    this.website = 'https://basniezmazur.pl/service/';
    this.gmailAPI = 'https://gmail.googleapis.com/gmail/v1/users/';
    this.sheetApi = 'https://sheets.googleapis.com/v4/spreadsheets/';
    this.authUrl = 'https://accounts.google.com/o/oauth2/token';
    this.SHEET_ID = "1Ou-0GEn2mTgvtvf9xlfk_TRUV2mc4Vk6Bkhhtq8Je8g";
    this.GMAIL = "basniezmazur@gmail.com";
    this.CLIENT_ID = "577965281277-u8mbolue2i38jda6pa98rt4aoib21j0p.apps.googleusercontent.com";
    this.CLIENT_SECRET = "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";
    this.REFRESH_TOKEN = "1//04mo3REP3nbAnCgYIARAAGAQSNwF-L9IrA1AVVurnm2PadCkbfA724nG2zom3JZZPsPMqMgg1TxA74ZUdMIjTGznKKg8pqdANOOM";
  }
  openAICompletion(text) {
    let key = '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';
    var url = 'https://api.openai.com/v1/completions';
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Authorization': `Bearer ${key}`,
      'Accept': 'application/json'
    });
    let content = {
      "model": "text-davinci-003",
      "prompt": text,
      "max_tokens": 1000,
      "temperature": 0,
      "user": "user123456"
    };
    return new Promise((resolve, reject) => {
      this.http.post(url, content, {
        headers
      }).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  getLegendPage() {
    if (this.settings.legends.length > 0) {
      this.settings.legendPage = this.settings.legends.find(obj => {
        return obj.Slug === this.settings.legendsPageSlug;
      });
      if (!this.settings.legendPage) {
        this.router.navigate(['/' + this.settings.langCode + '/404']);
      } else {
        document.documentElement.style.setProperty(`--progress-width`, this.settings.legendPage.Progress);
        let seo_short = this.settings.legendPage.Content.replaceAll(/(\r\n|\n|\r)/gm, "");
        let seo_description = seo_short.match(/^.{1,150}/g);
        document.documentElement.setAttribute("lang", this.settings.langCode);
        this.titleService.setTitle(this.settings.legendPage.Title + ' • Baśnie z Mazur');
        this.meta.updateTag({
          name: 'description',
          content: seo_description
        });
        // OpenGraph Meta Tags
        this.meta.updateTag({
          property: 'og:title',
          content: this.settings.legendPage.Title
        });
        this.meta.updateTag({
          property: 'og:description',
          content: seo_description
        });
        this.meta.updateTag({
          property: 'og:image',
          content: this.settings.legendPage.FeaturedImage
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
          content: this.settings.legendPage.Title
        });
        this.meta.updateTag({
          property: 'twitter:description',
          content: seo_description
        });
        this.meta.updateTag({
          property: 'twitter:image',
          content: this.settings.legendPage.FeaturedImage
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
        }, '{"@context":"https://schema.org","@graph":[{"@type":"Article","datePublished":"' + this.settings.legendPage.Date + '","headline":"' + this.settings.legendPage.Title + '","description":"' + seo_description + '","name":"' + this.settings.legendPage.Title + '","image":{"@type":"ImageObject","@id":"' + this.settings.legendPage.FeaturedImage + '","url":"' + this.settings.legendPage.FeaturedImage + '","height":670,"width":1200,"caption":"' + this.settings.legendPage.Title + '"},"thumbnailUrl":"' + this.settings.legendPage.FeaturedImage + '"}]}', function () {});
      }
    }
  }
  /*** GENERATE ACCESS TOKEN ***/
  getAccessToken() {
    var url = this.authUrl;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    let content = {
      "grant_type": "refresh_token",
      "client_id": this.CLIENT_ID,
      "client_secret": this.CLIENT_SECRET,
      "refresh_token": this.REFRESH_TOKEN
    };
    return new Promise((resolve, reject) => {
      this.http.post(url, content, {
        headers
      }).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** GET DATA - places, events, users ***/
  getData(key) {
    var url = this.sheetApi + this.SHEET_ID + '/values/' + key;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Authorization': `Bearer ${this.settings.token}`,
      'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.get(url, {
        headers
      }).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** CONVERT SHEET RESPONSE READABLE API ***/
  convertData(data) {
    const headers = data[0];
    const raw_data = data.slice(1);
    let json = [];
    let filter = [];
    raw_data.forEach(d => {
      let object = {};
      for (let i = 0; i < headers.length; i++) {
        object[headers[i]] = d[i];
      }
      json.push(object);
    });
    return json;
  }
  /*** SITE SETTTINGS ***/
  getSiteSettings() {
    var url = this.website + this.suffix1 + this.suffix2 + 'sitesettings';
    url = url;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** ROADMAP ***/
  getRecentRoadmap(lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'roadmap';
    var filter = '&_fields=title,content';
    url = url + '?per_page=20' + this.languageSufix + '&lang=' + lang + '&order=asc';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** PREMIERY ***/
  getPremiery() {
    var url = this.website + this.suffix1 + 'legendy/premiery/2021';
    url = url + '?per_page=3';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** LEGENDY HOME ***/
  getRecentLegendy(page, searchLegenda, lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'posts';
    var filter = '&_fields=title,meta,slug,excerpt,formatted_date,total_comments,featured_media,image_url,id,ACF';
    page = page ? page : 1;
    url = url + '?per_page=4&page=' + page + filter + '&search=' + searchLegenda + '&lang=' + lang;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** LEGENDY MAP ALL ***/
  getLegendaMapAll(lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'posts';
    var filter = '?_fields=title,slug,excerpt,formatted_date,featured_media,total_comments,image_url,lang,ACF&per_page=99';
    url = url + filter + '&lang=' + lang;
    return this.http.get(url);
  }
  /*** LEGENDA PAGE ***/
  getLegenda(slug, lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'posts';
    var filter = '&_fields=title,content,slug,excerpt,meta,plaintext,meta,formatted_date,link,total_comments,categories_names,featured_media,lang,image_url,id,ACF';
    url = url + '?slug=' + slug + filter + '&lang=' + lang;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** STRONICA PAGE ***/
  getStronica(slug, lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'stronica';
    var filter = '?_fields=title,content';
    url = url + filter + '&slug=' + slug + '&lang=' + lang;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** CATEGORIES SEARCH ***/
  searchCategory(tag, lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'categories';
    url = url + '?search=' + tag + '&lang=' + lang;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** CATEGORY PAGE ***/
  getTag(page, category, lang) {
    var url = this.website + this.suffix1 + this.suffix2 + 'posts';
    var filter = '&_fields=title,meta,slug,excerpt,formatted_date,total_comments,featured_media,image_url,id,lang,ACF';
    page = page ? page : 1;
    url = url + '?categories=' + category + '&per_page=4&page=' + page + filter + '&lang=' + lang;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** REACTION ***/
  postReaction(postId) {
    return this.http.get(this.website + this.suffix1 + 'reaction/v1/react/' + postId + '?type=like');
  }
  /*** UN-REACTION ***/
  postUnReaction(postId) {
    return this.http.get(this.website + this.suffix1 + 'reaction/v1/unreact/' + postId + '?type=like');
  }
  /*** VIEWS ***/
  postViews(postId) {
    return this.http.get(this.website + this.suffix1 + 'reaction/v1/react/' + postId + '?type=views');
  }
  /*** KOMENTARZE REACTION ***/
  commentReaction(commentId) {
    return this.http.get(this.website + this.suffix1 + 'reaction/comment/react/' + commentId + '?type=like');
  }
  /*** KOMENTARZE UN-REACTION ***/
  commentUnReaction(commentId) {
    return this.http.get(this.website + this.suffix1 + 'reaction/comment/unreact/' + commentId + '?type=like');
  }
  /*** POST COMMENT ***/
  postAComment(commentDataJson) {
    var url = this.website + this.suffix1 + this.suffix2 + 'comments';
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.post(url, commentDataJson, {
        headers
      }).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
  /*** GET COMMENTS ***/
  getCommentByPost(postId, page) {
    var url = this.website + this.suffix1 + this.suffix2 + 'comments/?post=' + postId + '&per_page=6' + '&page=' + page + '&_fields=id,parent,author_name,content,meta,date,formatted_date';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        resolve(error);
      });
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_0__.Settings
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta
}], _class);
Service = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], Service);


/***/ }),

/***/ 5806:
/*!****************************************************!*\
  !*** ./src/app/services/commonfunction.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonfunctionService": () => (/* binding */ CommonfunctionService)
/* harmony export */ });
/* harmony import */ var _Users_hieviimedia_Desktop_Inne_APLIKACJE_legendy_web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);

var _class;



let CommonfunctionService = (_class = class CommonfunctionService {
  constructor(toastCtrl, alertCtrl) {
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
  }
  presentToast(messageToShow, mesgPosition, showDuration) {
    var _this = this;
    return (0,_Users_hieviimedia_Desktop_Inne_APLIKACJE_legendy_web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message: messageToShow,
        position: mesgPosition,
        duration: showDuration,
        cssClass: 'toaster',
        buttons: [{
          text: 'Zamknij',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      toast.present();
    })();
  }
  presentAlert(alrtHeader, alrtMessage) {
    let alert = this.alertCtrl.create({
      header: alrtHeader,
      subHeader: alrtMessage,
      buttons: ['Dismiss']
    }).then(alert => {
      alert.present();
    });
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}], _class);
CommonfunctionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CommonfunctionService);


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  navigator.serviceWorker.register('/ngsw-worker.js');
}
function bootstrap() {
  (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));
}
;
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".source-button {\n  text-align: left;\n  margin: 0px !important;\n  padding: 0px;\n  box-shadow: none;\n  border-radius: 0px;\n  display: flex;\n  --box-shadow: none;\n  box-shadow: 0px;\n  border: 0px solid var(--ion-border-color);\n  background-color: transparent;\n  color: var(--ion-text-color);\n  text-decoration: none;\n  position: relative;\n}\n\n.source-button:hover {\n  background-color: var(--ion-text-color);\n  color: var(--ion-background-color);\n}\n.source-button:hover .circ-icon {\n  color: var(--ion-text-color);\n}\n\n.etykieta {\n  opacity: 0.5;\n}\n\n.back-drop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 120vh;\n  background: var(--ion-text-color);\n  opacity: 0.3;\n  z-index: 10;\n}\n\n.info-button {\n  width: 50%;\n  text-align: center;\n  text-decoration: underline;\n  opacity: 0.5;\n  margin: 6px !important;\n  background-color: rgba(28, 149, 108, 0);\n  --background: #1C956C00;\n  border-radius: 14px;\n  --border-radius: 14px;\n  border: 1px solid var(--ion-border-color);\n  color: var(--ion-text-colory);\n  --color: var(--ion-text-color);\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  text-transform: none;\n  min-height: 40px;\n  --ripple-color: #80808050;\n  --background-focused: #80808050;\n  --background-activated: #80808050;\n  --background-hover: #80808050;\n  --box-shadow: none;\n  box-shadow: none;\n}\n\n.socialButtons {\n  color: var(--ion-background-color);\n  border-radius: 50px;\n  border: 1px solid var(--ion-text-color);\n  background-color: var(--ion-text-color);\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 0px;\n  text-transform: none;\n  min-height: 54px;\n  width: 54px;\n  --box-shadow: none;\n  --background: transparent;\n  --border-radius: 50px;\n  box-shadow: none;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.headLogo {\n  color: var(--ion-background-color);\n  border-radius: 0px;\n  border: 0px solid var(--ion-text-color);\n  background-color: transparent;\n  padding: 0px;\n  min-height: 54px;\n  width: 90px;\n  --box-shadow: none;\n  --background: transparent;\n  --border-radius: 0px;\n  --ripple-color: var(--ion-text-color) !important;\n  box-shadow: none;\n  display: block;\n  margin: 0px auto -5px auto;\n}\n\n.togleDark ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all 0.3s;\n  opacity: 0;\n  font-size: 22px;\n}\n.togleDark ion-icon.sun {\n  width: 24px;\n  height: 24px;\n  opacity: 1;\n}\n\nbutton.active ion-icon.moon {\n  width: 24px;\n  height: 24px;\n  opacity: 1;\n  will-change: transform;\n  transform: scale(1);\n  visibility: visible;\n  animation: bounce-in-fwd 0.4s both;\n}\nbutton.active ion-icon.sun {\n  width: 54px;\n  height: 54px;\n  opacity: 0;\n  will-change: transform;\n  transform: scale(1);\n  visibility: hidden;\n}\n@keyframes bounce-in-fwd {\n  0% {\n    transform: scale(1);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  50% {\n    transform: scale(2);\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    animation-timing-function: ease-in;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,yCAAA;EACA,6BAAA;EACA,4BAAA;EACA,qBAAA;EACA,kBAAA;AACF;;AAEA;EACE,uCAAA;EACA,kCAAA;AACF;AACE;EACE,4BAAA;AACJ;;AAGA;EACE,YAAA;AAAF;;AAIA;EACI,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,iCAAA;EACA,YAAA;EACA,WAAA;AADJ;;AAIA;EACE,UAAA;EACA,kBAAA;EACA,0BAAA;EACA,YAAA;EACA,sBAAA;EACA,uCAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yCAAA;EACA,6BAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,yBAAA;EACA,+BAAA;EACA,iCAAA;EACA,6BAAA;EACA,kBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kCAAA;EACA,mBAAA;EACA,uCAAA;EACA,uCAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,WAAA;EACF,kBAAA;EACA,yBAAA;EACA,qBAAA;EACA,gBAAA;EACA,6BAAA;EACA,0BAAA;EACA,2BAAA;EACA,4BAAA;AADA;;AAIA;EACE,kCAAA;EACA,kBAAA;EACA,uCAAA;EACA,6BAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACF,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,gDAAA;EACA,gBAAA;EACA,cAAA;EACA,0BAAA;AADA;;AAIA;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,oBAAA;EACA,UAAA;EACA,eAAA;AADF;AAGE;EACE,WAAA;EACA,YAAA;EACA,UAAA;AADJ;;AAOM;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EAEA,kCAAA;AAJR;AAOM;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AALR;AAgCA;EACE;IAEU,mBAAA;IAEA,kCAAA;IACR,UAAA;EAPF;EASA;IAEU,mBAAA;IAEA,mCAAA;IACR,UAAA;EAPF;EASA;IAEU,mBAAA;IAEA,kCAAA;EAPV;AACF","sourcesContent":[".source-button {\n  text-align: left;\n  margin: 0px !important;\n  padding: 0px;\n  box-shadow: none;\n  border-radius: 0px;\n  display: flex;\n  --box-shadow: none;\n  box-shadow: 0px;\n  border: 0px solid var(--ion-border-color);\n  background-color: transparent;\n  color: var(--ion-text-color);\n  text-decoration: none;\n  position: relative;\n}\n\n.source-button:hover {\n  background-color: var(--ion-text-color);\n  color: var(--ion-background-color);\n  \n  & .circ-icon {\n    color: var(--ion-text-color);\n  }\n}\n\n.etykieta {\n  opacity: 0.5;\n}\n\n\n.back-drop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 120vh;\n    background: var(--ion-text-color);\n    opacity: 0.3;\n    z-index: 10;\n}\n\n.info-button {\n  width: 50%;\n  text-align: center;\n  text-decoration: underline;\n  opacity: 0.5;\n  margin: 6px !important;\n  background-color: #1C956C00;\n  --background: #1C956C00;\n  border-radius: 14px;\n  --border-radius: 14px;\n  border: 1px solid var(--ion-border-color);\n  color: var(--ion-text-colory);\n  --color: var(--ion-text-color);\n  font-weight:600;\n  font-size:10px;\n  line-height: 20px;\n  text-transform:none;\n  min-height:40px;\n  --ripple-color: #80808050;\n  --background-focused: #80808050;\n  --background-activated: #80808050;\n  --background-hover: #80808050;\n  --box-shadow: none;\n  box-shadow:none;\n}\n\n.socialButtons {\n  color: var(--ion-background-color);\n  border-radius: 50px;\n  border: 1px solid var(--ion-text-color);\n  background-color: var(--ion-text-color);\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 0px;\n  text-transform: none;\n  min-height: 54px;\n  width: 54px;\n--box-shadow: none;\n--background: transparent;\n--border-radius: 50px;\nbox-shadow:none;\nmargin-bottom: 0px !important; \nmargin-top: 0px !important; \nmargin-left: 0px !important; \nmargin-right: 0px !important; \n}\n\n.headLogo {\n  color: var(--ion-background-color);\n  border-radius: 0px;\n  border: 0px solid var(--ion-text-color);\n  background-color: transparent;\n  padding: 0px;\n  min-height: 54px;\n  width: 90px;\n--box-shadow: none;\n--background: transparent;\n--border-radius: 0px;\n--ripple-color: var(--ion-text-color) !important; \nbox-shadow: none;\ndisplay: block;\nmargin: 0px auto -5px auto;\n}\n\n.togleDark ion-icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0px;\n  height: 0px;\n  transition: all .3s;\n  opacity: 0;\n  font-size: 22px;\n\n  &.sun {\n    width: 24px;\n    height: 24px;\n    opacity: 1;\n    }\n  }\n\n  button.active {\n    ion-icon {\n      &.moon {\n        width: 24px;\n        height: 24px;\n        opacity: 1;\n        will-change: transform;\n        transform: scale(1);\n        visibility: visible;\n        -webkit-animation: bounce-in-fwd 0.4s both;\n        animation: bounce-in-fwd 0.4s both;\n      }\n      \n      &.sun {\n        width: 54px;\n        height: 54px;\n        opacity: 0;\n        will-change: transform;\n        transform: scale(1);\n        visibility: hidden;\n      }\n    }\n  }\n\n@-webkit-keyframes bounce-in-fwd {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  50% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n}\n@keyframes bounce-in-fwd {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  50% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"settings.przerwa_techniczna\" style=\"text-align: center !important; width: 100%; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); color: var(--ion-text-color);\">\n    <ion-icon name=\"sparkles-outline\" style=\"display: block; margin: 12px auto; font-size: 60px;\"></ion-icon>\n    <ion-label style=\"font-weight: 500; font-size: 24px;\">{{'BREAK' | translate}}</ion-label>\n    <p style=\"font-weight: 500; font-size: 12px;\">{{'BREAK_DESC' | translate}}</p>\n</div>\n  \n<ion-app *ngIf=\"!settings.przerwa_techniczna\">\n<ion-header class=\"ion-head ion-no-border\" style=\"padding: 0px; background-color: var(--ion-card-background); box-shadow: none;\">\n  <ion-toolbar style=\"--background: transparent; box-shadow: none; --box-shadow: none; padding: 12px 10px 12px 10px; border-bottom: 0px solid var(--ion-border-color);\">\n\n      <a [routerLink]=\"[settings.langCode]\" class=\"headLogo ion-activatable ripple-parent\">\n        <svg style=\"fill: var(--ion-text-color);\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 990.96 558.24\"><g id=\"f813c6a6-5b1c-45f8-923c-108226cbf0dc\" data-name=\"Warstwa 2\"><g id=\"b23ba309-e63a-4a07-93a5-e3867fe16c3d\" data-name=\"NAPIS 2\"><path id=\"ae67ec08-8b12-4959-b114-bdcdcdc05a99\" data-name=\"r\" d=\"M936.56,471.36c-.2,5.11,2,10.95,8.69,10.95,1.41,0,1.41,1.65,0,1.65h-46c-1.42,0-1.42-1.65,0-1.65,6.66,0,8.88-5.84,8.68-10.95V367.92c.2-5.3-2-11-8.68-11-1.42,0-1.42-1.64,0-1.64l35.95.09c1.41,0,1.61.54,1.61,1.64,0,8.58-.2,16.25-.2,23,6.06-17.17,15.49-26.12,31.82-26.12C979,353.94,988,363,990,373.63c.58,3,1,7.46,1,7.46a1.52,1.52,0,0,1-2.48,1.26c-6.71-6.43-16.67-14.1-30.55-10.84-10,2.36-21.57,15.68-21.57,29C936.36,421.69,936.56,438.31,936.56,471.36Z\"/><path id=\"bfd9a9ef-18ad-4879-8b49-966225085944\" data-name=\"u\" d=\"M867.17,465.77c-.41,5.3,1.81,11,8.48,11a.82.82,0,1,1,0,1.64l-36,5.66c-1.41,0-1.82-.54-1.62-1.64,0-9.5.21-17.72.21-25A39.27,39.27,0,0,1,801.68,484c-13.74,0-25.67-8.22-25.67-24.85V367.93c.21-5.12-2-11-8.69-11-1.41,0-1.41-1.65,0-1.65l36,.09c1.41,0,1.62.55,1.62,1.64,0,31.43-.21,62.49-.21,93.92,0,11.33,5.66,16.63,12.33,16.63,8.49,0,18.6-8.59,21-24.49V367.93c.21-5.12-1.82-11-8.69-11a.83.83,0,1,1,0-1.65l36.18.09c1.21,0,1.62.55,1.62,1.64Z\"/><path id=\"b1437a34-e4b8-459f-88d6-dbc76cb46e1d\" data-name=\"z\" d=\"M708.57,365c2.61-4.74,1.2-5.53-3.23-5.53H682.9c-14.25,0-14.95,7.15-18.77,17.9-.51,1.4-1.06,1.87-2,1.73s-1.5-.69-1.42-2.1L661.92,361c.46-4.56,4.85-5.66,7.46-5.66,21.06,0,47.33.09,68.35.07a2.4,2.4,0,0,1,2.13,3.48l-58,115c-2.21,4-2,5.28,2.22,5.28h23.4c14.51,0,17.84-12,21.67-22.77.4-.91.87-1.5,1.67-1.44,1,.09,1.37.47,1.37,1.82,0,5.49-.2,16.91-.38,21.94-.17,4.45-2.94,4.82-4.78,4.82h-77.4V482.1Z\"/><path id=\"f9583095-266c-4f9d-b39f-6bb6bdcf3a70\" data-name=\"a\" d=\"M588.92,376.69c-2.81-9.45-11-16.35-20.69-16.35-18.08,0-29.53,21.43-29.53,35.6a1.1,1.1,0,0,1-1.2,1.09c-.41,0-.81-.18-.81-.73a41.79,41.79,0,0,1-2.54-13.59c.22-14.5,13.21-27.63,37.7-27.63a82.87,82.87,0,0,1,17.88,1.81c27.92,5.82,29.12,25.61,29.12,50.13,0,19.43.21,39.23.21,58.66,0,7.44,3.41,10.53,6.22,10.53a3.75,3.75,0,0,0,3.82-3.27c.4-1.27.8-1.63,1.2-1.63s.61.36.61.91c-1.41,8.53-11.25,13.44-20.89,13.44-9.85,0-19.49-5.09-19.49-16.71V457.87c-7,14.71-19.28,27.42-38.37,27.42-12.25,0-23.9-5.81-30.13-15.43-7.84-12.35-7.23-31.79,9.44-45,19.89-15.62,54.84-16.35,59.26-26.7C590.73,388.31,590.33,381.41,588.92,376.69Zm-35.35,49.4a26.16,26.16,0,0,0-3.82,30.69,19.68,19.68,0,0,0,17.08,10c9.84,0,20.29-7.63,23.7-25.79,0-11.62.2-23.25.2-34.87C582.69,413.19,564.21,414.28,553.57,426.09Z\"/><path id=\"b4e20dd8-26e3-4df8-9095-5c1bc8f3cc91\" data-name=\"M\" d=\"M498.76,482c-8.64,0-11.35-7.36-11.11-14.06V285.83c-.24-6.47,2.47-13.83,11.11-13.83a1,1,0,1,0,0-2H440c-1.48,0-1.48,2,1.23,2a9.44,9.44,0,0,1,5.43,2.23c2.47,2.67,2.23,7.14.74,11.6l-35.55,129-40.48-129c-2.22-6.47-1-13.83,7.65-13.83,1.48,0,2-2,.25-2H318.8c-1.73,0-1.73,2,0,2,8.39,0,11.35,7.36,11.11,13.83V468c.24,6.7-2.72,14.06-11.11,14.06-1.73,0-1.73,2,0,2h29.37a1,1,0,1,0,0-2c-8.64,0-11.35-7.36-11.11-14.06V303.24l45.11,144c1.67,10,15.15,104.92-76.34,104.92-34.37,0-59.19-27.21-59.19-55.82,0-35.92,16.83-42.51,30.27-48.1-36.72,0-50.64,25.68-50.64,49,0,14.57,8.65,58.54,79.44,61,71,0,87.57-45.57,104.52-111.23l40.89-148.23V468c.24,6.7-2.47,14.06-11.11,14.06a1,1,0,1,0,0,2h58.75A1,1,0,1,0,498.76,482Z\"/><path id=\"eead377d-6cb6-4adb-9464-23dd2ab9ca04\" data-name=\"z\" d=\"M203.07,321c1.65-3,.76-3.49-2-3.49H186.88c-9,0-9.43,4.51-11.84,11.29-.33.88-.67,1.18-1.25,1.09s-.95-.44-.9-1.32l.75-10.13c.29-2.88,3.07-3.57,4.71-3.57,13.28,0,29.85.05,43.11,0a1.51,1.51,0,0,1,1.34,2.2l-36.57,72.56c-1.4,2.52-1.27,3.33,1.4,3.33h14.76c9.15,0,11.25-7.58,13.66-14.36.26-.58.55-.95,1.06-.91s.87.29.86,1.15c0,3.46-.12,10.66-.24,13.83-.1,2.81-1.85,3-3,3H165.9v-.92Z\"/><path id=\"b39cfab0-c61c-45ee-b277-2a63bb6d2a06\" data-name=\"e\" d=\"M718.19,100.8c31.48,0,40.86,42.26,41.51,66.05a2.44,2.44,0,0,1-2.49,2.52c-11.64-.21-59.64.12-59.89.14,1.37,17.63,8.27,47.18,33.47,47.18,10.83,0,20.87-6.41,23.23-17.8.2-1.43,1-2.14,1.78-2.14.59,0,1.18.71,1,2.32-2.56,19-19.49,30.61-37.8,30.61a44.88,44.88,0,0,1-18.91-4.27c-41.94-19.76-42.53-99.87-.19-120.34A43.61,43.61,0,0,1,718.19,100.8Zm13.39,63.08c1.57-38.81-5.32-57.92-13.19-57.92-9.65,0-21.27,24.42-21.27,58.07Z\"/><g id=\"a923b6c5-c998-4334-adc5-000824988d59\" data-name=\"i\"><path d=\"M610.47,52.07c-14.54,10-7.17,29.28,11.21,29.28,4.15,0,6.54-.62,9.13-2.39,10.9-7.37,10.9-20,0-27.41C625.52,48,616.07,48.23,610.47,52.07Z\"/><path d=\"M599.05,102.11a2.64,2.64,0,0,0,2,1c.72,0,2.28,1,3.53,2.39l2.28,2.39V223.26l-2.7,2.81c-1.55,1.45-3.78,2.15-4.46,2.8s1.43.94,2,.93c9-.06,32.17-.06,41.63-.1.24,0,1.14-.93-.21-.93-.83,0-2.7-1.25-4.15-2.7l-2.49-2.7-.31-61.15-.21-61.15H617.11C604.86,101.07,598.63,101.39,599.05,102.11Z\"/></g><path id=\"e45748f8-c44f-4b60-afc9-4abe3b3c08c0\" data-name=\"n\" d=\"M505.07,217.12c-.2,5.12,2,11,8.71,11,1.42,0,1.42,1.65,0,1.65H467.6c-1.41,0-1.41-1.65,0-1.65,6.69,0,8.91-5.86,8.71-11V113.47c.2-5.31-2-11-8.71-11-1.41,0-1.41-1.64,0-1.64h36c1.42,0,1.62.55,1.62,1.65,0,9.15-.2,17.21-.2,24.35,6.68-17,22.28-25.45,36.05-25.45s25.72,8.24,25.72,24.9v90.82c0,5.12,2,11,8.91,11,1.22,0,1.22,1.65-.2,1.65H529.37c-1.21,0-1.41-1.65,0-1.65,6.69,0,8.91-5.86,8.71-11V134.54c0-11.35-5.67-16.66-12.15-16.66-8.3,0-18,7.87-21.06,22.7C504.87,164.75,505.07,181.23,505.07,217.12Z\"/><g id=\"b2949f82-3c5b-43af-940d-91db84d37708\" data-name=\"ś\"><path d=\"M373.71,191.57c-10.38,3.35-9.5,15.8-2,24.75,9.88,11.86,21.06,13.65,34,13,23.75-1.25,33-15.15,36.75-27.47,7.11-23.23-8.34-37.94-15.47-42.93-19.72-13.81-40.15-2.47-45.79-14.67-3.37-7.3-2.69-15.81,6.66-25.36,9-9.19,26.23-9.14,38.24-.85.92.63,5.11,4,.24,6.06-8.21,3.52-6.52,13.57,0,16.06,10.85,4.15,21-4.32,16.59-16.32-7.78-21-27.88-23.06-39.14-23-18.89,0-35.13,12.75-38.43,34C362.71,151.2,372.47,166.38,390,167c41.19,1.36,34.44,30.74,31.31,36.78-8.83,17-31,12.93-36.08,9.21-.74-.54-2.87-2.22-1.86-2.59,4.75-1.77,6.87-7.56,6.57-10.58C389.41,194.18,382.72,188.66,373.71,191.57Z\"/><path d=\"M442.43,49.57,415.19,81.51a.28.28,0,0,1-.21.1h-13.7a.28.28,0,0,1-.24-.42L420.7,49.24a.28.28,0,0,1,.24-.13h21.28A.28.28,0,0,1,442.43,49.57Z\"/></g><path id=\"a76b0fe7-804f-4a9c-b368-edf110d3dfa0\" data-name=\"a\" d=\"M301.55,122.16c-2.78-9.35-10.93-16.17-20.47-16.17-17.89,0-29.22,21.2-29.22,35.22a1.09,1.09,0,0,1-1.19,1.07c-.4,0-.79-.18-.79-.71a41.33,41.33,0,0,1-2.52-13.45c.21-14.36,13.07-27.34,37.3-27.34a81.74,81.74,0,0,1,17.69,1.79c27.62,5.75,28.82,25.34,28.82,49.6,0,19.22.19,38.81.19,58,0,7.37,3.38,10.43,6.17,10.43a3.71,3.71,0,0,0,3.77-3.24c.4-1.26.8-1.62,1.19-1.62s.6.36.6.9C341.7,225.12,332,230,322.42,230c-9.74,0-19.28-5-19.28-16.53v-11c-7,14.55-19.08,27.13-38,27.13-12.12,0-23.65-5.75-29.81-15.27-7.75-12.22-7.16-31.45,9.34-44.57,19.67-15.45,54.26-16.17,58.63-26.41C303.34,133.66,302.94,126.83,301.55,122.16Zm-35,48.87a25.88,25.88,0,0,0-3.78,30.37,19.47,19.47,0,0,0,16.9,9.88c9.74,0,20.07-7.54,23.45-25.51,0-11.5.2-23,.2-34.5C295.39,158.27,277.1,159.35,266.57,171Z\"/><path id=\"aed1e271-d9e6-4961-9a0f-73fd9d5ce946\" data-name=\"B\" d=\"M61.71,2.07c-3.63.26-3.64,4.83.07,4.78C75,6.67,73,20,73.15,30.55c.64,50.78,1.63,153.07-.38,168.58-.84,6.5-7.36,15.74-12.62,15.73a1.67,1.67,0,1,0,.23,3.34c7.46.12,52.46.89,64.44.92,2.7,0,3.07-3-.15-3.14-4.8-.21-12-9.74-13-16.92-3-21.5-2.67-173.2-2.67-173.2s61.34-9,57.65,31.88a63.1,63.1,0,0,1-34.17,50.84s39.7,20.17,46.32,65.29c6.11,41.7-41.38,86.7-89.3,88.17-35.6,1.1-66.28-15.88-68.45-59.26-.62-12.28,3.4-39.11,21.82-48.59,3.81-2,7.87-3.68,7.87-3.68S-4.71,150,.32,207c4.24,48,45.87,63,87.77,63,37.24,0,121.47-17.94,125.46-98.8,1.78-35.93-46.15-62.65-46.15-62.65s29.13-12.8,38.45-40.78-12.7-49.8-34.48-59C157.85,3,137.06-1,105.63.21,96.43.57,86,.31,61.71,2.07Z\"/></g></g></svg>\n      <ion-ripple-effect type=\"bounded\" style=\"border-radius: 50%;\"></ion-ripple-effect>\n      </a>\n  \n      <!-- MENU OPEN  -->\n      <button slot=\"start\" style=\"color: var(--ion-card-background-2); border: 0px solid var(--ion-border-color-2); background-color: var(--ion-text-color); box-shadow: none; font-size: 26px;\" class=\"headerButton ion-activatable ripple-parent\">\n        <ion-menu-button>\n          <ion-icon name=\"menu-outline\" style=\"color: var(--ion-card-background-2); font-size: 30px;\"></ion-icon>\n        </ion-menu-button>\n      <ion-ripple-effect type=\"bounded\" style=\"border-radius: 8px;\"></ion-ripple-effect>\n      </button>\n\n      <!-- TRANSLATE -->\n      <button slot=\"start\" id=\"nested-button\" style=\"color: var(--ion-card-background-2); border: 0px solid var(--ion-border-color-2); background-color: var(--ion-text-color); box-shadow: none; font-size: 26px;\" class=\"headerButton ion-activatable ripple-parent\">\n        <img style=\"width: 22px; height: 22px; margin: 0px 0px -2px 0px;\" src=\"{{this.langImage}}\" alt=\"Language\"/>\n      <ion-ripple-effect type=\"bounded\" style=\"border-radius: 8px;\"></ion-ripple-effect>\n      </button>\n\n      <ion-popover trigger=\"nested-button\" [dismissOnSelect]=\"true\">\n        <ng-template>\n          <ion-content>\n            <ion-list lines=\"none\" style=\"padding: 0px; background-color: var(--ion-background-color);\">\n              <ion-item style=\"--background: var(--ion-background-color); border-bottom: 1px solid var(--ion-border-color-2);\" [button]=\"true\" [detail]=\"false\" [routerLink]=\"['pl']\">\n                <img loading=\"lazy\" style=\"width: 22px; height: 22px; margin: 0px 6px -2px 0px;\" src=\"assets/imgs/pl.png\" alt=\"Language\"/>\n                <ion-label>Polski</ion-label>\n              </ion-item>\n              <ion-item style=\"--background: var(--ion-background-color); border-bottom: 1px solid var(--ion-border-color-2);\"  [button]=\"true\" [detail]=\"false\" [routerLink]=\"['en']\">\n                <img loading=\"lazy\" style=\"width: 22px; height: 22px; margin: 0px 6px -2px 0px;\" src=\"assets/imgs/en.png\" alt=\"Language\"/>\n                <ion-label>English</ion-label>\n              </ion-item>\n              <ion-item style=\"--background: var(--ion-background-color)\"  [button]=\"true\" [detail]=\"false\" [routerLink]=\"['de']\">\n                <img loading=\"lazy\" style=\"width: 22px; height: 22px; margin: 0px 6px -2px 0px;\" src=\"assets/imgs/de.png\" alt=\"Language\"/>\n                <ion-label>Deutsch</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-content>\n        </ng-template>\n      </ion-popover>\n\n      <!-- ATRAPA  -->\n      <button slot=\"end\" style=\"color: var(--ion-card-background-2); border: 0px solid var(--ion-border-color-2); background-color: transparent; box-shadow: none; font-size: 26px;\" class=\"togleDark headerButton\">\n      </button>\n      \n      <!-- DARK MODE  -->\n      <button slot=\"end\" style=\"color: var(--ion-text-color); border: 0px solid var(--ion-border-color-2); background-color: transparent; box-shadow: none; font-size: 26px;\" class=\"togleDark headerButton ion-activatable ripple-parent\" [ngClass]=\"DarkIcon ? 'active' : ''\" (click)=\"toggleDark();\" >\n        <ion-icon class=\"sun\" name=\"flashlight-outline\"></ion-icon>\n        <ion-icon class=\"moon\" name=\"skull-outline\"></ion-icon>\n      <ion-ripple-effect type=\"bounded\" style=\"border-radius: 8px;\"></ion-ripple-effect>\n      </button>\n      \n    </ion-toolbar>\n</ion-header>\n\n     <ion-menu side=\"start\" swipeGesture=\"false\" menuId=\"first\" contentId=\"content\" type=\"overlay\">  \n       <ion-content style=\"--background: var(--ion-background-color) !important;\">  \n           <ion-menu-toggle auto-hide=\"true\">  \n\n             <!-- MENU CLOSE -->\n             <div style=\"border-bottom: 1px solid var(--ion-border-color);\">\n               <button style=\"margin: 18px 16px 18px 16px; color: var(--ion-card-background-2); border: 0px solid var(--ion-border-color-2); background-color: var(--ion-text-color); box-shadow: none; font-size: 26px;\" class=\"headerButton ion-activatable ripple-parent\">\n                 <ion-menu-button>\n                   <ion-icon name=\"close-outline\" style=\"color: var(--ion-card-background-2); font-size: 30px;\"></ion-icon>\n                 </ion-menu-button>\n               <ion-ripple-effect type=\"bounded\" style=\"border-radius: 8px;\"></ion-ripple-effect>\n               </button>\n             </div>\n\n             <!-- ETYKIETA -->\n             <div class=\"etykieta\" style=\"border-bottom: 1px solid var(--ion-border-color-2); text-transform: uppercase; text-align: left; padding: 18px 16px 18px 16px; font-size: 8pt; font-weight: 600;\">{{'MENU' | translate}}</div>\n             \n             <a [routerLink]=\"[settings.langCode,'mapa']\" [ngStyle]=\"selectedTab('mapa')\" class=\"source-button ion-activatable ripple-parent\">\n               <ion-icon style=\"width: 10%; position: absolute; right: 0px; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);\" name=\"chevron-forward-outline\"></ion-icon>\n               <p style=\"font-size: 16px; font-weight: 500; padding: 18px 16px 18px 16px; margin: 0px !important; text-align:left;\"><ion-icon class=\"circ-icon\" name=\"map-outline\" style=\"border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); font-size: 12px; padding: 6px; margin: 0px 8px -8px 0px;\"></ion-icon>{{'MAP' | translate}}</p>\n             <ion-ripple-effect></ion-ripple-effect>\n             </a>\n\n             <a [routerLink]=\"[this.settings.langCode,'ulubione']\" [ngStyle]=\"selectedTab('ulubione')\" class=\"source-button ion-activatable ripple-parent\">\n               <ion-icon style=\"width: 10%; position: absolute; right: 0px; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);\" name=\"chevron-forward-outline\"></ion-icon>\n               <p style=\"font-size: 16px; font-weight: 500; padding: 18px 16px 18px 16px; margin: 0px !important; text-align:left;\"><ion-icon class=\"circ-icon\" name=\"heart-outline\" style=\"border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); font-size: 12px; padding: 6px; margin: 0px 8px -8px 0px;\"></ion-icon>{{'FAVOURITE' | translate}}</p>\n             <ion-ripple-effect></ion-ripple-effect>\n             </a>\n             \n             <a [routerLink]=\"[this.settings.langCode,'roadmap']\" [ngStyle]=\"selectedTab('roadmap')\" class=\"source-button ion-activatable ripple-parent\">\n               <ion-icon style=\"width: 10%; position: absolute; right: 0px; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);\" name=\"chevron-forward-outline\"></ion-icon>\n               <p style=\"font-size: 16px; font-weight: 500; padding: 18px 16px 18px 16px; margin: 0px !important; text-align:left;\"><ion-icon class=\"circ-icon\" name=\"trail-sign-outline\" style=\"border-radius: 8px; border: 1px solid var(--ion-border-color-2); background-color: var(--ion-border-back-color); font-size: 12px; padding: 6px; margin: 0px 8px -8px 0px;\"></ion-icon>{{'ROADMAP' | translate}}</p>\n             <ion-ripple-effect></ion-ripple-effect>\n             </a>\n             \n             <div class=\"etykieta\" style=\"border-top: 1px solid var(--ion-border-color-2); text-align: center; padding: 18px; margin-bottom: 0px; font-size: 8pt; font-weight: 600;\">\n             {{'VERSION' | translate}}: 1.0.442<br>\n             2021-{{settings.currentYear}} basniezmazur.pl\n             </div>\n\n             <!-- PRIVACY -->\n             <div style=\"display: flex; justify-content: center; margin: 0px 10px 16px 10px;\">\n               <ion-button [routerLink]=\"['pl/stronica','polityka-prywatnosci']\" class=\"info-button\">{{'PRIVACY' | translate}}</ion-button>\n               <ion-button [routerLink]=\"['pl/stronica','regulamin']\" class=\"info-button\">{{'TERMS' | translate}}</ion-button>\n             </div>\n             \n             <div style=\"display: flex; justify-content: center; margin: 0px 0px 0px 0px; \">\n               <ion-button *ngIf=\"settings.facebook\" href=\"{{settings.facebook}}\" target=\"_blank\" class=\"socialButtons\" style=\"display: grid; grid-template-rows: 1fr auto; break-inside: avoid; margin-right: 6px !important;\">\n                 <ion-icon name=\"logo-facebook\"></ion-icon>\n               </ion-button>\n      \n               <ion-button *ngIf=\"settings.youtube\" href=\"{{settings.youtube}}\" target=\"_blank\" class=\"socialButtons\" style=\"display: grid; grid-template-rows: 1fr auto; break-inside: avoid; margin-right: 6px !important;\">\n                 <ion-icon name=\"logo-youtube\"></ion-icon>\n               </ion-button>\n      \n               <ion-button *ngIf=\"settings.instagram\" href=\"{{settings.instagram}}\" target=\"_blank\" class=\"socialButtons\" style=\"display: grid; grid-template-rows: 1fr auto; break-inside: avoid; margin-right: 6px !important;\">\n                 <ion-icon name=\"logo-instagram\"></ion-icon>\n               </ion-button>\n             </div>\n             \n           </ion-menu-toggle>  \n       </ion-content>   \n     </ion-menu>\n\n<ion-content>\n     <ion-router-outlet Id=\"content\" [animated]=\"false\"></ion-router-outlet>\n</ion-content>\n     \n     <!-- <div *ngIf=\"cookies\" class=\"back-drop\"></div> -->\n     <ion-footer class=\"ion-no-border\" style=\"box-shadow: none; border: none;\">\n       <ion-card *ngIf=\"cookies\" class=\"cookies\">\n         <p style=\"font-size: 13px; font-weight: 500;\">{{'COOKIES' | translate}} <a [routerLink]=\"['pl/stronica/polityka-prywatnosci']\" style=\"color: var(--ion-background-color);\">{{'PRIVACY_LINK' | translate}}</a>.</p>\n                         \n         <div style=\"display: flex; justify-content: center; margin: 18px 0px 0px 0px;\">\n           <ion-button (click)=\"acceptCookies()\" class=\"basicButton ion-activatable ripple-parent\">\n             <ion-icon name=\"shield-checkmark-outline\" style=\"margin: 0px 3px -1px 0px;\"></ion-icon>{{'OK_ENTER' | translate}}\n           <ion-ripple-effect></ion-ripple-effect>\n           </ion-button>\n         </div>\n       </ion-card>\n     </ion-footer>\n\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
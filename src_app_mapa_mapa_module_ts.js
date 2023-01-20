(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mapa_mapa_module_ts"],{

/***/ 1006:
/*!*********************************************!*\
  !*** ./src/app/mapa/mapa-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 7948);




const routes = [{
  path: '',
  component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage
}];
let MapaPageRoutingModule = class MapaPageRoutingModule {};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MapaPageRoutingModule);


/***/ }),

/***/ 7607:
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/markerclusterer */ 6111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-routing.module */ 1006);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page */ 7948);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);











let MapaPageModule = class MapaPageModule {};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapaPageRoutingModule, _agm_core__WEBPACK_IMPORTED_MODULE_8__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCWRctxhkGjQj8UsK9oDtqZ7rlMduyK3ig',
    //AIzaSyCtE6FgA9YHVdQZV8sr_EInUtuH38i-gj8
    language: localStorage.getItem('language'),
    libraries: ['places']
  }), _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_9__.AgmMarkerClustererModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_1__.MapaPage],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
})], MapaPageModule);


/***/ }),

/***/ 7948:
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page.html?ngResource */ 5119);
/* harmony import */ var _mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.scss?ngResource */ 3305);
/* harmony import */ var _mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var src_app_services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Service */ 8914);
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commonfunction.service */ 5806);
/* harmony import */ var src_app_entities_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/settings */ 5393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
var _class;










let MapaPage = (_class = class MapaPage {
  constructor(service, geolocation, CFS, settings, route, translate) {
    this.service = service;
    this.geolocation = geolocation;
    this.CFS = CFS;
    this.settings = settings;
    this.route = route;
    this.translate = translate;
    this.legendy = [];
    this.loadingLegenda = true;
    this.lastNumberLegenda = 20;
    this.pageLegenda = 1;
    this.searchLegenda = '';
    this.mapLat = 53.62768894448802;
    this.mapLng = 21.808961338541817;
    this.zoom = 9;
    this.loadingMoreData = false;
    this.currentZoom = 11;
    this.showSelected = false;
    this.loading = true;
    this.positions = [];
    this.openedWindow = 0;
    this.locationActive = false;
    this.locationLoading = false;
    this.locateDot = false;
    this.clickedLocate = 0;
    this.minClusterSize = 50;
    this.clusterMarker = [{
      url: "../../assets/imgs/cluster.svg",
      width: 60,
      height: 60,
      rect: 30,
      textColor: "var(--ion-color-gold)",
      textSize: 30
    }, {
      url: "../../assets/imgs/cluster.svg",
      width: 60,
      height: 60,
      rect: 30,
      textColor: "var(--ion-color-gold)",
      textSize: 30
    }];
    this.clusterCalculator = {
      calculate: markers => {
        for (let i = 0; i < markers.length; i++) {
          console.log(i);
          if (i = 2) {
            return {
              text: markers.length,
              index: 1
            };
          }
          if (i = 3) {
            return {
              text: markers.length,
              index: 2
            };
          }
        }
      }
    };
    this.currentIW = null;
    this.previousIW = null;
    this.settings.langCode = this.route.snapshot.paramMap.get("lang");
    document.documentElement.setAttribute("lang", this.settings.langCode);
  }
  loadMoreLegendy(lang) {
    this.loadingLegenda = true;
    this.service.getLegendaMapAll(lang).subscribe(data => {
      if (data && data.length > 0) {
        // console.log(data)
        this.legendy = this.legendy.concat(data);
        this.lastNumberLegenda = data.length;
        this.pageLegenda = this.pageLegenda + 1;
        this.loadingLegenda = false;
        this.legendy.forEach(Legenda => {
          if (this.settings.isPro === true) {
            Legenda.ACF.wersja_pro = false;
          }
        });
      } else {
        this.lastNumberLegenda = 0;
        this.loadingLegenda = false;
      }
    });
  }
  appToast() {
    this.CFS.presentToast(this.translate.instant('APP_SOON'), 'top', 1300);
  }
  ngOnInit() {}
  myPosition() {
    this.clickedLocate = this.clickedLocate + 1;
    this.locationLoading = true;
    this.geolocation.getCurrentPosition().then(resp => {
      this.myLat = resp.coords.latitude;
      this.myLng = resp.coords.longitude;
      this.mapLat = resp.coords.latitude;
      this.mapLng = resp.coords.longitude;
      this.zoom = 9;
      this.locationActive = true;
      this.locationLoading = false;
      this.CFS.presentToast(this.translate.instant('YOUR-CO-ORDINATES') + this.myLat + ', ' + this.myLng, 'top', 3000);
    }).catch(error => {
      console.log(error);
      this.locationActive = false;
      this.locationLoading = false;
      if (error.code == 1) {
        this.CFS.presentToast(this.translate.instant('UNLOCK_LOCALIZATION'), 'top', 3000);
      } else if (error.code == 2) {
        this.CFS.presentToast(this.translate.instant('CANT_GET_LOCALIZATION'), 'top', 3000);
      } else if (error.code == 3) {
        this.CFS.presentToast(this.translate.instant('LIMIT_LOCALIZATION'), 'top', 3000);
      }
    });
  }
  checkPro(item) {
    if (item === true) {
      return '../../../assets/imgs/marker-pro.svg';
    } else {
      return '../../../assets/imgs/marker.svg';
    }
  }
  ionViewDidEnter() {}
  openWindow(id) {
    this.openedWindow = id;
  }
  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }
  mapClick() {
    if (this.previousIW) {
      this.previousIW.close();
    }
  }
  markerClick(infoWindow) {
    if (this.previousIW) {
      this.currentIW = infoWindow;
      this.previousIW.close();
    }
    this.previousIW = infoWindow;
  }
  centerChanged(event) {
    this.myLat;
    this.myLng;
    this.mapLat;
    this.mapLng;
    this.zoom = 10;
  }
}, _class.ctorParameters = () => [{
  type: src_app_services_Service__WEBPACK_IMPORTED_MODULE_3__.Service
}, {
  type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
}, {
  type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_4__.CommonfunctionService
}, {
  type: src_app_entities_settings__WEBPACK_IMPORTED_MODULE_5__.Settings
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}], _class);
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-mapa',
  template: _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MapaPage);


/***/ }),

/***/ 3333:
/*!******************************************************************!*\
  !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgmBicyclingLayer": () => (/* binding */ AgmBicyclingLayer),
/* harmony export */   "AgmCircle": () => (/* binding */ AgmCircle),
/* harmony export */   "AgmCoreModule": () => (/* binding */ AgmCoreModule),
/* harmony export */   "AgmDataLayer": () => (/* binding */ AgmDataLayer),
/* harmony export */   "AgmFitBounds": () => (/* binding */ AgmFitBounds),
/* harmony export */   "AgmFullscreenControl": () => (/* binding */ AgmFullscreenControl),
/* harmony export */   "AgmGeocoder": () => (/* binding */ AgmGeocoder),
/* harmony export */   "AgmInfoWindow": () => (/* binding */ AgmInfoWindow),
/* harmony export */   "AgmKmlLayer": () => (/* binding */ AgmKmlLayer),
/* harmony export */   "AgmMap": () => (/* binding */ AgmMap),
/* harmony export */   "AgmMapTypeControl": () => (/* binding */ AgmMapTypeControl),
/* harmony export */   "AgmMarker": () => (/* binding */ AgmMarker),
/* harmony export */   "AgmPanControl": () => (/* binding */ AgmPanControl),
/* harmony export */   "AgmPolygon": () => (/* binding */ AgmPolygon),
/* harmony export */   "AgmPolyline": () => (/* binding */ AgmPolyline),
/* harmony export */   "AgmPolylineIcon": () => (/* binding */ AgmPolylineIcon),
/* harmony export */   "AgmPolylinePoint": () => (/* binding */ AgmPolylinePoint),
/* harmony export */   "AgmRectangle": () => (/* binding */ AgmRectangle),
/* harmony export */   "AgmRotateControl": () => (/* binding */ AgmRotateControl),
/* harmony export */   "AgmScaleControl": () => (/* binding */ AgmScaleControl),
/* harmony export */   "AgmStreetViewControl": () => (/* binding */ AgmStreetViewControl),
/* harmony export */   "AgmTransitLayer": () => (/* binding */ AgmTransitLayer),
/* harmony export */   "AgmZoomControl": () => (/* binding */ AgmZoomControl),
/* harmony export */   "CircleManager": () => (/* binding */ CircleManager),
/* harmony export */   "DataLayerManager": () => (/* binding */ DataLayerManager),
/* harmony export */   "FitBoundsAccessor": () => (/* binding */ FitBoundsAccessor),
/* harmony export */   "GoogleMapsAPIWrapper": () => (/* binding */ GoogleMapsAPIWrapper),
/* harmony export */   "GoogleMapsScriptProtocol": () => (/* binding */ GoogleMapsScriptProtocol),
/* harmony export */   "InfoWindowManager": () => (/* binding */ InfoWindowManager),
/* harmony export */   "KmlLayerManager": () => (/* binding */ KmlLayerManager),
/* harmony export */   "LAZY_MAPS_API_CONFIG": () => (/* binding */ LAZY_MAPS_API_CONFIG),
/* harmony export */   "LayerManager": () => (/* binding */ LayerManager),
/* harmony export */   "LazyMapsAPILoader": () => (/* binding */ LazyMapsAPILoader),
/* harmony export */   "MapsAPILoader": () => (/* binding */ MapsAPILoader),
/* harmony export */   "MarkerManager": () => (/* binding */ MarkerManager),
/* harmony export */   "NoOpMapsAPILoader": () => (/* binding */ NoOpMapsAPILoader),
/* harmony export */   "PolygonManager": () => (/* binding */ PolygonManager),
/* harmony export */   "PolylineManager": () => (/* binding */ PolylineManager),
/* harmony export */   "RectangleManager": () => (/* binding */ RectangleManager),
/* harmony export */   "coreDirectives": () => (/* binding */ coreDirectives),
/* harmony export */   "ɵa": () => (/* binding */ FitBoundsService),
/* harmony export */   "ɵb": () => (/* binding */ AgmMapControl),
/* harmony export */   "ɵc": () => (/* binding */ WindowRef),
/* harmony export */   "ɵd": () => (/* binding */ DocumentRef),
/* harmony export */   "ɵe": () => (/* binding */ BROWSER_GLOBALS_PROVIDERS)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4370);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3167);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8532);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = ["*"];
class MapsAPILoader {}
MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
  return new (t || MapsAPILoader)();
};
MapsAPILoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MapsAPILoader,
  factory: MapsAPILoader.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
class GoogleMapsAPIWrapper {
  constructor(_loader, _zone) {
    this._loader = _loader;
    this._zone = _zone;
    this._map = new Promise(resolve => {
      this._mapResolver = resolve;
    });
  }
  createMap(el, mapOptions) {
    return this._zone.runOutsideAngular(() => {
      return this._loader.load().then(() => {
        const map = new google.maps.Map(el, mapOptions);
        this._mapResolver(map);
        return;
      });
    });
  }
  setMapOptions(options) {
    return this._zone.runOutsideAngular(() => {
      this._map.then(m => {
        m.setOptions(options);
      });
    });
  }
  /**
   * Creates a google map marker with the map context
   */
  createMarker(options = {}, addToMap = true) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => {
        if (addToMap) {
          options.map = map;
        }
        return new google.maps.Marker(options);
      });
    });
  }
  createInfoWindow(options) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(() => new google.maps.InfoWindow(options));
    });
  }
  /**
   * Creates a google.map.Circle for the current map.
   */
  createCircle(options) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => {
        options.map = map;
        return new google.maps.Circle(options);
      });
    });
  }
  /**
   * Creates a google.map.Rectangle for the current map.
   */
  createRectangle(options) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => {
        options.map = map;
        return new google.maps.Rectangle(options);
      });
    });
  }
  createPolyline(options) {
    return this._zone.runOutsideAngular(() => {
      return this.getNativeMap().then(map => {
        const line = new google.maps.Polyline(options);
        line.setMap(map);
        return line;
      });
    });
  }
  createPolygon(options) {
    return this._zone.runOutsideAngular(() => {
      return this.getNativeMap().then(map => {
        const polygon = new google.maps.Polygon(options);
        polygon.setMap(map);
        return polygon;
      });
    });
  }
  /**
   * Creates a new google.map.Data layer for the current map
   */
  createDataLayer(options) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(m => {
        const data = new google.maps.Data(options);
        data.setMap(m);
        return data;
      });
    });
  }
  /**
   * Creates a TransitLayer instance for a map
   * @returns a new transit layer object
   */
  createTransitLayer() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => {
        const newLayer = new google.maps.TransitLayer();
        newLayer.setMap(map);
        return newLayer;
      });
    });
  }
  /**
   * Creates a BicyclingLayer instance for a map
   * @returns a new bicycling layer object
   */
  createBicyclingLayer() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => {
        const newLayer = new google.maps.BicyclingLayer();
        newLayer.setMap(map);
        return newLayer;
      });
    });
  }
  /**
   * Determines if given coordinates are insite a Polygon path.
   */
  containsLocation(latLng, polygon) {
    return this._map.then(() => google.maps.geometry.poly.containsLocation(latLng, polygon));
  }
  subscribeToMapEvent(eventName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._map.then(m => m.addListener(eventName, () => this._zone.run(() => observer.next(arguments[0]))));
    });
  }
  clearInstanceListeners() {
    return this._zone.runOutsideAngular(() => {
      this._map.then(map => {
        google.maps.event.clearInstanceListeners(map);
      });
    });
  }
  setCenter(latLng) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.setCenter(latLng));
    });
  }
  getZoom() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.getZoom());
    });
  }
  getBounds() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.getBounds());
    });
  }
  getMapTypeId() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.getMapTypeId());
    });
  }
  setZoom(zoom) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.setZoom(zoom));
    });
  }
  getCenter() {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.getCenter());
    });
  }
  panTo(latLng) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.panTo(latLng));
    });
  }
  panBy(x, y) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.panBy(x, y));
    });
  }
  fitBounds(latLng, padding) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.fitBounds(latLng, padding));
    });
  }
  panToBounds(latLng, padding) {
    return this._zone.runOutsideAngular(() => {
      return this._map.then(map => map.panToBounds(latLng, padding));
    });
  }
  /**
   * Returns the native Google Maps Map instance. Be careful when using this instance directly.
   */
  getNativeMap() {
    return this._map;
  }
  /**
   * Triggers the given event name on the map instance.
   */
  triggerMapEvent(eventName) {
    return this._map.then(m => google.maps.event.trigger(m, eventName));
  }
}
GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
  return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
GoogleMapsAPIWrapper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GoogleMapsAPIWrapper,
  factory: GoogleMapsAPIWrapper.ɵfac
});
GoogleMapsAPIWrapper.ctorParameters = () => [{
  type: MapsAPILoader
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: MapsAPILoader
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class CircleManager {
  constructor(_apiWrapper, _zone) {
    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._circles = new Map();
  }
  addCircle(circle) {
    this._apiWrapper.getNativeMap().then(() => this._circles.set(circle, this._apiWrapper.createCircle({
      center: {
        lat: circle.latitude,
        lng: circle.longitude
      },
      clickable: circle.clickable,
      draggable: circle.draggable,
      editable: circle.editable,
      fillColor: circle.fillColor,
      fillOpacity: circle.fillOpacity,
      radius: circle.radius,
      strokeColor: circle.strokeColor,
      strokeOpacity: circle.strokeOpacity,
      strokePosition: google.maps.StrokePosition[circle.strokePosition],
      strokeWeight: circle.strokeWeight,
      visible: circle.visible,
      zIndex: circle.zIndex
    })));
  }
  /**
   * Removes the given circle from the map.
   */
  removeCircle(circle) {
    return this._circles.get(circle).then(c => {
      c.setMap(null);
      this._circles.delete(circle);
    });
  }
  setOptions(circle, options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return this._circles.get(circle).then(c => {
        const actualParam = options.strokePosition;
        options.strokePosition = google.maps.StrokePosition[actualParam];
        c.setOptions(options);
      });
    });
  }
  getBounds(circle) {
    return this._circles.get(circle).then(c => c.getBounds());
  }
  getCenter(circle) {
    return this._circles.get(circle).then(c => c.getCenter());
  }
  getRadius(circle) {
    return this._circles.get(circle).then(c => c.getRadius());
  }
  setCenter(circle) {
    return this._circles.get(circle).then(c => c.setCenter({
      lat: circle.latitude,
      lng: circle.longitude
    }));
  }
  setEditable(circle) {
    return this._circles.get(circle).then(c => c.setEditable(circle.editable));
  }
  setDraggable(circle) {
    return this._circles.get(circle).then(c => c.setDraggable(circle.draggable));
  }
  setVisible(circle) {
    return this._circles.get(circle).then(c => c.setVisible(circle.visible));
  }
  setRadius(circle) {
    return this._circles.get(circle).then(c => c.setRadius(circle.radius));
  }
  getNativeCircle(circle) {
    return this._circles.get(circle);
  }
  createEventObservable(eventName, circle) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      let listener = null;
      this._circles.get(circle).then(c => {
        listener = c.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
      return () => {
        if (listener !== null) {
          listener.remove();
        }
      };
    });
  }
}
CircleManager.ɵfac = function CircleManager_Factory(t) {
  return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CircleManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CircleManager,
  factory: CircleManager.ɵfac
});
CircleManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

/**
 * Manages all Data Layers for a Google Map instance.
 */
class DataLayerManager {
  constructor(_wrapper, _zone) {
    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new Data Layer to the map.
   */
  addDataLayer(layer) {
    const newLayer = this._wrapper.createDataLayer({
      style: layer.style
    }).then(d => {
      if (layer.geoJson) {
        // NOTE: accessing "features" on google.maps.Data is undocumented
        this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
      }
      return d;
    });
    this._layers.set(layer, newLayer);
  }
  deleteDataLayer(layer) {
    this._layers.get(layer).then(l => {
      l.setMap(null);
      this._layers.delete(layer);
    });
  }
  updateGeoJson(layer, geoJson) {
    this._layers.get(layer).then(l => {
      l.forEach(feature => {
        l.remove(feature);
        // NOTE: accessing "features" on google.maps.Data is undocumented
        const index = l.features.indexOf(feature, 0);
        if (index > -1) {
          l.features.splice(index, 1);
        }
      });
      this.getDataFeatures(l, geoJson).then(features => l.features = features);
    });
  }
  setDataOptions(layer, options) {
    this._layers.get(layer).then(l => {
      l.setControlPosition(options.controlPosition);
      l.setControls(options.controls);
      l.setDrawingMode(options.drawingMode);
      l.setStyle(options.style);
    });
  }
  /**
   * Creates a Google Maps event listener for the given DataLayer as an Observable
   */
  createEventObservable(eventName, layer) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._layers.get(layer).then(d => {
        d.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    });
  }
  /**
   * Extract features from a geoJson using google.maps Data Class
   * @param d : google.maps.Data class instance
   * @param geoJson : url or geojson object
   */
  getDataFeatures(d, geoJson) {
    return new Promise((resolve, reject) => {
      if (typeof geoJson === 'object') {
        try {
          const features = d.addGeoJson(geoJson);
          resolve(features);
        } catch (e) {
          reject(e);
        }
      } else if (typeof geoJson === 'string') {
        d.loadGeoJson(geoJson, null, resolve);
      } else {
        reject(`Impossible to extract features from geoJson: wrong argument type`);
      }
    });
  }
}
DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
  return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
DataLayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DataLayerManager,
  factory: DataLayerManager.ɵfac
});
DataLayerManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
class FitBoundsAccessor {}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
class FitBoundsService {
  constructor(loader) {
    this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(200);
    this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(new Map());
    this.bounds$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(loader.load()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.flatMap)(() => this._includeInBounds$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.sample)(this._boundsChangeSampleTime$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(time => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(0, time)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(includeInBounds => this._generateBounds(includeInBounds)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
  }
  _generateBounds(includeInBounds) {
    const bounds = new google.maps.LatLngBounds();
    includeInBounds.forEach(b => bounds.extend(b));
    return bounds;
  }
  addToBounds(latLng) {
    const id = this._createIdentifier(latLng);
    if (this._includeInBounds$.value.has(id)) {
      return;
    }
    const boundsMap = this._includeInBounds$.value;
    boundsMap.set(id, latLng);
    this._includeInBounds$.next(boundsMap);
  }
  removeFromBounds(latLng) {
    const boundsMap = this._includeInBounds$.value;
    boundsMap.delete(this._createIdentifier(latLng));
    this._includeInBounds$.next(boundsMap);
  }
  changeFitBoundsChangeSampleTime(timeMs) {
    this._boundsChangeSampleTime$.next(timeMs);
  }
  getBounds$() {
    return this.bounds$;
  }
  _createIdentifier(latLng) {
    return `${latLng.lat}+${latLng.lng}`;
  }
}
FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
  return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MapsAPILoader));
};
FitBoundsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FitBoundsService,
  factory: FitBoundsService.ɵfac
});
FitBoundsService.ctorParameters = () => [{
  type: MapsAPILoader
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FitBoundsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();
class AgmGeocoder {
  constructor(loader) {
    const connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      loader.load().then(() => subscriber.next());
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => this._createGeocoder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.multicast)(new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1)));
    connectableGeocoder$.connect(); // ignore the subscription
    // since we will remain subscribed till application exits
    this.geocoder$ = connectableGeocoder$;
  }
  geocode(request) {
    return this.geocoder$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(geocoder => this._getGoogleResults(geocoder, request)));
  }
  _getGoogleResults(geocoder, request) {
    const geocodeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.bindCallback)(geocoder.geocode);
    return geocodeObservable(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([results, status]) => {
      if (status === google.maps.GeocoderStatus.OK) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(results);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.throwError)(status);
    }));
  }
  _createGeocoder() {
    return new google.maps.Geocoder();
  }
}
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
  return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MapsAPILoader));
};
AgmGeocoder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function AgmGeocoder_Factory() {
    return new AgmGeocoder((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MapsAPILoader));
  },
  token: AgmGeocoder,
  providedIn: "root"
});
AgmGeocoder.ctorParameters = () => [{
  type: MapsAPILoader
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();
class WindowRef {
  getNativeWindow() {
    return window;
  }
}
class DocumentRef {
  getNativeDocument() {
    return document;
  }
}
const BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
const LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');
class LazyMapsAPILoader extends MapsAPILoader {
  constructor(config = null, w, d, localeId) {
    super();
    this.localeId = localeId;
    this._SCRIPT_ID = 'agmGoogleMapsApiScript';
    this.callbackName = `agmLazyMapsAPILoader`;
    this._config = config || {};
    this._windowRef = w;
    this._documentRef = d;
  }
  load() {
    const window = this._windowRef.getNativeWindow();
    if (window.google && window.google.maps) {
      // Google maps already loaded on the page.
      return Promise.resolve();
    }
    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }
    // this can happen in HMR situations or Stackblitz.io editors.
    const scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
    if (scriptOnPage) {
      this._assignScriptLoadingPromise(scriptOnPage);
      return this._scriptLoadingPromise;
    }
    const script = this._documentRef.getNativeDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.id = this._SCRIPT_ID;
    script.src = this._getScriptSrc(this.callbackName);
    this._assignScriptLoadingPromise(script);
    this._documentRef.getNativeDocument().body.appendChild(script);
    return this._scriptLoadingPromise;
  }
  _assignScriptLoadingPromise(scriptElem) {
    this._scriptLoadingPromise = new Promise((resolve, reject) => {
      this._windowRef.getNativeWindow()[this.callbackName] = () => {
        resolve();
      };
      scriptElem.onerror = error => {
        reject(error);
      };
    });
  }
  _getScriptSrc(callbackName) {
    const protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
    let protocol;
    switch (protocolType) {
      case GoogleMapsScriptProtocol.AUTO:
        protocol = '';
        break;
      case GoogleMapsScriptProtocol.HTTP:
        protocol = 'http:';
        break;
      case GoogleMapsScriptProtocol.HTTPS:
        protocol = 'https:';
        break;
    }
    const hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
    const queryParams = {
      v: this._config.apiVersion || 'quarterly',
      callback: callbackName,
      key: this._config.apiKey,
      client: this._config.clientId,
      channel: this._config.channel,
      libraries: this._config.libraries,
      region: this._config.region,
      language: this._config.language || (this.localeId !== 'en-US' ? this.localeId : null)
    };
    const params = Object.keys(queryParams).filter(k => queryParams[k] != null).filter(k => {
      // remove empty arrays
      return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
    }).map(k => {
      // join arrays as comma seperated strings
      const i = queryParams[k];
      if (Array.isArray(i)) {
        return {
          key: k,
          value: i.join(',')
        };
      }
      return {
        key: k,
        value: queryParams[k]
      };
    }).map(entry => {
      return `${entry.key}=${entry.value}`;
    }).join('&');
    return `${protocol}//${hostAndPath}?${params}`;
  }
}
LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
  return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};
LazyMapsAPILoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LazyMapsAPILoader,
  factory: LazyMapsAPILoader.ɵfac
});
LazyMapsAPILoader.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [LAZY_MAPS_API_CONFIG]
  }]
}, {
  type: WindowRef
}, {
  type: DocumentRef
}, {
  type: String,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
  }]
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LAZY_MAPS_API_CONFIG]
      }]
    }, {
      type: WindowRef
    }, {
      type: DocumentRef
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();
class MarkerManager {
  constructor(_mapsWrapper, _zone) {
    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markers = new Map();
  }
  convertAnimation(uiAnim) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (uiAnim === null) {
        return null;
      } else {
        return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
      }
    });
  }
  deleteMarker(markerDirective) {
    const markerPromise = this._markers.get(markerDirective);
    if (markerPromise == null) {
      // marker already deleted
      return Promise.resolve();
    }
    return markerPromise.then(marker => {
      return this._zone.run(() => {
        marker.setMap(null);
        this._markers.delete(markerDirective);
      });
    });
  }
  updateMarkerPosition(marker) {
    return this._markers.get(marker).then(m => m.setPosition({
      lat: marker.latitude,
      lng: marker.longitude
    }));
  }
  updateTitle(marker) {
    return this._markers.get(marker).then(m => m.setTitle(marker.title));
  }
  updateLabel(marker) {
    return this._markers.get(marker).then(m => {
      m.setLabel(marker.label);
    });
  }
  updateDraggable(marker) {
    return this._markers.get(marker).then(m => m.setDraggable(marker.draggable));
  }
  updateIcon(marker) {
    return this._markers.get(marker).then(m => m.setIcon(marker.iconUrl));
  }
  updateOpacity(marker) {
    return this._markers.get(marker).then(m => m.setOpacity(marker.opacity));
  }
  updateVisible(marker) {
    return this._markers.get(marker).then(m => m.setVisible(marker.visible));
  }
  updateZIndex(marker) {
    return this._markers.get(marker).then(m => m.setZIndex(marker.zIndex));
  }
  updateClickable(marker) {
    return this._markers.get(marker).then(m => m.setClickable(marker.clickable));
  }
  updateAnimation(marker) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const m = yield this._markers.get(marker);
      m.setAnimation(yield this.convertAnimation(marker.animation));
    });
  }
  addMarker(marker) {
    const markerPromise = new Promise(resolve => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return this._mapsWrapper.createMarker({
        position: {
          lat: marker.latitude,
          lng: marker.longitude
        },
        label: marker.label,
        draggable: marker.draggable,
        icon: marker.iconUrl,
        opacity: marker.opacity,
        visible: marker.visible,
        zIndex: marker.zIndex,
        title: marker.title,
        clickable: marker.clickable,
        animation: yield this.convertAnimation(marker.animation)
      }).then(resolve);
    }));
    this._markers.set(marker, markerPromise);
  }
  getNativeMarker(marker) {
    return this._markers.get(marker);
  }
  createEventObservable(eventName, marker) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._markers.get(marker).then(m => m.addListener(eventName, e => this._zone.run(() => observer.next(e))));
    });
  }
}
MarkerManager.ɵfac = function MarkerManager_Factory(t) {
  return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
MarkerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MarkerManager,
  factory: MarkerManager.ɵfac
});
MarkerManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class InfoWindowManager {
  constructor(_mapsWrapper, _zone, _markerManager) {
    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markerManager = _markerManager;
    this._infoWindows = new Map();
  }
  deleteInfoWindow(infoWindow) {
    const iWindow = this._infoWindows.get(infoWindow);
    if (iWindow == null) {
      // info window already deleted
      return Promise.resolve();
    }
    return iWindow.then(i => {
      return this._zone.run(() => {
        i.close();
        this._infoWindows.delete(infoWindow);
      });
    });
  }
  setPosition(infoWindow) {
    return this._infoWindows.get(infoWindow).then(i => i.setPosition({
      lat: infoWindow.latitude,
      lng: infoWindow.longitude
    }));
  }
  setZIndex(infoWindow) {
    return this._infoWindows.get(infoWindow).then(i => i.setZIndex(infoWindow.zIndex));
  }
  open(infoWindow) {
    return this._infoWindows.get(infoWindow).then(w => {
      if (infoWindow.hostMarker != null) {
        return this._markerManager.getNativeMarker(infoWindow.hostMarker).then(marker => {
          return this._mapsWrapper.getNativeMap().then(map => w.open(map, marker));
        });
      }
      return this._mapsWrapper.getNativeMap().then(map => w.open(map));
    });
  }
  close(infoWindow) {
    return this._infoWindows.get(infoWindow).then(w => w.close());
  }
  setOptions(infoWindow, options) {
    return this._infoWindows.get(infoWindow).then(i => i.setOptions(options));
  }
  addInfoWindow(infoWindow) {
    const options = {
      content: infoWindow.content,
      maxWidth: infoWindow.maxWidth,
      zIndex: infoWindow.zIndex,
      disableAutoPan: infoWindow.disableAutoPan
    };
    if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
      options.position = {
        lat: infoWindow.latitude,
        lng: infoWindow.longitude
      };
    }
    const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
    this._infoWindows.set(infoWindow, infoWindowPromise);
  }
  /**
   * Creates a Google Maps event listener for the given InfoWindow as an Observable
   */
  createEventObservable(eventName, infoWindow) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._infoWindows.get(infoWindow).then(i => {
        i.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    });
  }
}
InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
  return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MarkerManager));
};
InfoWindowManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InfoWindowManager,
  factory: InfoWindowManager.ɵfac
});
InfoWindowManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: MarkerManager
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoWindowManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: MarkerManager
    }];
  }, null);
})();

/**
 * Manages all KML Layers for a Google Map instance.
 */
class KmlLayerManager {
  constructor(_wrapper, _zone) {
    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new KML Layer to the map.
   */
  addKmlLayer(layer) {
    const newLayer = this._wrapper.getNativeMap().then(m => {
      return new google.maps.KmlLayer({
        clickable: layer.clickable,
        map: m,
        preserveViewport: layer.preserveViewport,
        screenOverlays: layer.screenOverlays,
        suppressInfoWindows: layer.suppressInfoWindows,
        url: layer.url,
        zIndex: layer.zIndex
      });
    });
    this._layers.set(layer, newLayer);
  }
  setOptions(layer, options) {
    this._layers.get(layer).then(l => l.setOptions(options));
  }
  deleteKmlLayer(layer) {
    this._layers.get(layer).then(l => {
      l.setMap(null);
      this._layers.delete(layer);
    });
  }
  /**
   * Creates a Google Maps event listener for the given KmlLayer as an Observable
   */
  createEventObservable(eventName, layer) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._layers.get(layer).then(m => {
        m.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    });
  }
}
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
  return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
KmlLayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: KmlLayerManager,
  factory: KmlLayerManager.ɵfac
});
KmlLayerManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KmlLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
class LayerManager {
  constructor(_wrapper) {
    this._wrapper = _wrapper;
    this._layers = new Map();
  }
  /**
   * Adds a transit layer to a map instance.
   * @param layer - a TransitLayer object
   * @param _options - TransitLayerOptions options
   * @returns void
   */
  addTransitLayer(layer) {
    const newLayer = this._wrapper.createTransitLayer();
    this._layers.set(layer, newLayer);
  }
  /**
   * Adds a bicycling layer to a map instance.
   * @param layer - a bicycling layer object
   * @param _options - BicyclingLayer options
   * @returns void
   */
  addBicyclingLayer(layer) {
    const newLayer = this._wrapper.createBicyclingLayer();
    this._layers.set(layer, newLayer);
  }
  /**
   * Deletes a map layer
   * @param layer - the layer to delete
   */
  deleteLayer(layer) {
    return this._layers.get(layer).then(currentLayer => {
      currentLayer.setMap(null);
      this._layers.delete(layer);
    });
  }
}
LayerManager.ɵfac = function LayerManager_Factory(t) {
  return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper));
};
LayerManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LayerManager,
  factory: LayerManager.ɵfac
});
LayerManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }];
  }, null);
})();

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
class NoOpMapsAPILoader {
  load() {
    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
    }
    return Promise.resolve();
  }
}
function createMVCEventObservable(array) {
  const eventNames = ['insert_at', 'remove_at', 'set_at'];
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.fromEventPattern)(handler => eventNames.map(eventName => array.addListener(eventName, (index, previous) => handler.apply(array, [{
    newArr: array.getArray(),
    eventName,
    index,
    previous
  }]))), (_handler, evListeners) => evListeners.forEach(evListener => evListener.remove()));
}
class MvcArrayMock {
  constructor() {
    this.vals = [];
    this.listeners = {
      remove_at: [],
      insert_at: [],
      set_at: []
    };
  }
  clear() {
    for (let i = this.vals.length - 1; i >= 0; i--) {
      this.removeAt(i);
    }
  }
  getArray() {
    return [...this.vals];
  }
  getAt(i) {
    return this.vals[i];
  }
  getLength() {
    return this.vals.length;
  }
  insertAt(i, elem) {
    this.vals.splice(i, 0, elem);
    this.listeners.insert_at.forEach(listener => listener(i));
  }
  pop() {
    const deleted = this.vals.pop();
    this.listeners.remove_at.forEach(listener => listener(this.vals.length, deleted));
    return deleted;
  }
  push(elem) {
    this.vals.push(elem);
    this.listeners.insert_at.forEach(listener => listener(this.vals.length - 1));
    return this.vals.length;
  }
  removeAt(i) {
    const deleted = this.vals.splice(i, 1)[0];
    this.listeners.remove_at.forEach(listener => listener(i, deleted));
    return deleted;
  }
  setAt(i, elem) {
    const deleted = this.vals[i];
    this.vals[i] = elem;
    this.listeners.set_at.forEach(listener => listener(i, deleted));
  }
  forEach(callback) {
    this.vals.forEach(callback);
  }
  addListener(eventName, handler) {
    const listenerArr = this.listeners[eventName];
    listenerArr.push(handler);
    return {
      remove: () => {
        listenerArr.splice(listenerArr.indexOf(handler), 1);
      }
    };
  }
  bindTo() {
    throw new Error('Not implemented');
  }
  changed() {
    throw new Error('Not implemented');
  }
  get() {
    throw new Error('Not implemented');
  }
  notify() {
    throw new Error('Not implemented');
  }
  set() {
    throw new Error('Not implemented');
  }
  setValues() {
    throw new Error('Not implemented');
  }
  unbind() {
    throw new Error('Not implemented');
  }
  unbindAll() {
    throw new Error('Not implemented');
  }
}
class PolygonManager {
  constructor(_mapsWrapper, _zone) {
    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polygons = new Map();
  }
  addPolygon(path) {
    const polygonPromise = this._mapsWrapper.createPolygon({
      clickable: path.clickable,
      draggable: path.draggable,
      editable: path.editable,
      fillColor: path.fillColor,
      fillOpacity: path.fillOpacity,
      geodesic: path.geodesic,
      paths: path.paths,
      strokeColor: path.strokeColor,
      strokeOpacity: path.strokeOpacity,
      strokeWeight: path.strokeWeight,
      visible: path.visible,
      zIndex: path.zIndex
    });
    this._polygons.set(path, polygonPromise);
  }
  updatePolygon(polygon) {
    const m = this._polygons.get(polygon);
    if (m == null) {
      return Promise.resolve();
    }
    return m.then(l => this._zone.run(() => {
      l.setPaths(polygon.paths);
    }));
  }
  setPolygonOptions(path, options) {
    return this._polygons.get(path).then(l => {
      l.setOptions(options);
    });
  }
  deletePolygon(paths) {
    const m = this._polygons.get(paths);
    if (m == null) {
      return Promise.resolve();
    }
    return m.then(l => {
      return this._zone.run(() => {
        l.setMap(null);
        this._polygons.delete(paths);
      });
    });
  }
  getPath(polygonDirective) {
    return this._polygons.get(polygonDirective).then(polygon => polygon.getPath().getArray());
  }
  getPaths(polygonDirective) {
    return this._polygons.get(polygonDirective).then(polygon => polygon.getPaths().getArray().map(p => p.getArray()));
  }
  createEventObservable(eventName, path) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._polygons.get(path).then(l => {
        l.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    });
  }
  createPathEventObservable(agmPolygon) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const polygon = yield this._polygons.get(agmPolygon);
      const paths = polygon.getPaths();
      const pathsChanges$ = createMVCEventObservable(paths);
      return pathsChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)({
        newArr: paths.getArray()
      }),
      // in order to subscribe to them all
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(parentMVEvent => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(...
      // rest parameter
      parentMVEvent.newArr.map((chMVC, index) => createMVCEventObservable(chMVC).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(chMVCEvent => ({
        parentMVEvent,
        chMVCEvent,
        pathIndex: index
      }))))).pipe(
      // start the merged ob with an event signinifing change to parent
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)({
        parentMVEvent,
        chMVCEvent: null,
        pathIndex: null
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.skip)(1),
      // skip the manually added event
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
        parentMVEvent,
        chMVCEvent,
        pathIndex
      }) => {
        let retVal;
        if (!chMVCEvent) {
          retVal = {
            newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
            eventName: parentMVEvent.eventName,
            index: parentMVEvent.index
          };
          if (parentMVEvent.previous) {
            retVal.previous = parentMVEvent.previous.getArray();
          }
        } else {
          retVal = {
            newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
            pathIndex,
            eventName: chMVCEvent.eventName,
            index: chMVCEvent.index
          };
          if (chMVCEvent.previous) {
            retVal.previous = chMVCEvent.previous;
          }
        }
        return retVal;
      }));
    });
  }
}
PolygonManager.ɵfac = function PolygonManager_Factory(t) {
  return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
PolygonManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PolygonManager,
  factory: PolygonManager.ɵfac
});
PolygonManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygonManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class PolylineManager {
  constructor(_mapsWrapper, _zone) {
    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polylines = new Map();
  }
  static _convertPoints(line) {
    const path = line._getPoints().map(point => {
      return {
        lat: point.latitude,
        lng: point.longitude
      };
    });
    return path;
  }
  static _convertPath(path) {
    const symbolPath = google.maps.SymbolPath[path];
    if (typeof symbolPath === 'number') {
      return symbolPath;
    } else {
      return path;
    }
  }
  static _convertIcons(line) {
    const icons = line._getIcons().map(agmIcon => ({
      fixedRotation: agmIcon.fixedRotation,
      offset: agmIcon.offset,
      repeat: agmIcon.repeat,
      icon: {
        anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
        fillColor: agmIcon.fillColor,
        fillOpacity: agmIcon.fillOpacity,
        path: PolylineManager._convertPath(agmIcon.path),
        rotation: agmIcon.rotation,
        scale: agmIcon.scale,
        strokeColor: agmIcon.strokeColor,
        strokeOpacity: agmIcon.strokeOpacity,
        strokeWeight: agmIcon.strokeWeight
      }
    }));
    // prune undefineds;
    icons.forEach(icon => {
      Object.entries(icon).forEach(([key, val]) => {
        if (typeof val === 'undefined') {
          delete icon[key];
        }
      });
      if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
        delete icon.icon.anchor;
      }
    });
    return icons;
  }
  addPolyline(line) {
    const polylinePromise = this._mapsWrapper.getNativeMap().then(() => [PolylineManager._convertPoints(line), PolylineManager._convertIcons(line)]).then(([path, icons]) => this._mapsWrapper.createPolyline({
      clickable: line.clickable,
      draggable: line.draggable,
      editable: line.editable,
      geodesic: line.geodesic,
      strokeColor: line.strokeColor,
      strokeOpacity: line.strokeOpacity,
      strokeWeight: line.strokeWeight,
      visible: line.visible,
      zIndex: line.zIndex,
      path,
      icons
    }));
    this._polylines.set(line, polylinePromise);
  }
  updatePolylinePoints(line) {
    const path = PolylineManager._convertPoints(line);
    const m = this._polylines.get(line);
    if (m == null) {
      return Promise.resolve();
    }
    return m.then(l => this._zone.run(() => l.setPath(path)));
  }
  updateIconSequences(line) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield this._mapsWrapper.getNativeMap();
      const icons = PolylineManager._convertIcons(line);
      const m = this._polylines.get(line);
      if (m == null) {
        return;
      }
      return m.then(l => this._zone.run(() => l.setOptions({
        icons
      })));
    });
  }
  setPolylineOptions(line, options) {
    return this._polylines.get(line).then(l => {
      l.setOptions(options);
    });
  }
  deletePolyline(line) {
    const m = this._polylines.get(line);
    if (m == null) {
      return Promise.resolve();
    }
    return m.then(l => {
      return this._zone.run(() => {
        l.setMap(null);
        this._polylines.delete(line);
      });
    });
  }
  getMVCPath(agmPolyline) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const polyline = yield this._polylines.get(agmPolyline);
      return polyline.getPath();
    });
  }
  getPath(agmPolyline) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return (yield this.getMVCPath(agmPolyline)).getArray();
    });
  }
  createEventObservable(eventName, line) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this._polylines.get(line).then(l => {
        l.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    });
  }
  createPathEventObservable(line) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const mvcPath = yield this.getMVCPath(line);
      return createMVCEventObservable(mvcPath);
    });
  }
}
PolylineManager.ɵfac = function PolylineManager_Factory(t) {
  return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
PolylineManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PolylineManager,
  factory: PolylineManager.ɵfac
});
PolylineManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolylineManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class RectangleManager {
  constructor(_apiWrapper, _zone) {
    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._rectangles = new Map();
  }
  addRectangle(rectangle) {
    this._apiWrapper.getNativeMap().then(() => this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
      bounds: {
        north: rectangle.north,
        east: rectangle.east,
        south: rectangle.south,
        west: rectangle.west
      },
      clickable: rectangle.clickable,
      draggable: rectangle.draggable,
      editable: rectangle.editable,
      fillColor: rectangle.fillColor,
      fillOpacity: rectangle.fillOpacity,
      strokeColor: rectangle.strokeColor,
      strokeOpacity: rectangle.strokeOpacity,
      strokePosition: google.maps.StrokePosition[rectangle.strokePosition],
      strokeWeight: rectangle.strokeWeight,
      visible: rectangle.visible,
      zIndex: rectangle.zIndex
    })));
  }
  /**
   * Removes the given rectangle from the map.
   */
  removeRectangle(rectangle) {
    return this._rectangles.get(rectangle).then(r => {
      r.setMap(null);
      this._rectangles.delete(rectangle);
    });
  }
  setOptions(rectangle, options) {
    return this._rectangles.get(rectangle).then(r => {
      const actualStrokePosition = options.strokePosition;
      options.strokePosition = google.maps.StrokePosition[actualStrokePosition];
      r.setOptions(options);
    });
  }
  getBounds(rectangle) {
    return this._rectangles.get(rectangle).then(r => r.getBounds());
  }
  setBounds(rectangle) {
    return this._rectangles.get(rectangle).then(r => {
      return r.setBounds({
        north: rectangle.north,
        east: rectangle.east,
        south: rectangle.south,
        west: rectangle.west
      });
    });
  }
  setEditable(rectangle) {
    return this._rectangles.get(rectangle).then(r => {
      return r.setEditable(rectangle.editable);
    });
  }
  setDraggable(rectangle) {
    return this._rectangles.get(rectangle).then(r => {
      return r.setDraggable(rectangle.draggable);
    });
  }
  setVisible(rectangle) {
    return this._rectangles.get(rectangle).then(r => {
      return r.setVisible(rectangle.visible);
    });
  }
  createEventObservable(eventName, rectangle) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subsrciber => {
      let listener = null;
      this._rectangles.get(rectangle).then(r => {
        listener = r.addListener(eventName, e => this._zone.run(() => subsrciber.next(e)));
      });
      return () => {
        if (listener !== null) {
          listener.remove();
        }
      };
    });
  }
}
RectangleManager.ɵfac = function RectangleManager_Factory(t) {
  return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
RectangleManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: RectangleManager,
  factory: RectangleManager.ɵfac
});
RectangleManager.ctorParameters = () => [{
  type: GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
let layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */
class AgmBicyclingLayer {
  constructor(_manager) {
    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId++).toString();
    /**
     * Hide/show bicycling layer
     */
    this.visible = true;
  }
  ngOnInit() {
    if (this._addedToManager) {
      return;
    }
    this._manager.addBicyclingLayer(this);
    this._addedToManager = true;
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return `AgmBicyclingLayer-${this._id.toString()}`;
  }
  /** @internal */
  ngOnDestroy() {
    this._manager.deleteLayer(this);
  }
}
AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
  return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayerManager));
};
AgmBicyclingLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmBicyclingLayer,
  selectors: [["agm-bicycling-layer"]],
  inputs: {
    visible: "visible"
  }
});
AgmBicyclingLayer.ctorParameters = () => [{
  type: LayerManager
}];
AgmBicyclingLayer.propDecorators = {
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-bicycling-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AgmCircle {
  constructor(_manager) {
    this._manager = _manager;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */
    this.clickable = true;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = false;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
     */
    this.editable = false;
    /**
     * The radius in meters on the Earth's surface.
     */
    this.radius = 0;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */
    this.strokeWeight = 0;
    /**
     * Whether this circle is visible on the map. Defaults to true.
     */
    this.visible = true;
    /**
     * This event is fired when the circle's center is changed.
     */
    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the circle.
     */
    // tslint:disable-next-line: no-output-native
    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the circle.
     */
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the circle.
     */
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */
    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */
    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on circle mouseout.
     */
    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on circle mouseover.
     */
    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */
    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the circle's radius is changed.
     */
    this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the circle is right-clicked on.
     */
    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._circleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */
  ngOnInit() {
    this._manager.addCircle(this);
    this._circleAddedToManager = true;
    this._registerEventListeners();
  }
  /** @internal */
  ngOnChanges(changes) {
    if (!this._circleAddedToManager) {
      return;
    }
    // tslint:disable: no-string-literal
    if (changes['latitude'] || changes['longitude']) {
      this._manager.setCenter(this);
    }
    if (changes['editable']) {
      this._manager.setEditable(this);
    }
    if (changes['draggable']) {
      this._manager.setDraggable(this);
    }
    if (changes['visible']) {
      this._manager.setVisible(this);
    }
    if (changes['radius']) {
      this._manager.setRadius(this);
    }
    // tslint:enable: no-string-literal
    this._updateCircleOptionsChanges(changes);
  }
  _updateCircleOptionsChanges(changes) {
    const options = {};
    const optionKeys = Object.keys(changes).filter(k => AgmCircle._mapOptions.indexOf(k) !== -1);
    optionKeys.forEach(k => {
      options[k] = changes[k].currentValue;
    });
    if (optionKeys.length > 0) {
      this._manager.setOptions(this, options);
    }
  }
  _registerEventListeners() {
    const events = new Map();
    events.set('center_changed', this.centerChange);
    events.set('click', this.circleClick);
    events.set('dblclick', this.circleDblClick);
    events.set('drag', this.drag);
    events.set('dragend', this.dragEnd);
    events.set('dragstart', this.dragStart);
    events.set('mousedown', this.mouseDown);
    events.set('mousemove', this.mouseMove);
    events.set('mouseout', this.mouseOut);
    events.set('mouseover', this.mouseOver);
    events.set('mouseup', this.mouseUp);
    events.set('radius_changed', this.radiusChange);
    events.set('rightclick', this.rightClick);
    events.forEach((eventEmitter, eventName) => {
      this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe(value => {
        switch (eventName) {
          case 'radius_changed':
            this._manager.getRadius(this).then(radius => eventEmitter.emit(radius));
            break;
          case 'center_changed':
            this._manager.getCenter(this).then(center => eventEmitter.emit({
              lat: center.lat(),
              lng: center.lng()
            }));
            break;
          default:
            eventEmitter.emit(value);
        }
      }));
    });
  }
  /** @internal */
  ngOnDestroy() {
    this._eventSubscriptions.forEach(s => s.unsubscribe());
    this._eventSubscriptions = null;
    this._manager.removeCircle(this);
  }
  /**
   * Gets the LatLngBounds of this Circle.
   */
  getBounds() {
    return this._manager.getBounds(this);
  }
  getCenter() {
    return this._manager.getCenter(this);
  }
}
AgmCircle.ɵfac = function AgmCircle_Factory(t) {
  return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleManager));
};
AgmCircle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmCircle,
  selectors: [["agm-circle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["circleDraggable", "draggable"],
    editable: "editable",
    radius: "radius",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    latitude: "latitude",
    longitude: "longitude",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    centerChange: "centerChange",
    circleClick: "circleClick",
    circleDblClick: "circleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    radiusChange: "radiusChange",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];
AgmCircle.ctorParameters = () => [{
  type: CircleManager
}];
AgmCircle.propDecorators = {
  latitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  longitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['circleDraggable']
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  radius: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  centerChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  circleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  circleDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  drag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  radiusChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  rightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-circle'
    }]
  }], function () {
    return [{
      type: CircleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['circleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    circleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    radiusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
class AgmDataLayer {
  constructor(_manager) {
    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$1++).toString();
    this._subscriptions = [];
    /**
     * This event is fired when a feature in the layer is clicked.
     */
    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The geoJson to be displayed
     */
    this.geoJson = null;
  }
  ngOnInit() {
    if (this._addedToManager) {
      return;
    }
    this._manager.addDataLayer(this);
    this._addedToManager = true;
    this._addEventListeners();
  }
  _addEventListeners() {
    const listeners = [{
      name: 'click',
      handler: ev => this.layerClick.emit(ev)
    }];
    listeners.forEach(obj => {
      const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
      this._subscriptions.push(os);
    });
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return `AgmDataLayer-${this._id.toString()}`;
  }
  /** @internal */
  ngOnDestroy() {
    this._manager.deleteDataLayer(this);
    // unsubscribe all registered observable subscriptions
    this._subscriptions.forEach(s => s.unsubscribe());
  }
  /** @internal */
  ngOnChanges(changes) {
    if (!this._addedToManager) {
      return;
    }
    // tslint:disable-next-line: no-string-literal
    const geoJsonChange = changes['geoJson'];
    if (geoJsonChange) {
      this._manager.updateGeoJson(this, geoJsonChange.currentValue);
    }
    const dataOptions = AgmDataLayer._dataOptionsAttributes.reduce((options, k) => options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k], {});
    this._manager.setDataOptions(this, dataOptions);
  }
}
AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
  return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataLayerManager));
};
AgmDataLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmDataLayer,
  selectors: [["agm-data-layer"]],
  inputs: {
    geoJson: "geoJson",
    style: "style"
  },
  outputs: {
    layerClick: "layerClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.ctorParameters = () => [{
  type: DataLayerManager
}];
AgmDataLayer.propDecorators = {
  layerClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  geoJson: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmDataLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-data-layer'
    }]
  }], function () {
    return [{
      type: DataLayerManager
    }];
  }, {
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    geoJson: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
class AgmFitBounds {
  constructor(_fitBoundsAccessor, _fitBoundsService) {
    this._fitBoundsAccessor = _fitBoundsAccessor;
    this._fitBoundsService = _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */
    this.agmFitBounds = true;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
    this._latestFitBoundsDetails = null;
  }
  /**
   * @internal
   */
  ngOnChanges() {
    this._updateBounds();
  }
  /**
   * @internal
   */
  ngOnInit() {
    this._fitBoundsAccessor.getFitBoundsDetails$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this._destroyed$)).subscribe(details => this._updateBounds(details));
  }
  /*
   Either the location changed, or visible status changed.
   Possible state changes are
   invisible -> visible
   visible -> invisible
   visible -> visible (new location)
  */
  _updateBounds(newFitBoundsDetails) {
    // either visibility will change, or location, so remove the old one anyway
    if (this._latestFitBoundsDetails) {
      this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
      // don't set latestFitBoundsDetails to null, because we can toggle visibility from
      // true -> false -> true, in which case we still need old value cached here
    }

    if (newFitBoundsDetails) {
      this._latestFitBoundsDetails = newFitBoundsDetails;
    }
    if (!this._latestFitBoundsDetails) {
      return;
    }
    if (this.agmFitBounds === true) {
      this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
    }
  }
  /**
   * @internal
   */
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
    if (this._latestFitBoundsDetails !== null) {
      this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
    }
  }
}
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
  return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FitBoundsService));
};
AgmFitBounds.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmFitBounds,
  selectors: [["", "agmFitBounds", ""]],
  inputs: {
    agmFitBounds: "agmFitBounds"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmFitBounds.ctorParameters = () => [{
  type: FitBoundsAccessor,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
  }]
}, {
  type: FitBoundsService
}];
AgmFitBounds.propDecorators = {
  agmFitBounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmFitBounds, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[agmFitBounds]'
    }]
  }], function () {
    return [{
      type: FitBoundsAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: FitBoundsService
    }];
  }, {
    agmFitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmInfoWindow {
  constructor(_infoWindowManager, _el) {
    this._infoWindowManager = _infoWindowManager;
    this._el = _el;
    /**
     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
     */
    this.isOpen = false;
    /**
     * Emits an event when the info window is closed.
     */
    this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._infoWindowAddedToManager = false;
    this._id = (infoWindowId++).toString();
  }
  ngOnInit() {
    this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
    this._infoWindowManager.addInfoWindow(this);
    this._infoWindowAddedToManager = true;
    this._updateOpenState();
    this._registerEventListeners();
  }
  /** @internal */
  ngOnChanges(changes) {
    if (!this._infoWindowAddedToManager) {
      return;
    }
    // tslint:disable: no-string-literal
    if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
      this._infoWindowManager.setPosition(this);
    }
    if (changes['zIndex']) {
      this._infoWindowManager.setZIndex(this);
    }
    if (changes['isOpen']) {
      this._updateOpenState();
    }
    this._setInfoWindowOptions(changes);
  }
  // tslint:enable: no-string-literal
  _registerEventListeners() {
    this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
      this.isOpen = false;
      this.infoWindowClose.emit();
    });
  }
  _updateOpenState() {
    this.isOpen ? this.open() : this.close();
  }
  _setInfoWindowOptions(changes) {
    const options = {};
    const optionKeys = Object.keys(changes).filter(k => AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1);
    optionKeys.forEach(k => {
      options[k] = changes[k].currentValue;
    });
    this._infoWindowManager.setOptions(this, options);
  }
  /**
   * Opens the info window.
   */
  open() {
    return this._infoWindowManager.open(this);
  }
  /**
   * Closes the info window.
   */
  close() {
    return this._infoWindowManager.close(this).then(() => {
      this.infoWindowClose.emit();
    });
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return 'AgmInfoWindow-' + this._id.toString();
  }
  /** @internal */
  ngOnDestroy() {
    this._infoWindowManager.deleteInfoWindow(this);
  }
}
AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
  return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
AgmInfoWindow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AgmInfoWindow,
  selectors: [["agm-info-window"]],
  inputs: {
    isOpen: "isOpen",
    latitude: "latitude",
    longitude: "longitude",
    disableAutoPan: "disableAutoPan",
    zIndex: "zIndex",
    maxWidth: "maxWidth"
  },
  outputs: {
    infoWindowClose: "infoWindowClose"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "agm-info-window-content"]],
  template: function AgmInfoWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.ctorParameters = () => [{
  type: InfoWindowManager
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
AgmInfoWindow.propDecorators = {
  latitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  longitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  disableAutoPan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  maxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  infoWindowClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'agm-info-window',
      template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `
    }]
  }], function () {
    return [{
      type: InfoWindowManager
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    infoWindowClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableAutoPan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let layerId$2 = 0;
class AgmKmlLayer {
  constructor(_manager) {
    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$2++).toString();
    this._subscriptions = [];
    /**
     * If true, the layer receives mouse events. Default value is true.
     */
    this.clickable = true;
    /**
     * By default, the input map is centered and zoomed to the bounding box of the contents of the
     * layer.
     * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
     * were never set.
     */
    this.preserveViewport = false;
    /**
     * Whether to render the screen overlays. Default true.
     */
    this.screenOverlays = true;
    /**
     * Suppress the rendering of info windows when layer features are clicked.
     */
    this.suppressInfoWindows = false;
    /**
     * The URL of the KML document to display.
     */
    this.url = null;
    /**
     * The z-index of the layer.
     */
    this.zIndex = null;
    /**
     * This event is fired when a feature in the layer is clicked.
     */
    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the KML layers default viewport has changed.
     */
    this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the KML layer has finished loading.
     * At this point it is safe to read the status property to determine if the layer loaded
     * successfully.
     */
    this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    if (this._addedToManager) {
      return;
    }
    this._manager.addKmlLayer(this);
    this._addedToManager = true;
    this._addEventListeners();
  }
  ngOnChanges(changes) {
    if (!this._addedToManager) {
      return;
    }
    this._updatePolygonOptions(changes);
  }
  _updatePolygonOptions(changes) {
    const options = Object.keys(changes).filter(k => AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1).reduce((obj, k) => {
      obj[k] = changes[k].currentValue;
      return obj;
    }, {});
    if (Object.keys(options).length > 0) {
      this._manager.setOptions(this, options);
    }
  }
  _addEventListeners() {
    const listeners = [{
      name: 'click',
      handler: ev => this.layerClick.emit(ev)
    }, {
      name: 'defaultviewport_changed',
      handler: () => this.defaultViewportChange.emit()
    }, {
      name: 'status_changed',
      handler: () => this.statusChange.emit()
    }];
    listeners.forEach(obj => {
      const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
      this._subscriptions.push(os);
    });
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return `AgmKmlLayer-${this._id.toString()}`;
  }
  /** @internal */
  ngOnDestroy() {
    this._manager.deleteKmlLayer(this);
    // unsubscribe all registered observable subscriptions
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
  return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KmlLayerManager));
};
AgmKmlLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmKmlLayer,
  selectors: [["agm-kml-layer"]],
  inputs: {
    clickable: "clickable",
    preserveViewport: "preserveViewport",
    screenOverlays: "screenOverlays",
    suppressInfoWindows: "suppressInfoWindows",
    url: "url",
    zIndex: "zIndex"
  },
  outputs: {
    layerClick: "layerClick",
    defaultViewportChange: "defaultViewportChange",
    statusChange: "statusChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.ctorParameters = () => [{
  type: KmlLayerManager
}];
AgmKmlLayer.propDecorators = {
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  preserveViewport: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  screenOverlays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  suppressInfoWindows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  url: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  layerClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  defaultViewportChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  statusChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-kml-layer'
    }]
  }], function () {
    return [{
      type: KmlLayerManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenOverlays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suppressInfoWindows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    defaultViewportChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    statusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class AgmMapControl {}
AgmMapControl.ɵfac = function AgmMapControl_Factory(t) {
  return new (t || AgmMapControl)();
};
AgmMapControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmMapControl,
  inputs: {
    position: "position"
  }
});
AgmMapControl.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmMapControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AgmFullscreenControl extends AgmMapControl {
  getOptions() {
    return {
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position]
      }
    };
  }
}
AgmFullscreenControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmFullscreenControl_BaseFactory;
  return function AgmFullscreenControl_Factory(t) {
    return (ɵAgmFullscreenControl_BaseFactory || (ɵAgmFullscreenControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmFullscreenControl)))(t || AgmFullscreenControl);
  };
}();
AgmFullscreenControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmFullscreenControl,
  selectors: [["agm-fullscreen-control"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmFullscreenControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmFullscreenControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-fullscreen-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmFullscreenControl
      }]
    }]
  }], null, null);
})();
class AgmMapTypeControl extends AgmMapControl {
  getOptions() {
    return {
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position],
        style: this.style && google.maps.MapTypeControlStyle[this.style],
        mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(mapTypeId => google.maps.MapTypeId[mapTypeId])
      }
    };
  }
}
AgmMapTypeControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmMapTypeControl_BaseFactory;
  return function AgmMapTypeControl_Factory(t) {
    return (ɵAgmMapTypeControl_BaseFactory || (ɵAgmMapTypeControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmMapTypeControl)))(t || AgmMapTypeControl);
  };
}();
AgmMapTypeControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmMapTypeControl,
  selectors: [["agm-map-type-control"]],
  inputs: {
    mapTypeIds: "mapTypeIds",
    style: "style"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmMapTypeControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
AgmMapTypeControl.propDecorators = {
  mapTypeIds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmMapTypeControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-map-type-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmMapTypeControl
      }]
    }]
  }], null, {
    mapTypeIds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AgmPanControl extends AgmMapControl {
  getOptions() {
    return {
      panControl: true,
      panControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position]
      }
    };
  }
}
AgmPanControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmPanControl_BaseFactory;
  return function AgmPanControl_Factory(t) {
    return (ɵAgmPanControl_BaseFactory || (ɵAgmPanControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmPanControl)))(t || AgmPanControl);
  };
}();
AgmPanControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmPanControl,
  selectors: [["agm-pan-control"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmPanControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmPanControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-pan-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmPanControl
      }]
    }]
  }], null, null);
})();
class AgmRotateControl extends AgmMapControl {
  getOptions() {
    return {
      rotateControl: true,
      rotateControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position]
      }
    };
  }
}
AgmRotateControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmRotateControl_BaseFactory;
  return function AgmRotateControl_Factory(t) {
    return (ɵAgmRotateControl_BaseFactory || (ɵAgmRotateControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmRotateControl)))(t || AgmRotateControl);
  };
}();
AgmRotateControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmRotateControl,
  selectors: [["agm-rotate-control"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmRotateControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmRotateControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-rotate-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmRotateControl
      }]
    }]
  }], null, null);
})();
class AgmScaleControl extends AgmMapControl {
  getOptions() {
    return {
      scaleControl: true
    };
  }
}
AgmScaleControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmScaleControl_BaseFactory;
  return function AgmScaleControl_Factory(t) {
    return (ɵAgmScaleControl_BaseFactory || (ɵAgmScaleControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmScaleControl)))(t || AgmScaleControl);
  };
}();
AgmScaleControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmScaleControl,
  selectors: [["agm-scale-control"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmScaleControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmScaleControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-scale-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmScaleControl
      }]
    }]
  }], null, null);
})();
class AgmStreetViewControl extends AgmMapControl {
  getOptions() {
    return {
      streetViewControl: true,
      streetViewControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position]
      }
    };
  }
}
AgmStreetViewControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmStreetViewControl_BaseFactory;
  return function AgmStreetViewControl_Factory(t) {
    return (ɵAgmStreetViewControl_BaseFactory || (ɵAgmStreetViewControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmStreetViewControl)))(t || AgmStreetViewControl);
  };
}();
AgmStreetViewControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmStreetViewControl,
  selectors: [["agm-street-view-control"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmStreetViewControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmStreetViewControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-street-view-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmStreetViewControl
      }]
    }]
  }], null, null);
})();
class AgmZoomControl extends AgmMapControl {
  getOptions() {
    return {
      zoomControl: true,
      zoomControlOptions: {
        position: this.position && google.maps.ControlPosition[this.position],
        style: this.style && google.maps.ZoomControlStyle[this.style]
      }
    };
  }
}
AgmZoomControl.ɵfac = /*@__PURE__*/function () {
  let ɵAgmZoomControl_BaseFactory;
  return function AgmZoomControl_Factory(t) {
    return (ɵAgmZoomControl_BaseFactory || (ɵAgmZoomControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AgmZoomControl)))(t || AgmZoomControl);
  };
}();
AgmZoomControl.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmZoomControl,
  selectors: [["agm-zoom-control"]],
  inputs: {
    style: "style"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: AgmMapControl,
    useExisting: AgmZoomControl
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
AgmZoomControl.propDecorators = {
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmZoomControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-map agm-zoom-control',
      providers: [{
        provide: AgmMapControl,
        useExisting: AgmZoomControl
      }]
    }]
  }], null, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMap {
  constructor(_elem, _mapsWrapper,
  // tslint:disable-next-line: ban-types
  _platformId, _fitBoundsService, _zone) {
    this._elem = _elem;
    this._mapsWrapper = _mapsWrapper;
    this._platformId = _platformId;
    this._fitBoundsService = _fitBoundsService;
    this._zone = _zone;
    /**
     * The longitude that defines the center of the map.
     */
    this.longitude = 0;
    /**
     * The latitude that defines the center of the map.
     */
    this.latitude = 0;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */
    this.zoom = 8;
    /**
     * Enables/disables if map is draggable.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = true;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */
    this.disableDoubleClickZoom = false;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */
    this.disableDefaultUI = false;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */
    this.scrollwheel = true;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */
    this.keyboardShortcuts = true;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */
    this.styles = [];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */
    this.usePanning = false;
    /**
     * Sets the viewport to contain the given bounds.
     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
     */
    this.fitBounds = false;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */
    this.mapTypeId = 'ROADMAP';
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */
    this.clickableIcons = true;
    /**
     * A map icon represents a point of interest, also known as a POI.
     * When map icons are clickable by default, an info window is displayed.
     * When this property is set to false, the info window will not be shown but the click event
     * will still fire
     */
    this.showDefaultInfoWindow = true;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */
    this.gestureHandling = 'auto';
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
     */
    this.tilt = 0;
    this._observableSubscriptions = [];
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */
    // tslint:disable-next-line: max-line-length
    this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter is fired when the map center changes.
     */
    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the viewport bounds have changed.
     */
    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the mapTypeId property changes.
     */
    this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */
    this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the zoom level has changed.
     */
    this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */
    this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the visible tiles have finished loading.
     */
    this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @internal */
  ngAfterContentInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_23__.isPlatformServer)(this._platformId)) {
      // The code is running on the server, do nothing
      return;
    }
    // todo: this should be solved with a new component and a viewChild decorator
    const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
    this._initMapInstance(container);
  }
  _initMapInstance(el) {
    this._mapsWrapper.createMap(el, {
      center: {
        lat: this.latitude || 0,
        lng: this.longitude || 0
      },
      zoom: this.zoom,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      controlSize: this.controlSize,
      disableDefaultUI: this.disableDefaultUI,
      disableDoubleClickZoom: this.disableDoubleClickZoom,
      scrollwheel: this.scrollwheel,
      backgroundColor: this.backgroundColor,
      draggable: this.draggable,
      draggableCursor: this.draggableCursor,
      draggingCursor: this.draggingCursor,
      keyboardShortcuts: this.keyboardShortcuts,
      styles: this.styles,
      mapTypeId: this.mapTypeId.toLocaleLowerCase(),
      clickableIcons: this.clickableIcons,
      gestureHandling: this.gestureHandling,
      tilt: this.tilt,
      restriction: this.restriction
    }).then(() => this._mapsWrapper.getNativeMap()).then(map => this.mapReady.emit(map));
    // register event listeners
    this._handleMapCenterChange();
    this._handleMapZoomChange();
    this._handleMapMouseEvents();
    this._handleBoundsChange();
    this._handleMapTypeIdChange();
    this._handleTilesLoadedEvent();
    this._handleIdleEvent();
    this._handleControlChange();
  }
  /** @internal */
  ngOnDestroy() {
    // unsubscribe all registered observable subscriptions
    this._observableSubscriptions.forEach(s => s.unsubscribe());
    // remove all listeners from the map instance
    this._mapsWrapper.clearInstanceListeners();
    if (this._fitBoundsSubscription) {
      this._fitBoundsSubscription.unsubscribe();
    }
  }
  /* @internal */
  ngOnChanges(changes) {
    this._updateMapOptionsChanges(changes);
    this._updatePosition(changes);
  }
  _updateMapOptionsChanges(changes) {
    const options = {};
    const optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
    optionKeys.forEach(k => {
      options[k] = changes[k].currentValue;
    });
    this._mapsWrapper.setMapOptions(options);
  }
  /**
   * Triggers a resize event on the google map instance.
   * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
   * Returns a promise that gets resolved after the event was triggered.
   */
  triggerResize(recenter = true) {
    // Note: When we would trigger the resize event and show the map in the same turn (which is a
    // common case for triggering a resize event), then the resize event would not
    // work (to show the map), so we trigger the event in a timeout.
    return new Promise(resolve => {
      setTimeout(() => {
        return this._mapsWrapper.triggerMapEvent('resize').then(() => {
          if (recenter) {
            this.fitBounds != null ? this._fitBounds() : this._setCenter();
          }
          resolve();
        });
      });
    });
  }
  _updatePosition(changes) {
    // tslint:disable: no-string-literal
    if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
      // no position update needed
      return;
    }
    // tslint:enable: no-string-literal
    // we prefer fitBounds in changes
    if ('fitBounds' in changes) {
      this._fitBounds();
      return;
    }
    if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
      return;
    }
    this._setCenter();
  }
  _setCenter() {
    const newCenter = {
      lat: this.latitude,
      lng: this.longitude
    };
    if (this.usePanning) {
      this._mapsWrapper.panTo(newCenter);
    } else {
      this._mapsWrapper.setCenter(newCenter);
    }
  }
  _fitBounds() {
    switch (this.fitBounds) {
      case true:
        this._subscribeToFitBoundsUpdates();
        break;
      case false:
        if (this._fitBoundsSubscription) {
          this._fitBoundsSubscription.unsubscribe();
        }
        break;
      default:
        if (this._fitBoundsSubscription) {
          this._fitBoundsSubscription.unsubscribe();
        }
        this._updateBounds(this.fitBounds, this.fitBoundsPadding);
    }
  }
  _subscribeToFitBoundsUpdates() {
    this._zone.runOutsideAngular(() => {
      this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
        this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
      });
    });
  }
  _updateBounds(bounds, padding) {
    if (!bounds) {
      return;
    }
    if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
      const newBounds = new google.maps.LatLngBounds();
      newBounds.union(bounds);
      bounds = newBounds;
    }
    if (this.usePanning) {
      this._mapsWrapper.panToBounds(bounds, padding);
      return;
    }
    this._mapsWrapper.fitBounds(bounds, padding);
  }
  _isLatLngBoundsLiteral(bounds) {
    return bounds != null && bounds.extend === undefined;
  }
  _handleMapCenterChange() {
    const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
      this._mapsWrapper.getCenter().then(center => {
        this.latitude = center.lat();
        this.longitude = center.lng();
        this.centerChange.emit({
          lat: this.latitude,
          lng: this.longitude
        });
      });
    });
    this._observableSubscriptions.push(s);
  }
  _handleBoundsChange() {
    const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
      this._mapsWrapper.getBounds().then(bounds => {
        this.boundsChange.emit(bounds);
      });
    });
    this._observableSubscriptions.push(s);
  }
  _handleMapTypeIdChange() {
    const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
      this._mapsWrapper.getMapTypeId().then(mapTypeId => {
        this.mapTypeIdChange.emit(mapTypeId);
      });
    });
    this._observableSubscriptions.push(s);
  }
  _handleMapZoomChange() {
    const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
      this._mapsWrapper.getZoom().then(z => {
        this.zoom = z;
        this.zoomChange.emit(z);
      });
    });
    this._observableSubscriptions.push(s);
  }
  _handleIdleEvent() {
    const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => {
      this.idle.emit(void 0);
    });
    this._observableSubscriptions.push(s);
  }
  _handleTilesLoadedEvent() {
    const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
    this._observableSubscriptions.push(s);
  }
  _handleMapMouseEvents() {
    const events = [{
      name: 'click',
      emitter: this.mapClick
    }, {
      name: 'rightclick',
      emitter: this.mapRightClick
    }, {
      name: 'dblclick',
      emitter: this.mapDblClick
    }];
    events.forEach(e => {
      const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([event]) => {
        // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
        if (event.placeId && !this.showDefaultInfoWindow) {
          event.stop();
        }
        e.emitter.emit(event);
      });
      this._observableSubscriptions.push(s);
    });
  }
  _handleControlChange() {
    this._setControls();
    this.mapControls.changes.subscribe(() => this._setControls());
  }
  _setControls() {
    const controlOptions = {
      fullscreenControl: !this.disableDefaultUI,
      mapTypeControl: false,
      panControl: false,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: !this.disableDefaultUI,
      zoomControl: !this.disableDefaultUI
    };
    this._mapsWrapper.getNativeMap().then(() => {
      this.mapControls.forEach(control => Object.assign(controlOptions, control.getOptions()));
      this._mapsWrapper.setMapOptions(controlOptions);
    });
  }
}
AgmMap.ɵfac = function AgmMap_Factory(t) {
  return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
AgmMap.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AgmMap,
  selectors: [["agm-map"]],
  contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AgmMapControl, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapControls = _t);
    }
  },
  inputs: {
    longitude: "longitude",
    latitude: "latitude",
    zoom: "zoom",
    draggable: ["mapDraggable", "draggable"],
    disableDoubleClickZoom: "disableDoubleClickZoom",
    disableDefaultUI: "disableDefaultUI",
    scrollwheel: "scrollwheel",
    keyboardShortcuts: "keyboardShortcuts",
    styles: "styles",
    usePanning: "usePanning",
    fitBounds: "fitBounds",
    mapTypeId: "mapTypeId",
    clickableIcons: "clickableIcons",
    showDefaultInfoWindow: "showDefaultInfoWindow",
    gestureHandling: "gestureHandling",
    tilt: "tilt",
    minZoom: "minZoom",
    maxZoom: "maxZoom",
    controlSize: "controlSize",
    backgroundColor: "backgroundColor",
    draggableCursor: "draggableCursor",
    draggingCursor: "draggingCursor",
    fitBoundsPadding: "fitBoundsPadding",
    restriction: "restriction"
  },
  outputs: {
    mapClick: "mapClick",
    mapRightClick: "mapRightClick",
    mapDblClick: "mapDblClick",
    centerChange: "centerChange",
    boundsChange: "boundsChange",
    mapTypeIdChange: "mapTypeIdChange",
    idle: "idle",
    zoomChange: "zoomChange",
    mapReady: "mapReady",
    tilesLoaded: "tilesLoaded"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
  template: function AgmMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
});
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];
AgmMap.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: GoogleMapsAPIWrapper
}, {
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
  }]
}, {
  type: FitBoundsService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
AgmMap.propDecorators = {
  longitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  latitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  minZoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  maxZoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  controlSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['mapDraggable']
  }],
  disableDoubleClickZoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  disableDefaultUI: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  scrollwheel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggableCursor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggingCursor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  keyboardShortcuts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  styles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  usePanning: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fitBounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fitBoundsPadding: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  mapTypeId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickableIcons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  showDefaultInfoWindow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  gestureHandling: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  tilt: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  restriction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  mapClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mapRightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mapDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  centerChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  boundsChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mapTypeIdChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  idle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  zoomChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mapReady: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  tilesLoaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mapControls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [AgmMapControl]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'agm-map',
      providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
      template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
      styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: GoogleMapsAPIWrapper
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: FitBoundsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mapDraggable']
    }],
    disableDoubleClickZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableDefaultUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollwheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboardShortcuts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    usePanning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickableIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showDefaultInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gestureHandling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tilt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mapRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mapDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mapTypeIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    zoomChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mapReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tilesLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    controlSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggableCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggingCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fitBoundsPadding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restriction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mapControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [AgmMapControl]
    }]
  });
})();
let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMarker {
  constructor(_markerManager) {
    this._markerManager = _markerManager;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = false;
    /**
     * If true, the marker is visible
     */
    this.visible = true;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */
    this.openInfoWindow = true;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */
    this.opacity = 1;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */
    this.zIndex = 1;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    // tslint:disable-next-line:no-input-rename
    this.clickable = true;
    /**
     * This event is fired when the marker's animation property changes.
     */
    this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */
    this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks twice on the marker.
     */
    this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user rightclicks on the marker.
     */
    this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the marker.
     */
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the marker.
     */
    // tslint:disable-next-line: no-output-native
    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the marker.
     */
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user mouses over the marker.
     */
    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user mouses outside the marker.
     */
    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** @internal */
    this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._markerAddedToManger = false;
    this._observableSubscriptions = [];
    this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
    this._id = (markerId++).toString();
  }
  /* @internal */
  ngAfterContentInit() {
    this.handleInfoWindowUpdate();
    this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
  }
  handleInfoWindowUpdate() {
    if (this.infoWindow.length > 1) {
      throw new Error('Expected no more than one info window.');
    }
    this.infoWindow.forEach(marker => {
      marker.hostMarker = this;
    });
  }
  /** @internal */
  ngOnChanges(changes) {
    if (typeof this.latitude === 'string') {
      this.latitude = Number(this.latitude);
    }
    if (typeof this.longitude === 'string') {
      this.longitude = Number(this.longitude);
    }
    if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
      return;
    }
    if (!this._markerAddedToManger) {
      this._markerManager.addMarker(this);
      this._updateFitBoundsDetails();
      this._markerAddedToManger = true;
      this._addEventListeners();
      return;
    }
    // tslint:disable: no-string-literal
    if (changes['latitude'] || changes['longitude']) {
      this._markerManager.updateMarkerPosition(this);
      this._updateFitBoundsDetails();
    }
    if (changes['title']) {
      this._markerManager.updateTitle(this);
    }
    if (changes['label']) {
      this._markerManager.updateLabel(this);
    }
    if (changes['draggable']) {
      this._markerManager.updateDraggable(this);
    }
    if (changes['iconUrl']) {
      this._markerManager.updateIcon(this);
    }
    if (changes['opacity']) {
      this._markerManager.updateOpacity(this);
    }
    if (changes['visible']) {
      this._markerManager.updateVisible(this);
    }
    if (changes['zIndex']) {
      this._markerManager.updateZIndex(this);
    }
    if (changes['clickable']) {
      this._markerManager.updateClickable(this);
    }
    if (changes['animation']) {
      this._markerManager.updateAnimation(this);
    }
    // tslint:enable: no-string-literal
  }
  /** @internal */
  getFitBoundsDetails$() {
    return this._fitBoundsDetails$.asObservable();
  }
  _updateFitBoundsDetails() {
    this._fitBoundsDetails$.next({
      latLng: {
        lat: this.latitude,
        lng: this.longitude
      }
    });
  }
  _addEventListeners() {
    const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
      if (this.openInfoWindow) {
        this.infoWindow.forEach(infoWindow => infoWindow.open());
      }
      this.markerClick.emit(this);
    });
    this._observableSubscriptions.push(cs);
    const dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
      this.markerDblClick.emit(null);
    });
    this._observableSubscriptions.push(dcs);
    const rc = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
      this.markerRightClick.emit(null);
    });
    this._observableSubscriptions.push(rc);
    const ds = this._markerManager.createEventObservable('dragstart', this).subscribe(e => this.dragStart.emit(e));
    this._observableSubscriptions.push(ds);
    const d = this._markerManager.createEventObservable('drag', this).subscribe(e => this.drag.emit(e));
    this._observableSubscriptions.push(d);
    const de = this._markerManager.createEventObservable('dragend', this).subscribe(e => this.dragEnd.emit(e));
    this._observableSubscriptions.push(de);
    const mover = this._markerManager.createEventObservable('mouseover', this).subscribe(e => this.mouseOver.emit(e));
    this._observableSubscriptions.push(mover);
    const mout = this._markerManager.createEventObservable('mouseout', this).subscribe(e => this.mouseOut.emit(e));
    this._observableSubscriptions.push(mout);
    const anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(() => {
      this.animationChange.emit(this.animation);
    });
    this._observableSubscriptions.push(anChng);
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return 'AgmMarker-' + this._id.toString();
  }
  /** @internal */
  ngOnDestroy() {
    this._markerManager.deleteMarker(this);
    // unsubscribe all registered observable subscriptions
    this._observableSubscriptions.forEach(s => s.unsubscribe());
  }
}
AgmMarker.ɵfac = function AgmMarker_Factory(t) {
  return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MarkerManager));
};
AgmMarker.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmMarker,
  selectors: [["agm-marker"]],
  contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
    }
  },
  inputs: {
    draggable: ["markerDraggable", "draggable"],
    visible: "visible",
    openInfoWindow: "openInfoWindow",
    opacity: "opacity",
    zIndex: "zIndex",
    clickable: ["markerClickable", "clickable"],
    latitude: "latitude",
    longitude: "longitude",
    title: "title",
    label: "label",
    iconUrl: "iconUrl",
    animation: "animation"
  },
  outputs: {
    animationChange: "animationChange",
    markerClick: "markerClick",
    markerDblClick: "markerDblClick",
    markerRightClick: "markerRightClick",
    dragStart: "dragStart",
    drag: "drag",
    dragEnd: "dragEnd",
    mouseOver: "mouseOver",
    mouseOut: "mouseOut"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AgmMarker)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmMarker.ctorParameters = () => [{
  type: MarkerManager
}];
AgmMarker.propDecorators = {
  latitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  longitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['markerDraggable']
  }],
  iconUrl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  openInfoWindow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  opacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['markerClickable']
  }],
  animation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  animationChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  markerClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  markerDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  markerRightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  drag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  infoWindow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [AgmInfoWindow]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-marker',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AgmMarker)
      }]
    }]
  }], function () {
    return [{
      type: MarkerManager
    }];
  }, {
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['markerDraggable']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['markerClickable']
    }],
    animationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    markerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    markerDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    markerRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    infoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [AgmInfoWindow]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: LatLngLiteral[] = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: LatLngLiteral[][] = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
class AgmPolygon {
  constructor(_polygonManager) {
    this._polygonManager = _polygonManager;
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */
    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic
     * property defines the mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */
    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */
    this.geodesic = false;
    /**
     * The ordered sequence of coordinates that designates a closed loop.
     * Unlike polylines, a polygon may consist of one or more paths.
     *  As a result, the paths property may specify one or more arrays of
     * LatLng coordinates. Paths are closed automatically; do not repeat the
     * first vertex of the path as the last vertex. Simple polygons may be
     * defined using a single array of LatLngs. More complex polygons may
     * specify an array of arrays. Any simple arrays are converted into Arrays.
     * Inserting or removing LatLngs from the Array will automatically update
     * the polygon on the map.
     */
    this.paths = [];
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     */
    this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     */
    this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the polygon.
     */
    this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the polygon.
     */
    this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the polygon.
     */
    this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     */
    this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     */
    this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on Polygon mouseout.
     */
    this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on Polygon mouseover.
     */
    this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     */
    this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the Polygon is right-clicked on.
     */
    this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired after Polygon first path changes.
     */
    this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._polygonAddedToManager = false;
    this._subscriptions = [];
  }
  /** @internal */
  ngAfterContentInit() {
    if (!this._polygonAddedToManager) {
      this._init();
    }
  }
  ngOnChanges(changes) {
    if (!this._polygonAddedToManager) {
      this._init();
      return;
    }
    this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
  }
  _init() {
    this._polygonManager.addPolygon(this);
    this._polygonAddedToManager = true;
    this._addEventListeners();
  }
  _addEventListeners() {
    const handlers = [{
      name: 'click',
      handler: ev => this.polyClick.emit(ev)
    }, {
      name: 'dblclick',
      handler: ev => this.polyDblClick.emit(ev)
    }, {
      name: 'drag',
      handler: ev => this.polyDrag.emit(ev)
    }, {
      name: 'dragend',
      handler: ev => this.polyDragEnd.emit(ev)
    }, {
      name: 'dragstart',
      handler: ev => this.polyDragStart.emit(ev)
    }, {
      name: 'mousedown',
      handler: ev => this.polyMouseDown.emit(ev)
    }, {
      name: 'mousemove',
      handler: ev => this.polyMouseMove.emit(ev)
    }, {
      name: 'mouseout',
      handler: ev => this.polyMouseOut.emit(ev)
    }, {
      name: 'mouseover',
      handler: ev => this.polyMouseOver.emit(ev)
    }, {
      name: 'mouseup',
      handler: ev => this.polyMouseUp.emit(ev)
    }, {
      name: 'rightclick',
      handler: ev => this.polyRightClick.emit(ev)
    }];
    handlers.forEach(obj => {
      const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
      this._subscriptions.push(os);
    });
    this._polygonManager.createPathEventObservable(this).then(paths$ => {
      const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
      this._subscriptions.push(os);
    });
  }
  _updatePolygonOptions(changes) {
    return Object.keys(changes).filter(k => AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1).reduce((obj, k) => {
      obj[k] = changes[k].currentValue;
      return obj;
    }, {});
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  ngOnDestroy() {
    this._polygonManager.deletePolygon(this);
    // unsubscribe all registered observable subscriptions
    this._subscriptions.forEach(s => s.unsubscribe());
  }
  getPath() {
    return this._polygonManager.getPath(this);
  }
  getPaths() {
    return this._polygonManager.getPaths(this);
  }
}
AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
  return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PolygonManager));
};
AgmPolygon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmPolygon,
  selectors: [["agm-polygon"]],
  inputs: {
    clickable: "clickable",
    draggable: ["polyDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    paths: "paths",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex"
  },
  outputs: {
    polyClick: "polyClick",
    polyDblClick: "polyDblClick",
    polyDrag: "polyDrag",
    polyDragEnd: "polyDragEnd",
    polyDragStart: "polyDragStart",
    polyMouseDown: "polyMouseDown",
    polyMouseMove: "polyMouseMove",
    polyMouseOut: "polyMouseOut",
    polyMouseOver: "polyMouseOver",
    polyMouseUp: "polyMouseUp",
    polyRightClick: "polyRightClick",
    polyPathsChange: "polyPathsChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];
AgmPolygon.ctorParameters = () => [{
  type: PolygonManager
}];
AgmPolygon.propDecorators = {
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['polyDraggable']
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  geodesic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  paths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  polyClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyDragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyDragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyMouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyMouseMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyMouseOut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyMouseOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyMouseUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyRightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyPathsChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-polygon'
    }]
  }], function () {
    return [{
      type: PolygonManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['polyDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    polyClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyPathsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 */
class AgmPolylineIcon {
  ngOnInit() {
    if (this.path == null) {
      throw new Error('Icon Sequence path is required');
    }
  }
}
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
  return new (t || AgmPolylineIcon)();
};
AgmPolylineIcon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmPolylineIcon,
  selectors: [["agm-icon-sequence"]],
  inputs: {
    fixedRotation: "fixedRotation",
    offset: "offset",
    repeat: "repeat",
    anchorX: "anchorX",
    anchorY: "anchorY",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    path: "path",
    rotation: "rotation",
    scale: "scale",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight"
  }
});
AgmPolylineIcon.propDecorators = {
  fixedRotation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  offset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  repeat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  anchorX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  anchorY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  path: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  rotation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  scale: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmPolylineIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-polyline agm-icon-sequence'
    }]
  }], null, {
    fixedRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    repeat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    anchorX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    anchorY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
class AgmPolylinePoint {
  constructor() {
    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges(changes) {
    // tslint:disable: no-string-literal
    if (changes['latitude'] || changes['longitude']) {
      this.positionChanged.emit({
        lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
        lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
      });
    }
    // tslint:enable: no-string-literal
  }
  /** @internal */
  getFitBoundsDetails$() {
    return this.positionChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)({
      lat: this.latitude,
      lng: this.longitude
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(position => ({
      latLng: position
    })));
  }
}
AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
  return new (t || AgmPolylinePoint)();
};
AgmPolylinePoint.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmPolylinePoint,
  selectors: [["agm-polyline-point"]],
  inputs: {
    latitude: "latitude",
    longitude: "longitude"
  },
  outputs: {
    positionChanged: "positionChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AgmPolylinePoint)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmPolylinePoint.ctorParameters = () => [];
AgmPolylinePoint.propDecorators = {
  latitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  longitude: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  positionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmPolylinePoint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-polyline-point',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AgmPolylinePoint)
      }]
    }]
  }], function () {
    return [];
  }, {
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmPolyline {
  constructor(_polylineManager) {
    this._polylineManager = _polylineManager;
    /**
     * Indicates whether this Polyline handles mouse events. Defaults to true.
     */
    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic property defines the
     * mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control points shown at the
     * vertices and on each segment. Defaults to false.
     */
    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
     * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
     * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */
    this.geodesic = false;
    /**
     * Whether this polyline is visible on the map. Defaults to true.
     */
    this.visible = true;
    /**
     * This event is fired when the DOM click event is fired on the Polyline.
     */
    this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polyline.
     */
    this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the polyline.
     */
    this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the polyline.
     */
    this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the polyline.
     */
    this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polyline.
     */
    this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polyline.
     */
    this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on Polyline mouseout.
     */
    this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on Polyline mouseover.
     */
    this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polyline
     */
    this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the Polyline is right-clicked on.
     */
    this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired after Polyline's path changes.
     */
    this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._polylineAddedToManager = false;
    this._subscriptions = [];
    this._id = (polylineId++).toString();
  }
  /** @internal */
  ngAfterContentInit() {
    if (this.points.length) {
      this.points.forEach(point => {
        const s = point.positionChanged.subscribe(() => {
          this._polylineManager.updatePolylinePoints(this);
        });
        this._subscriptions.push(s);
      });
    }
    if (!this._polylineAddedToManager) {
      this._init();
    }
    const pointSub = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
    this._subscriptions.push(pointSub);
    this._polylineManager.updatePolylinePoints(this);
    const iconSub = this.iconSequences.changes.subscribe(() => this._polylineManager.updateIconSequences(this));
    this._subscriptions.push(iconSub);
  }
  ngOnChanges(changes) {
    if (!this._polylineAddedToManager) {
      this._init();
      return;
    }
    const options = {};
    const optionKeys = Object.keys(changes).filter(k => AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1);
    optionKeys.forEach(k => options[k] = changes[k].currentValue);
    this._polylineManager.setPolylineOptions(this, options);
  }
  getPath() {
    return this._polylineManager.getPath(this);
  }
  _init() {
    this._polylineManager.addPolyline(this);
    this._polylineAddedToManager = true;
    this._addEventListeners();
  }
  _addEventListeners() {
    const handlers = [{
      name: 'click',
      handler: ev => this.lineClick.emit(ev)
    }, {
      name: 'dblclick',
      handler: ev => this.lineDblClick.emit(ev)
    }, {
      name: 'drag',
      handler: ev => this.lineDrag.emit(ev)
    }, {
      name: 'dragend',
      handler: ev => this.lineDragEnd.emit(ev)
    }, {
      name: 'dragstart',
      handler: ev => this.lineDragStart.emit(ev)
    }, {
      name: 'mousedown',
      handler: ev => this.lineMouseDown.emit(ev)
    }, {
      name: 'mousemove',
      handler: ev => this.lineMouseMove.emit(ev)
    }, {
      name: 'mouseout',
      handler: ev => this.lineMouseOut.emit(ev)
    }, {
      name: 'mouseover',
      handler: ev => this.lineMouseOver.emit(ev)
    }, {
      name: 'mouseup',
      handler: ev => this.lineMouseUp.emit(ev)
    }, {
      name: 'rightclick',
      handler: ev => this.lineRightClick.emit(ev)
    }];
    handlers.forEach(obj => {
      const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
      this._subscriptions.push(os);
    });
    this._polylineManager.createPathEventObservable(this).then(ob$ => {
      const os = ob$.subscribe(pathEvent => this.polyPathChange.emit(pathEvent));
      this._subscriptions.push(os);
    });
  }
  /** @internal */
  _getPoints() {
    if (this.points) {
      return this.points.toArray();
    }
    return [];
  }
  _getIcons() {
    if (this.iconSequences) {
      return this.iconSequences.toArray();
    }
    return [];
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  ngOnDestroy() {
    this._polylineManager.deletePolyline(this);
    // unsubscribe all registered observable subscriptions
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
  return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PolylineManager));
};
AgmPolyline.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmPolyline,
  selectors: [["agm-polyline"]],
  contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.points = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
    }
  },
  inputs: {
    clickable: "clickable",
    draggable: ["polylineDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    visible: "visible",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    zIndex: "zIndex"
  },
  outputs: {
    lineClick: "lineClick",
    lineDblClick: "lineDblClick",
    lineDrag: "lineDrag",
    lineDragEnd: "lineDragEnd",
    lineDragStart: "lineDragStart",
    lineMouseDown: "lineMouseDown",
    lineMouseMove: "lineMouseMove",
    lineMouseOut: "lineMouseOut",
    lineMouseOver: "lineMouseOver",
    lineMouseUp: "lineMouseUp",
    lineRightClick: "lineRightClick",
    polyPathChange: "polyPathChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];
AgmPolyline.ctorParameters = () => [{
  type: PolylineManager
}];
AgmPolyline.propDecorators = {
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['polylineDraggable']
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  geodesic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  lineClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineDragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineDragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineMouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineMouseMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineMouseOut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineMouseOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineMouseUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lineRightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  polyPathChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  points: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [AgmPolylinePoint]
  }],
  iconSequences: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [AgmPolylineIcon]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-polyline'
    }]
  }], function () {
    return [{
      type: PolylineManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['polylineDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lineRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    polyPathChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    points: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [AgmPolylinePoint]
    }],
    iconSequences: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [AgmPolylineIcon]
    }]
  });
})();
class AgmRectangle {
  constructor(_manager) {
    this._manager = _manager;
    /**
     * Indicates whether this Rectangle handles mouse events. Defaults to true.
     */
    this.clickable = true;
    /**
     * If set to true, the user can drag this rectangle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename
    this.draggable = false;
    /**
     * If set to true, the user can edit this rectangle by dragging the control points shown at
     * the center and around the circumference of the rectangle. Defaults to false.
     */
    this.editable = false;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */
    this.strokeWeight = 0;
    /**
     * Whether this rectangle is visible on the map. Defaults to true.
     */
    this.visible = true;
    /**
     * This event is fired when the rectangle's is changed.
     */
    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the rectangle.
     */
    // tslint:disable-next-line: no-output-native
    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user stops dragging the rectangle.
     */
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the user starts dragging the rectangle.
     */
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the rectangle.
     */
    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the rectangle.
     */
    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on rectangle mouseout.
     */
    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired on rectangle mouseover.
     */
    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the DOM mouseup event is fired on the rectangle.
     */
    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is fired when the rectangle is right-clicked on.
     */
    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._rectangleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */
  ngOnInit() {
    this._manager.addRectangle(this);
    this._rectangleAddedToManager = true;
    this._registerEventListeners();
  }
  /** @internal */
  ngOnChanges(changes) {
    if (!this._rectangleAddedToManager) {
      return;
    }
    // tslint:disable: no-string-literal
    if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
      this._manager.setBounds(this);
    }
    if (changes['editable']) {
      this._manager.setEditable(this);
    }
    if (changes['draggable']) {
      this._manager.setDraggable(this);
    }
    if (changes['visible']) {
      this._manager.setVisible(this);
    }
    // tslint:enable: no-string-literal
    this._updateRectangleOptionsChanges(changes);
  }
  _updateRectangleOptionsChanges(changes) {
    const options = {};
    const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
    optionKeys.forEach(k => {
      options[k] = changes[k].currentValue;
    });
    if (optionKeys.length > 0) {
      this._manager.setOptions(this, options);
    }
  }
  _registerEventListeners() {
    const events = new Map();
    events.set('bounds_changed', this.boundsChange);
    events.set('click', this.rectangleClick);
    events.set('dblclick', this.rectangleDblClick);
    events.set('drag', this.drag);
    events.set('dragend', this.dragEnd);
    events.set('dragStart', this.dragStart);
    events.set('mousedown', this.mouseDown);
    events.set('mousemove', this.mouseMove);
    events.set('mouseout', this.mouseOut);
    events.set('mouseover', this.mouseOver);
    events.set('mouseup', this.mouseUp);
    events.set('rightclick', this.rightClick);
    events.forEach((eventEmitter, eventName) => {
      this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe(value => {
        switch (eventName) {
          case 'bounds_changed':
            this._manager.getBounds(this).then(bounds => eventEmitter.emit({
              north: bounds.getNorthEast().lat(),
              east: bounds.getNorthEast().lng(),
              south: bounds.getSouthWest().lat(),
              west: bounds.getSouthWest().lng()
            }));
            break;
          default:
            eventEmitter.emit(value);
        }
      }));
    });
  }
  /** @internal */
  ngOnDestroy() {
    this._eventSubscriptions.forEach(s => s.unsubscribe());
    this._eventSubscriptions = null;
    this._manager.removeRectangle(this);
  }
  /**
   * Gets the LatLngBounds of this Rectangle.
   */
  getBounds() {
    return this._manager.getBounds(this);
  }
}
AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
  return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RectangleManager));
};
AgmRectangle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmRectangle,
  selectors: [["agm-rectangle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["rectangleDraggable", "draggable"],
    editable: "editable",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    north: "north",
    east: "east",
    south: "south",
    west: "west",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    boundsChange: "boundsChange",
    rectangleClick: "rectangleClick",
    rectangleDblClick: "rectangleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];
AgmRectangle.ctorParameters = () => [{
  type: RectangleManager
}];
AgmRectangle.propDecorators = {
  north: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  east: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  south: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  west: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['rectangleDraggable']
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fillOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeOpacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  strokeWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  boundsChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  rectangleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  rectangleDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  drag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  mouseUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  rightClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-rectangle'
    }]
  }], function () {
    return [{
      type: RectangleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['rectangleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rectangleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    north: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    east: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    south: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    west: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
class AgmTransitLayer {
  constructor(_manager) {
    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$3++).toString();
    /**
     * Hide/show transit layer
     */
    this.visible = true;
  }
  ngOnInit() {
    if (this._addedToManager) {
      return;
    }
    this._manager.addTransitLayer(this);
    this._addedToManager = true;
  }
  /** @internal */
  id() {
    return this._id;
  }
  /** @internal */
  toString() {
    return `AgmTransitLayer-${this._id.toString()}`;
  }
  /** @internal */
  ngOnDestroy() {
    this._manager.deleteLayer(this);
  }
}
AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
  return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayerManager));
};
AgmTransitLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AgmTransitLayer,
  selectors: [["agm-transit-layer"]],
  inputs: {
    visible: "visible"
  }
});
AgmTransitLayer.ctorParameters = () => [{
  type: LayerManager
}];
AgmTransitLayer.propDecorators = {
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'agm-transit-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @internal
 */
function coreDirectives() {
  return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
class AgmCoreModule {
  /**
   * Please use this method when you register the module at the root level.
   */
  static forRoot(lazyMapsAPILoaderConfig) {
    return {
      ngModule: AgmCoreModule,
      providers: [...BROWSER_GLOBALS_PROVIDERS, {
        provide: MapsAPILoader,
        useClass: LazyMapsAPILoader
      }, {
        provide: LAZY_MAPS_API_CONFIG,
        useValue: lazyMapsAPILoaderConfig
      }]
    };
  }
}
AgmCoreModule.ɵfac = function AgmCoreModule_Factory(t) {
  return new (t || AgmCoreModule)();
};
AgmCoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AgmCoreModule
});
AgmCoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgmCoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: coreDirectives(),
      exports: coreDirectives()
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgmCoreModule, {
    declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl],
    exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl]
  });
})();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6111:
/*!****************************************************************************************!*\
  !*** ./node_modules/@agm/markerclusterer/__ivy_ngcc__/fesm2015/agm-markerclusterer.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgmMarkerCluster": () => (/* binding */ AgmMarkerCluster),
/* harmony export */   "AgmMarkerClustererModule": () => (/* binding */ AgmMarkerClustererModule),
/* harmony export */   "ClusterManager": () => (/* binding */ ClusterManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _google_markerclustererplus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/markerclustererplus */ 2549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);







class ClusterManager extends _agm_core__WEBPACK_IMPORTED_MODULE_1__.MarkerManager {
  constructor(_mapsWrapper, _zone) {
    super(_mapsWrapper, _zone);
    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._clustererInstance = new Promise(resolver => {
      this._resolver = resolver;
    });
  }
  init(options) {
    this._mapsWrapper.getNativeMap().then(map => {
      const clusterer = new _google_markerclustererplus__WEBPACK_IMPORTED_MODULE_0__["default"](map, [], options);
      this._resolver(clusterer);
    });
  }
  getClustererInstance() {
    return this._clustererInstance;
  }
  addMarker(markerDirective) {
    const clusterPromise = this.getClustererInstance();
    const markerPromise = this._mapsWrapper.createMarker({
      position: {
        lat: markerDirective.latitude,
        lng: markerDirective.longitude
      },
      label: markerDirective.label,
      draggable: markerDirective.draggable,
      icon: markerDirective.iconUrl,
      opacity: markerDirective.opacity,
      visible: markerDirective.visible,
      zIndex: markerDirective.zIndex,
      title: markerDirective.title,
      clickable: markerDirective.clickable
    }, false);
    Promise.all([clusterPromise, markerPromise]).then(([cluster, marker]) => cluster.addMarker(marker));
    this._markers.set(markerDirective, markerPromise);
  }
  deleteMarker(marker) {
    const markerPromise = this._markers.get(marker);
    if (markerPromise == null) {
      // marker already deleted
      return Promise.resolve();
    }
    return markerPromise.then(m => {
      this._zone.run(() => {
        m.setMap(null);
        this.getClustererInstance().then(cluster => {
          cluster.removeMarker(m);
          this._markers.delete(marker);
        });
      });
    });
  }
  clearMarkers() {
    return this.getClustererInstance().then(cluster => {
      cluster.clearMarkers();
    });
  }
  setGridSize(c) {
    this.getClustererInstance().then(cluster => {
      cluster.setGridSize(c.gridSize);
    });
  }
  setMaxZoom(c) {
    this.getClustererInstance().then(cluster => {
      cluster.setMaxZoom(c.maxZoom);
    });
  }
  setStyles(c) {
    this.getClustererInstance().then(cluster => {
      cluster.setStyles(c.styles);
    });
  }
  setZoomOnClick(c) {
    this.getClustererInstance().then(cluster => {
      if (c.zoomOnClick !== undefined) {
        cluster.setZoomOnClick(c.zoomOnClick);
      }
    });
  }
  setAverageCenter(c) {
    this.getClustererInstance().then(cluster => {
      if (c.averageCenter !== undefined) {
        cluster.setAverageCenter(c.averageCenter);
      }
    });
  }
  setImagePath(c) {
    this.getClustererInstance().then(cluster => {
      if (c.imagePath !== undefined) {
        cluster.setImagePath(c.imagePath);
      }
    });
  }
  setMinimumClusterSize(c) {
    this.getClustererInstance().then(cluster => {
      if (c.minimumClusterSize !== undefined) {
        cluster.setMinimumClusterSize(c.minimumClusterSize);
      }
    });
  }
  setImageExtension(c) {
    this.getClustererInstance().then(cluster => {
      if (c.imageExtension !== undefined) {
        cluster.setImageExtension(c.imageExtension);
      }
    });
  }
  createClusterEventObservable(eventName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._zone.runOutsideAngular(() => {
        this._clustererInstance.then(m => {
          m.addListener(eventName, e => this._zone.run(() => subscriber.next(e)));
        });
      });
    });
  }
  setCalculator(c) {
    this.getClustererInstance().then(cluster => {
      if (typeof c.calculator === 'function') {
        cluster.setCalculator(c.calculator);
      }
    });
  }
  setClusterClass(c) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof c.clusterClass !== 'undefined') {
        const instance = yield this.getClustererInstance();
        instance.setClusterClass(c.clusterClass);
      }
    });
  }
  setEnableRetinaIcons(c) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof c.enableRetinaIcons !== 'undefined') {
        const instance = yield this.getClustererInstance();
        instance.setEnableRetinaIcons(c.enableRetinaIcons);
      }
    });
  }
  setIgnoreHidden(c) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof c.ignoreHidden !== 'undefined') {
        const instance = yield this.getClustererInstance();
        instance.setIgnoreHidden(c.ignoreHidden);
      }
    });
  }
  setImageSizes(c) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof c.imageSizes !== 'undefined') {
        const instance = yield this.getClustererInstance();
        instance.setImageSizes(c.imageSizes);
      }
    });
  }
  setTitle(c) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof c.title !== 'undefined') {
        const instance = yield this.getClustererInstance();
        instance.setTitle(c.title);
      }
    });
  }
}
ClusterManager.ɵfac = function ClusterManager_Factory(t) {
  return new (t || ClusterManager)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_agm_core__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
};
ClusterManager.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ClusterManager,
  factory: ClusterManager.ɵfac
});
ClusterManager.ctorParameters = () => [{
  type: _agm_core__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsAPIWrapper
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ClusterManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _agm_core__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
    }];
  }, null);
})();

// tslint:disable: jsdoc-format
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
```typescript
import { Component } from '@angular/core';

@Component({
 selector: 'my-map-cmp',
 styles: [`
   agm-map {
     height: 300px;
   }
 `],
 template: `
   <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     <agm-marker-cluster>
       <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
       </agm-marker>
       <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
       </agm-marker>
     </agm-marker-cluster>
   </agm-map>
 `
})
```
 */
// tslint:enable: jsdoc-format
class AgmMarkerCluster {
  constructor(_clusterManager) {
    this._clusterManager = _clusterManager;
    this.clusterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._observableSubscriptions = [];
  }
  /** @internal */
  ngOnDestroy() {
    this._clusterManager.clearMarkers();
    this._observableSubscriptions.forEach(s => s.unsubscribe());
  }
  /** @internal */
  ngOnChanges(changes) {
    // tslint:disable: no-string-literal
    if (changes['gridSize']) {
      this._clusterManager.setGridSize(this);
    }
    if (changes['maxZoom']) {
      this._clusterManager.setMaxZoom(this);
    }
    if (changes['zoomOnClick']) {
      this._clusterManager.setZoomOnClick(this);
    }
    if (changes['averageCenter']) {
      this._clusterManager.setAverageCenter(this);
    }
    if (changes['minimumClusterSize']) {
      this._clusterManager.setMinimumClusterSize(this);
    }
    if (changes['imagePath']) {
      this._clusterManager.setImagePath(this);
    }
    if (changes['imageExtension']) {
      this._clusterManager.setImageExtension(this);
    }
    if (changes['calculator']) {
      this._clusterManager.setCalculator(this);
    }
    if (changes['styles']) {
      this._clusterManager.setStyles(this);
    }
    if (changes['clusterClass']) {
      this._clusterManager.setClusterClass(this);
    }
    if (changes['enableRetinaIcons']) {
      this._clusterManager.setEnableRetinaIcons(this);
    }
    if (changes['ignoreHidden']) {
      this._clusterManager.setIgnoreHidden(this);
    }
    if (changes['imageSizes']) {
      this._clusterManager.setImageSizes(this);
    }
    if (changes['title']) {
      this._clusterManager.setTitle(this);
    }
    // tslint:enable: no-string-literal
  }

  _addEventListeners() {
    const handlers = [{
      name: 'clusterclick',
      handler: () => this.clusterClick.emit()
    }];
    handlers.forEach(obj => {
      const os = this._clusterManager.createClusterEventObservable(obj.name).subscribe(obj.handler);
      this._observableSubscriptions.push(os);
    });
  }
  /** @internal */
  ngOnInit() {
    this._addEventListeners();
    this._clusterManager.init({
      averageCenter: this.averageCenter,
      calculator: this.calculator,
      clusterClass: this.clusterClass,
      enableRetinaIcons: this.enableRetinaIcons,
      gridSize: this.gridSize,
      ignoreHidden: this.ignoreHidden,
      imageExtension: this.imageExtension,
      imagePath: this.imagePath,
      imageSizes: this.imageSizes,
      maxZoom: this.maxZoom,
      minimumClusterSize: this.minimumClusterSize,
      styles: this.styles,
      title: this.title,
      zoomOnClick: this.zoomOnClick
    });
  }
}
AgmMarkerCluster.ɵfac = function AgmMarkerCluster_Factory(t) {
  return new (t || AgmMarkerCluster)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ClusterManager));
};
AgmMarkerCluster.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: AgmMarkerCluster,
  selectors: [["agm-marker-cluster"]],
  inputs: {
    gridSize: "gridSize",
    maxZoom: "maxZoom",
    zoomOnClick: "zoomOnClick",
    averageCenter: "averageCenter",
    minimumClusterSize: "minimumClusterSize",
    styles: "styles",
    calculator: "calculator",
    imagePath: "imagePath",
    imageExtension: "imageExtension",
    clusterClass: "clusterClass",
    enableRetinaIcons: "enableRetinaIcons",
    ignoreHidden: "ignoreHidden",
    imageSizes: "imageSizes",
    title: "title"
  },
  outputs: {
    clusterClick: "clusterClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([ClusterManager, {
    provide: _agm_core__WEBPACK_IMPORTED_MODULE_1__.MarkerManager,
    useExisting: ClusterManager
  }, _agm_core__WEBPACK_IMPORTED_MODULE_1__.InfoWindowManager]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});
AgmMarkerCluster.ctorParameters = () => [{
  type: ClusterManager
}];
AgmMarkerCluster.propDecorators = {
  gridSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  maxZoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  zoomOnClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  averageCenter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  minimumClusterSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  styles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  calculator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  imagePath: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  imageExtension: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  clusterClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  enableRetinaIcons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  ignoreHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  imageSizes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  clusterClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AgmMarkerCluster, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'agm-marker-cluster',
      providers: [ClusterManager, {
        provide: _agm_core__WEBPACK_IMPORTED_MODULE_1__.MarkerManager,
        useExisting: ClusterManager
      }, _agm_core__WEBPACK_IMPORTED_MODULE_1__.InfoWindowManager]
    }]
  }], function () {
    return [{
      type: ClusterManager
    }];
  }, {
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
class AgmMarkerClustererModule {}
AgmMarkerClustererModule.ɵfac = function AgmMarkerClustererModule_Factory(t) {
  return new (t || AgmMarkerClustererModule)();
};
AgmMarkerClustererModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AgmMarkerClustererModule
});
AgmMarkerClustererModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmCoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AgmMarkerClustererModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmCoreModule],
      declarations: [AgmMarkerCluster],
      exports: [AgmMarkerCluster]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AgmMarkerClustererModule, {
    declarations: function () {
      return [AgmMarkerCluster];
    },
    imports: function () {
      return [_agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmCoreModule];
    },
    exports: function () {
      return [AgmMarkerCluster];
    }
  });
})();

/*
 * Public API Surface of markerclusterer
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2549:
/*!**********************************************************************************!*\
  !*** ./node_modules/@google/markerclustererplus/dist/markerclustererplus.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
  // eslint-disable-next-line prefer-const
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
/**
 * @ignore
 */
class OverlayViewSafe {
  constructor() {
    // MarkerClusterer implements google.maps.OverlayView interface. We use the
    // extend function to extend MarkerClusterer with google.maps.OverlayView
    // because it might not always be available when the code is defined so we
    // look for it at the last possible moment. If it doesn't exist now then
    // there is no point going ahead :)
    extend(OverlayViewSafe, google.maps.OverlayView);
  }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @hidden
 */
function toCssText(styles) {
  return Object.keys(styles).reduce((acc, key) => {
    if (styles[key]) {
      acc.push(key + ":" + styles[key]);
    }
    return acc;
  }, []).join(";");
}
/**
 *
 * @hidden
 */
function coercePixels(pixels) {
  return pixels ? pixels + "px" : undefined;
}
/**
 * A cluster icon.
 */
class ClusterIcon extends OverlayViewSafe {
  /**
   * @param cluster_ The cluster with which the icon is to be associated.
   * @param styles_ An array of {@link ClusterIconStyle} defining the cluster icons
   *  to use for various cluster sizes.
   */
  constructor(cluster_, styles_) {
    super();
    this.cluster_ = cluster_;
    this.styles_ = styles_;
    this.center_ = null;
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;
    this.style = null;
    this.setMap(cluster_.getMap()); // Note: this causes onAdd to be called
  }
  /**
   * Adds the icon to the DOM.
   */
  onAdd() {
    let cMouseDownInCluster;
    let cDraggingMapByCluster;
    const mc = this.cluster_.getMarkerClusterer();
    const [major, minor] = google.maps.version.split(".");
    const gmVersion = parseInt(major, 10) * 100 + parseInt(minor, 10);
    this.div_ = document.createElement("div");
    if (this.visible_) {
      this.show();
    }
    this.getPanes().overlayMouseTarget.appendChild(this.div_);
    // Fix for Issue 157
    this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
      cDraggingMapByCluster = cMouseDownInCluster;
    });
    google.maps.event.addDomListener(this.div_, "mousedown", () => {
      cMouseDownInCluster = true;
      cDraggingMapByCluster = false;
    });
    // March 1, 2018: Fix for this 3.32 exp bug, https://issuetracker.google.com/issues/73571522
    // But it doesn't work with earlier releases so do a version check.
    if (gmVersion >= 332) {
      // Ugly version-dependent code
      google.maps.event.addDomListener(this.div_, "touchstart", e => {
        e.stopPropagation();
      });
    }
    google.maps.event.addDomListener(this.div_, "click", e => {
      cMouseDownInCluster = false;
      if (!cDraggingMapByCluster) {
        /**
         * This event is fired when a cluster marker is clicked.
         * @name MarkerClusterer#click
         * @param {Cluster} c The cluster that was clicked.
         * @event
         */
        google.maps.event.trigger(mc, "click", this.cluster_);
        google.maps.event.trigger(mc, "clusterclick", this.cluster_); // deprecated name
        // The default click handler follows. Disable it by setting
        // the zoomOnClick property to false.
        if (mc.getZoomOnClick()) {
          // Zoom into the cluster.
          const mz = mc.getMaxZoom();
          const theBounds = this.cluster_.getBounds();
          mc.getMap().fitBounds(theBounds);
          // There is a fix for Issue 170 here:
          setTimeout(function () {
            mc.getMap().fitBounds(theBounds);
            // Don't zoom beyond the max zoom level
            if (mz !== null && mc.getMap().getZoom() > mz) {
              mc.getMap().setZoom(mz + 1);
            }
          }, 100);
        }
        // Prevent event propagation to the map:
        e.cancelBubble = true;
        if (e.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    google.maps.event.addDomListener(this.div_, "mouseover", () => {
      /**
       * This event is fired when the mouse moves over a cluster marker.
       * @name MarkerClusterer#mouseover
       * @param {Cluster} c The cluster that the mouse moved over.
       * @event
       */
      google.maps.event.trigger(mc, "mouseover", this.cluster_);
    });
    google.maps.event.addDomListener(this.div_, "mouseout", () => {
      /**
       * This event is fired when the mouse moves out of a cluster marker.
       * @name MarkerClusterer#mouseout
       * @param {Cluster} c The cluster that the mouse moved out of.
       * @event
       */
      google.maps.event.trigger(mc, "mouseout", this.cluster_);
    });
  }
  /**
   * Removes the icon from the DOM.
   */
  onRemove() {
    if (this.div_ && this.div_.parentNode) {
      this.hide();
      google.maps.event.removeListener(this.boundsChangedListener_);
      google.maps.event.clearInstanceListeners(this.div_);
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    }
  }
  /**
   * Draws the icon.
   */
  draw() {
    if (this.visible_) {
      const pos = this.getPosFromLatLng_(this.center_);
      this.div_.style.top = pos.y + "px";
      this.div_.style.left = pos.x + "px";
    }
  }
  /**
   * Hides the icon.
   */
  hide() {
    if (this.div_) {
      this.div_.style.display = "none";
    }
    this.visible_ = false;
  }
  /**
   * Positions and shows the icon.
   */
  show() {
    if (this.div_) {
      this.div_.className = this.className_;
      this.div_.style.cssText = this.createCss_(this.getPosFromLatLng_(this.center_));
      this.div_.innerHTML = (this.style.url ? this.getImageElementHtml() : "") + this.getLabelDivHtml();
      if (typeof this.sums_.title === "undefined" || this.sums_.title === "") {
        this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
      } else {
        this.div_.title = this.sums_.title;
      }
      this.div_.style.display = "";
    }
    this.visible_ = true;
  }
  getLabelDivHtml() {
    const mc = this.cluster_.getMarkerClusterer();
    const ariaLabel = mc.ariaLabelFn(this.sums_.text);
    const divStyle = {
      position: "absolute",
      top: coercePixels(this.anchorText_[0]),
      left: coercePixels(this.anchorText_[1]),
      color: this.style.textColor,
      "font-size": coercePixels(this.style.textSize),
      "font-family": this.style.fontFamily,
      "font-weight": this.style.fontWeight,
      "font-style": this.style.fontStyle,
      "text-decoration": this.style.textDecoration,
      "text-align": "center",
      width: coercePixels(this.style.width),
      "line-height": coercePixels(this.style.textLineHeight)
    };
    return `
<div aria-label="${ariaLabel}" style="${toCssText(divStyle)}" tabindex="0">
  <span aria-hidden="true">${this.sums_.text}</span>
</div>
`;
  }
  getImageElementHtml() {
    // NOTE: values must be specified in px units
    const bp = (this.style.backgroundPosition || "0 0").split(" ");
    const spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
    const spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
    let dimensions = {};
    if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons()) {
      dimensions = {
        width: coercePixels(this.style.width),
        height: coercePixels(this.style.height)
      };
    } else {
      const [Y1, X1, Y2, X2] = [-1 * spriteV, -1 * spriteH + this.style.width, -1 * spriteV + this.style.height, -1 * spriteH];
      dimensions = {
        clip: `rect(${Y1}px, ${X1}px, ${Y2}px, ${X2}px)`
      };
    }
    const cssText = toCssText(Object.assign({
      position: "absolute",
      top: coercePixels(spriteV),
      left: coercePixels(spriteH)
    }, dimensions));
    return `<img alt="${this.sums_.text}" aria-hidden="true" src="${this.style.url}" style="${cssText}"/>`;
  }
  /**
   * Sets the icon styles to the appropriate element in the styles array.
   *
   * @ignore
   * @param sums The icon label text and styles index.
   */
  useStyle(sums) {
    this.sums_ = sums;
    let index = Math.max(0, sums.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    this.style = this.styles_[index];
    this.anchorText_ = this.style.anchorText || [0, 0];
    this.anchorIcon_ = this.style.anchorIcon || [Math.floor(this.style.height / 2), Math.floor(this.style.width / 2)];
    this.className_ = this.cluster_.getMarkerClusterer().getClusterClass() + " " + (this.style.className || "cluster-" + index);
  }
  /**
   * Sets the position at which to center the icon.
   *
   * @param center The latlng to set as the center.
   */
  setCenter(center) {
    this.center_ = center;
  }
  /**
   * Creates the `cssText` style parameter based on the position of the icon.
   *
   * @param pos The position of the icon.
   * @return The CSS style text.
   */
  createCss_(pos) {
    return toCssText({
      "z-index": `${this.cluster_.getMarkerClusterer().getZIndex()}`,
      top: coercePixels(pos.y),
      left: coercePixels(pos.x),
      width: coercePixels(this.style.width),
      height: coercePixels(this.style.height),
      cursor: "pointer",
      position: "absolute",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-o-user-select": "none",
      "user-select": "none"
    });
  }
  /**
   * Returns the position at which to place the DIV depending on the latlng.
   *
   * @param latlng The position in latlng.
   * @return The position in pixels.
   */
  getPosFromLatLng_(latlng) {
    const pos = this.getProjection().fromLatLngToDivPixel(latlng);
    pos.x = Math.floor(pos.x - this.anchorIcon_[1]);
    pos.y = Math.floor(pos.y - this.anchorIcon_[0]);
    return pos;
  }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a single cluster that manages a group of proximate markers.
 *  Used internally, do not call this constructor directly.
 */
class Cluster {
  /**
   *
   * @param markerClusterer_ The `MarkerClusterer` object with which this
   *  cluster is associated.
   */
  constructor(markerClusterer_) {
    this.markerClusterer_ = markerClusterer_;
    this.map_ = this.markerClusterer_.getMap();
    this.minClusterSize_ = this.markerClusterer_.getMinimumClusterSize();
    this.averageCenter_ = this.markerClusterer_.getAverageCenter();
    this.markers_ = []; // TODO: type;
    this.center_ = null;
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, this.markerClusterer_.getStyles());
  }
  /**
   * Returns the number of markers managed by the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
   *
   * @return The number of markers in the cluster.
   */
  getSize() {
    return this.markers_.length;
  }
  /**
   * Returns the array of markers managed by the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
   *
   * @return The array of markers in the cluster.
   */
  getMarkers() {
    return this.markers_;
  }
  /**
   * Returns the center of the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler
   * for the `MarkerClusterer` object.
   *
   * @return The center of the cluster.
   */
  getCenter() {
    return this.center_;
  }
  /**
   * Returns the map with which the cluster is associated.
   *
   * @return The map.
   * @ignore
   */
  getMap() {
    return this.map_;
  }
  /**
   * Returns the `MarkerClusterer` object with which the cluster is associated.
   *
   * @return The associated marker clusterer.
   * @ignore
   */
  getMarkerClusterer() {
    return this.markerClusterer_;
  }
  /**
   * Returns the bounds of the cluster.
   *
   * @return the cluster bounds.
   * @ignore
   */
  getBounds() {
    const bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    const markers = this.getMarkers();
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    return bounds;
  }
  /**
   * Removes the cluster from the map.
   *
   * @ignore
   */
  remove() {
    this.clusterIcon_.setMap(null);
    this.markers_ = [];
    delete this.markers_;
  }
  /**
   * Adds a marker to the cluster.
   *
   * @param marker The marker to be added.
   * @return True if the marker was added.
   * @ignore
   */
  addMarker(marker) {
    if (this.isMarkerAlreadyAdded_(marker)) {
      return false;
    }
    if (!this.center_) {
      this.center_ = marker.getPosition();
      this.calculateBounds_();
    } else {
      if (this.averageCenter_) {
        const l = this.markers_.length + 1;
        const lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
        const lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
        this.center_ = new google.maps.LatLng(lat, lng);
        this.calculateBounds_();
      }
    }
    marker.isAdded = true;
    this.markers_.push(marker);
    const mCount = this.markers_.length;
    const mz = this.markerClusterer_.getMaxZoom();
    if (mz !== null && this.map_.getZoom() > mz) {
      // Zoomed in past max zoom, so show the marker.
      if (marker.getMap() !== this.map_) {
        marker.setMap(this.map_);
      }
    } else if (mCount < this.minClusterSize_) {
      // Min cluster size not reached so show the marker.
      if (marker.getMap() !== this.map_) {
        marker.setMap(this.map_);
      }
    } else if (mCount === this.minClusterSize_) {
      // Hide the markers that were showing.
      for (let i = 0; i < mCount; i++) {
        this.markers_[i].setMap(null);
      }
    } else {
      marker.setMap(null);
    }
    return true;
  }
  /**
   * Determines if a marker lies within the cluster's bounds.
   *
   * @param marker The marker to check.
   * @return True if the marker lies in the bounds.
   * @ignore
   */
  isMarkerInClusterBounds(marker) {
    return this.bounds_.contains(marker.getPosition());
  }
  /**
   * Calculates the extended bounds of the cluster with the grid.
   */
  calculateBounds_() {
    const bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
  }
  /**
   * Updates the cluster icon.
   */
  updateIcon() {
    const mCount = this.markers_.length;
    const mz = this.markerClusterer_.getMaxZoom();
    if (mz !== null && this.map_.getZoom() > mz) {
      this.clusterIcon_.hide();
      return;
    }
    if (mCount < this.minClusterSize_) {
      // Min cluster size not yet reached.
      this.clusterIcon_.hide();
      return;
    }
    const numStyles = this.markerClusterer_.getStyles().length;
    const sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.useStyle(sums);
    this.clusterIcon_.show();
  }
  /**
   * Determines if a marker has already been added to the cluster.
   *
   * @param marker The marker to check.
   * @return True if the marker has already been added.
   */
  isMarkerAlreadyAdded_(marker) {
    if (this.markers_.indexOf) {
      return this.markers_.indexOf(marker) !== -1;
    } else {
      for (let i = 0; i < this.markers_.length; i++) {
        if (marker === this.markers_[i]) {
          return true;
        }
      }
    }
    return false;
  }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @ignore
 */
const getOption = (options, prop, def) => {
  if (options[prop] !== undefined) {
    return options[prop];
  } else {
    return def;
  }
};
class MarkerClusterer extends OverlayViewSafe {
  /**
   * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
   * @param map The Google map to attach to.
   * @param markers The markers to be added to the cluster.
   * @param options The optional parameters.
   */
  constructor(map, markers = [], options = {}) {
    super();
    this.options = options;
    this.markers_ = [];
    this.clusters_ = [];
    this.listeners_ = [];
    this.activeMap_ = null;
    this.ready_ = false;
    this.ariaLabelFn = this.options.ariaLabelFn || (() => "");
    this.zIndex_ = this.options.zIndex || google.maps.Marker.MAX_ZINDEX + 1;
    this.gridSize_ = this.options.gridSize || 60;
    this.minClusterSize_ = this.options.minimumClusterSize || 2;
    this.maxZoom_ = this.options.maxZoom || null;
    this.styles_ = this.options.styles || [];
    this.title_ = this.options.title || "";
    this.zoomOnClick_ = getOption(this.options, "zoomOnClick", true);
    this.averageCenter_ = getOption(this.options, "averageCenter", false);
    this.ignoreHidden_ = getOption(this.options, "ignoreHidden", false);
    this.enableRetinaIcons_ = getOption(this.options, "enableRetinaIcons", false);
    this.imagePath_ = this.options.imagePath || MarkerClusterer.IMAGE_PATH;
    this.imageExtension_ = this.options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
    this.imageSizes_ = this.options.imageSizes || MarkerClusterer.IMAGE_SIZES;
    this.calculator_ = this.options.calculator || MarkerClusterer.CALCULATOR;
    this.batchSize_ = this.options.batchSize || MarkerClusterer.BATCH_SIZE;
    this.batchSizeIE_ = this.options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
    this.clusterClass_ = this.options.clusterClass || "cluster";
    if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
      // Try to avoid IE timeout when processing a huge number of markers:
      this.batchSize_ = this.batchSizeIE_;
    }
    this.setupStyles_();
    this.addMarkers(markers, true);
    this.setMap(map); // Note: this causes onAdd to be called
  }
  /**
   * Implementation of the onAdd interface method.
   * @ignore
   */
  onAdd() {
    this.activeMap_ = this.getMap();
    this.ready_ = true;
    this.repaint();
    this.prevZoom_ = this.getMap().getZoom();
    // Add the map event listeners
    this.listeners_ = [google.maps.event.addListener(this.getMap(), "zoom_changed", () => {
      const map = this.getMap(); // eslint-disable-line @typescript-eslint/no-explicit-any
      // Fix for bug #407
      // Determines map type and prevents illegal zoom levels
      const minZoom = map.minZoom || 0;
      const maxZoom = Math.min(map.maxZoom || 100, map.mapTypes[map.getMapTypeId()].maxZoom);
      const zoom = Math.min(Math.max(this.getMap().getZoom(), minZoom), maxZoom);
      if (this.prevZoom_ != zoom) {
        this.prevZoom_ = zoom;
        this.resetViewport_(false);
      }
    }), google.maps.event.addListener(this.getMap(), "idle", () => {
      this.redraw_();
    })];
  }
  /**
   * Implementation of the onRemove interface method.
   * Removes map event listeners and all cluster icons from the DOM.
   * All managed markers are also put back on the map.
   * @ignore
   */
  onRemove() {
    // Put all the managed markers back on the map:
    for (let i = 0; i < this.markers_.length; i++) {
      if (this.markers_[i].getMap() !== this.activeMap_) {
        this.markers_[i].setMap(this.activeMap_);
      }
    }
    // Remove all clusters:
    for (let i = 0; i < this.clusters_.length; i++) {
      this.clusters_[i].remove();
    }
    this.clusters_ = [];
    // Remove map event listeners:
    for (let i = 0; i < this.listeners_.length; i++) {
      google.maps.event.removeListener(this.listeners_[i]);
    }
    this.listeners_ = [];
    this.activeMap_ = null;
    this.ready_ = false;
  }
  /**
   * Implementation of the draw interface method.
   * @ignore
   */
  draw() {}
  /**
   * Sets up the styles object.
   */
  setupStyles_() {
    if (this.styles_.length > 0) {
      return;
    }
    for (let i = 0; i < this.imageSizes_.length; i++) {
      const size = this.imageSizes_[i];
      this.styles_.push(MarkerClusterer.withDefaultStyle({
        url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
        height: size,
        width: size
      }));
    }
  }
  /**
   *  Fits the map to the bounds of the markers managed by the clusterer.
   */
  fitMapToMarkers(padding) {
    const markers = this.getMarkers();
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
      // March 3, 2018: Bug fix -- honor the ignoreHidden property
      if (markers[i].getVisible() || !this.getIgnoreHidden()) {
        bounds.extend(markers[i].getPosition());
      }
    }
    this.getMap().fitBounds(bounds, padding);
  }
  /**
   * Returns the value of the `gridSize` property.
   *
   * @return The grid size.
   */
  getGridSize() {
    return this.gridSize_;
  }
  /**
   * Sets the value of the `gridSize` property.
   *
   * @param gridSize The grid size.
   */
  setGridSize(gridSize) {
    this.gridSize_ = gridSize;
  }
  /**
   * Returns the value of the `minimumClusterSize` property.
   *
   * @return The minimum cluster size.
   */
  getMinimumClusterSize() {
    return this.minClusterSize_;
  }
  /**
   * Sets the value of the `minimumClusterSize` property.
   *
   * @param minimumClusterSize The minimum cluster size.
   */
  setMinimumClusterSize(minimumClusterSize) {
    this.minClusterSize_ = minimumClusterSize;
  }
  /**
   *  Returns the value of the `maxZoom` property.
   *
   *  @return The maximum zoom level.
   */
  getMaxZoom() {
    return this.maxZoom_;
  }
  /**
   *  Sets the value of the `maxZoom` property.
   *
   *  @param maxZoom The maximum zoom level.
   */
  setMaxZoom(maxZoom) {
    this.maxZoom_ = maxZoom;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setZIndex(zIndex) {
    this.zIndex_ = zIndex;
  }
  /**
   *  Returns the value of the `styles` property.
   *
   *  @return The array of styles defining the cluster markers to be used.
   */
  getStyles() {
    return this.styles_;
  }
  /**
   *  Sets the value of the `styles` property.
   *
   *  @param styles The array of styles to use.
   */
  setStyles(styles) {
    this.styles_ = styles;
  }
  /**
   * Returns the value of the `title` property.
   *
   * @return The content of the title text.
   */
  getTitle() {
    return this.title_;
  }
  /**
   *  Sets the value of the `title` property.
   *
   *  @param title The value of the title property.
   */
  setTitle(title) {
    this.title_ = title;
  }
  /**
   * Returns the value of the `zoomOnClick` property.
   *
   * @return True if zoomOnClick property is set.
   */
  getZoomOnClick() {
    return this.zoomOnClick_;
  }
  /**
   *  Sets the value of the `zoomOnClick` property.
   *
   *  @param zoomOnClick The value of the zoomOnClick property.
   */
  setZoomOnClick(zoomOnClick) {
    this.zoomOnClick_ = zoomOnClick;
  }
  /**
   * Returns the value of the `averageCenter` property.
   *
   * @return True if averageCenter property is set.
   */
  getAverageCenter() {
    return this.averageCenter_;
  }
  /**
   *  Sets the value of the `averageCenter` property.
   *
   *  @param averageCenter The value of the averageCenter property.
   */
  setAverageCenter(averageCenter) {
    this.averageCenter_ = averageCenter;
  }
  /**
   * Returns the value of the `ignoreHidden` property.
   *
   * @return True if ignoreHidden property is set.
   */
  getIgnoreHidden() {
    return this.ignoreHidden_;
  }
  /**
   *  Sets the value of the `ignoreHidden` property.
   *
   *  @param ignoreHidden The value of the ignoreHidden property.
   */
  setIgnoreHidden(ignoreHidden) {
    this.ignoreHidden_ = ignoreHidden;
  }
  /**
   * Returns the value of the `enableRetinaIcons` property.
   *
   * @return True if enableRetinaIcons property is set.
   */
  getEnableRetinaIcons() {
    return this.enableRetinaIcons_;
  }
  /**
   *  Sets the value of the `enableRetinaIcons` property.
   *
   *  @param enableRetinaIcons The value of the enableRetinaIcons property.
   */
  setEnableRetinaIcons(enableRetinaIcons) {
    this.enableRetinaIcons_ = enableRetinaIcons;
  }
  /**
   * Returns the value of the `imageExtension` property.
   *
   * @return The value of the imageExtension property.
   */
  getImageExtension() {
    return this.imageExtension_;
  }
  /**
   *  Sets the value of the `imageExtension` property.
   *
   *  @param imageExtension The value of the imageExtension property.
   */
  setImageExtension(imageExtension) {
    this.imageExtension_ = imageExtension;
  }
  /**
   * Returns the value of the `imagePath` property.
   *
   * @return The value of the imagePath property.
   */
  getImagePath() {
    return this.imagePath_;
  }
  /**
   *  Sets the value of the `imagePath` property.
   *
   *  @param imagePath The value of the imagePath property.
   */
  setImagePath(imagePath) {
    this.imagePath_ = imagePath;
  }
  /**
   * Returns the value of the `imageSizes` property.
   *
   * @return The value of the imageSizes property.
   */
  getImageSizes() {
    return this.imageSizes_;
  }
  /**
   *  Sets the value of the `imageSizes` property.
   *
   *  @param imageSizes The value of the imageSizes property.
   */
  setImageSizes(imageSizes) {
    this.imageSizes_ = imageSizes;
  }
  /**
   * Returns the value of the `calculator` property.
   *
   * @return the value of the calculator property.
   */
  getCalculator() {
    return this.calculator_;
  }
  /**
   * Sets the value of the `calculator` property.
   *
   * @param calculator The value of the calculator property.
   */
  setCalculator(calculator) {
    this.calculator_ = calculator;
  }
  /**
   * Returns the value of the `batchSizeIE` property.
   *
   * @return the value of the batchSizeIE property.
   */
  getBatchSizeIE() {
    return this.batchSizeIE_;
  }
  /**
   * Sets the value of the `batchSizeIE` property.
   *
   *  @param batchSizeIE The value of the batchSizeIE property.
   */
  setBatchSizeIE(batchSizeIE) {
    this.batchSizeIE_ = batchSizeIE;
  }
  /**
   * Returns the value of the `clusterClass` property.
   *
   * @return the value of the clusterClass property.
   */
  getClusterClass() {
    return this.clusterClass_;
  }
  /**
   * Sets the value of the `clusterClass` property.
   *
   *  @param clusterClass The value of the clusterClass property.
   */
  setClusterClass(clusterClass) {
    this.clusterClass_ = clusterClass;
  }
  /**
   *  Returns the array of markers managed by the clusterer.
   *
   *  @return The array of markers managed by the clusterer.
   */
  getMarkers() {
    return this.markers_;
  }
  /**
   *  Returns the number of markers managed by the clusterer.
   *
   *  @return The number of markers.
   */
  getTotalMarkers() {
    return this.markers_.length;
  }
  /**
   * Returns the current array of clusters formed by the clusterer.
   *
   * @return The array of clusters formed by the clusterer.
   */
  getClusters() {
    return this.clusters_;
  }
  /**
   * Returns the number of clusters formed by the clusterer.
   *
   * @return The number of clusters formed by the clusterer.
   */
  getTotalClusters() {
    return this.clusters_.length;
  }
  /**
   * Adds a marker to the clusterer. The clusters are redrawn unless
   *  `nodraw` is set to `true`.
   *
   * @param marker The marker to add.
   * @param nodraw Set to `true` to prevent redrawing.
   */
  addMarker(marker, nodraw) {
    this.pushMarkerTo_(marker);
    if (!nodraw) {
      this.redraw_();
    }
  }
  /**
   * Adds an array of markers to the clusterer. The clusters are redrawn unless
   *  `nodraw` is set to `true`.
   *
   * @param markers The markers to add.
   * @param nodraw Set to `true` to prevent redrawing.
   */
  addMarkers(markers, nodraw) {
    for (const key in markers) {
      if (Object.prototype.hasOwnProperty.call(markers, key)) {
        this.pushMarkerTo_(markers[key]);
      }
    }
    if (!nodraw) {
      this.redraw_();
    }
  }
  /**
   * Pushes a marker to the clusterer.
   *
   * @param marker The marker to add.
   */
  pushMarkerTo_(marker) {
    // If the marker is draggable add a listener so we can update the clusters on the dragend:
    if (marker.getDraggable()) {
      google.maps.event.addListener(marker, "dragend", () => {
        if (this.ready_) {
          marker.isAdded = false;
          this.repaint();
        }
      });
    }
    marker.isAdded = false;
    this.markers_.push(marker);
  }
  /**
   * Removes a marker from the cluster.  The clusters are redrawn unless
   *  `nodraw` is set to `true`. Returns `true` if the
   *  marker was removed from the clusterer.
   *
   * @param marker The marker to remove.
   * @param nodraw Set to `true` to prevent redrawing.
   * @return True if the marker was removed from the clusterer.
   */
  removeMarker(marker, nodraw) {
    const removed = this.removeMarker_(marker);
    if (!nodraw && removed) {
      this.repaint();
    }
    return removed;
  }
  /**
   * Removes an array of markers from the cluster. The clusters are redrawn unless
   *  `nodraw` is set to `true`. Returns `true` if markers were removed from the clusterer.
   *
   * @param markers The markers to remove.
   * @param nodraw Set to `true` to prevent redrawing.
   * @return True if markers were removed from the clusterer.
   */
  removeMarkers(markers, nodraw) {
    let removed = false;
    for (let i = 0; i < markers.length; i++) {
      const r = this.removeMarker_(markers[i]);
      removed = removed || r;
    }
    if (!nodraw && removed) {
      this.repaint();
    }
    return removed;
  }
  /**
   * Removes a marker and returns true if removed, false if not.
   *
   * @param marker The marker to remove
   * @return Whether the marker was removed or not
   */
  removeMarker_(marker) {
    let index = -1;
    if (this.markers_.indexOf) {
      index = this.markers_.indexOf(marker);
    } else {
      for (let i = 0; i < this.markers_.length; i++) {
        if (marker === this.markers_[i]) {
          index = i;
          break;
        }
      }
    }
    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }
    marker.setMap(null);
    this.markers_.splice(index, 1); // Remove the marker from the list of managed markers
    return true;
  }
  /**
   * Removes all clusters and markers from the map and also removes all markers
   *  managed by the clusterer.
   */
  clearMarkers() {
    this.resetViewport_(true);
    this.markers_ = [];
  }
  /**
   * Recalculates and redraws all the marker clusters from scratch.
   *  Call this after changing any properties.
   */
  repaint() {
    const oldClusters = this.clusters_.slice();
    this.clusters_ = [];
    this.resetViewport_(false);
    this.redraw_();
    // Remove the old clusters.
    // Do it in a timeout to prevent blinking effect.
    setTimeout(function () {
      for (let i = 0; i < oldClusters.length; i++) {
        oldClusters[i].remove();
      }
    }, 0);
  }
  /**
   * Returns the current bounds extended by the grid size.
   *
   * @param bounds The bounds to extend.
   * @return The extended bounds.
   * @ignore
   */
  getExtendedBounds(bounds) {
    const projection = this.getProjection();
    // Turn the bounds into latlng.
    const tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
    const bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
    // Convert the points to pixels and the extend out by the grid size.
    const trPix = projection.fromLatLngToDivPixel(tr);
    trPix.x += this.gridSize_;
    trPix.y -= this.gridSize_;
    const blPix = projection.fromLatLngToDivPixel(bl);
    blPix.x -= this.gridSize_;
    blPix.y += this.gridSize_;
    // Convert the pixel points back to LatLng
    const ne = projection.fromDivPixelToLatLng(trPix);
    const sw = projection.fromDivPixelToLatLng(blPix);
    // Extend the bounds to contain the new bounds.
    bounds.extend(ne);
    bounds.extend(sw);
    return bounds;
  }
  /**
   * Redraws all the clusters.
   */
  redraw_() {
    this.createClusters_(0);
  }
  /**
   * Removes all clusters from the map. The markers are also removed from the map
   *  if `hide` is set to `true`.
   *
   * @param hide Set to `true` to also remove the markers from the map.
   */
  resetViewport_(hide) {
    // Remove all the clusters
    for (let i = 0; i < this.clusters_.length; i++) {
      this.clusters_[i].remove();
    }
    this.clusters_ = [];
    // Reset the markers to not be added and to be removed from the map.
    for (let i = 0; i < this.markers_.length; i++) {
      const marker = this.markers_[i];
      marker.isAdded = false;
      if (hide) {
        marker.setMap(null);
      }
    }
  }
  /**
   * Calculates the distance between two latlng locations in km.
   *
   * @param p1 The first lat lng point.
   * @param p2 The second lat lng point.
   * @return The distance between the two points in km.
   * @link http://www.movable-type.co.uk/scripts/latlong.html
   */
  distanceBetweenPoints_(p1, p2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    const dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  /**
   * Determines if a marker is contained in a bounds.
   *
   * @param marker The marker to check.
   * @param bounds The bounds to check against.
   * @return True if the marker is in the bounds.
   */
  isMarkerInBounds_(marker, bounds) {
    return bounds.contains(marker.getPosition());
  }
  /**
   * Adds a marker to a cluster, or creates a new cluster.
   *
   * @param marker The marker to add.
   */
  addToClosestCluster_(marker) {
    let distance = 40000; // Some large number
    let clusterToAddTo = null;
    for (let i = 0; i < this.clusters_.length; i++) {
      const cluster = this.clusters_[i];
      const center = cluster.getCenter();
      if (center) {
        const d = this.distanceBetweenPoints_(center, marker.getPosition());
        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }
    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      const cluster = new Cluster(this);
      cluster.addMarker(marker);
      this.clusters_.push(cluster);
    }
  }
  /**
   * Creates the clusters. This is done in batches to avoid timeout errors
   *  in some browsers when there is a huge number of markers.
   *
   * @param iFirst The index of the first marker in the batch of
   *  markers to be added to clusters.
   */
  createClusters_(iFirst) {
    if (!this.ready_) {
      return;
    }
    // Cancel previous batch processing if we're working on the first batch:
    if (iFirst === 0) {
      google.maps.event.trigger(this, "clusteringbegin", this);
      if (typeof this.timerRefStatic !== "undefined") {
        clearTimeout(this.timerRefStatic);
        delete this.timerRefStatic;
      }
    }
    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    //
    // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
    let mapBounds;
    if (this.getMap().getZoom() > 3) {
      mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast());
    } else {
      mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    }
    const bounds = this.getExtendedBounds(mapBounds);
    const iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);
    for (let i = iFirst; i < iLast; i++) {
      const marker = this.markers_[i];
      if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
        if (!this.ignoreHidden_ || this.ignoreHidden_ && marker.getVisible()) {
          this.addToClosestCluster_(marker);
        }
      }
    }
    if (iLast < this.markers_.length) {
      this.timerRefStatic = window.setTimeout(() => {
        this.createClusters_(iLast);
      }, 0);
    } else {
      delete this.timerRefStatic;
      google.maps.event.trigger(this, "clusteringend", this);
      for (let i = 0; i < this.clusters_.length; i++) {
        this.clusters_[i].updateIcon();
      }
    }
  }
  /**
   * The default function for determining the label text and style
   * for a cluster icon.
   *
   * @param markers The array of markers represented by the cluster.
   * @param numStyles The number of marker styles available.
   * @return The information resource for the cluster.
   */
  static CALCULATOR(markers, numStyles) {
    let index = 0;
    const count = markers.length;
    let dv = count;
    while (dv !== 0) {
      dv = Math.floor(dv / 10);
      index++;
    }
    index = Math.min(index, numStyles);
    return {
      text: count.toString(),
      index: index,
      title: ""
    };
  }
  /**
   * Generates default styles augmented with user passed values.
   * Useful when you want to override some default values but keep untouched
   *
   * @param overrides override default values
   */
  static withDefaultStyle(overrides) {
    return Object.assign({
      textColor: "black",
      textSize: 11,
      textDecoration: "none",
      textLineHeight: overrides.height,
      fontWeight: "bold",
      fontStyle: "normal",
      fontFamily: "Arial,sans-serif",
      backgroundPosition: "0 0"
    }, overrides);
  }
}
/**
 * The number of markers to process in one batch.
 */
MarkerClusterer.BATCH_SIZE = 2000;
/**
 * The number of markers to process in one batch (IE only).
 */
MarkerClusterer.BATCH_SIZE_IE = 500;
/**
 * The default root name for the marker cluster images.
 */
MarkerClusterer.IMAGE_PATH = "../images/m";
/**
 * The default extension name for the marker cluster images.
 */
MarkerClusterer.IMAGE_EXTENSION = "png";
/**
 * The default array of sizes for the marker cluster images.
 */
MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkerClusterer);

/***/ }),

/***/ 7367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor() {
    super(...arguments);
    this._value = null;
    this._hasValue = false;
    this._isComplete = false;
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      _hasValue,
      _value,
      thrownError,
      isStopped,
      _isComplete
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  }
  next(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  }
  complete() {
    const {
      _hasValue,
      _value,
      _isComplete
    } = this;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && super.next(_value);
      super.complete();
    }
  }
}

/***/ }),

/***/ 4223:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/bindCallback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallback": () => (/* binding */ bindCallback)
/* harmony export */ });
/* harmony import */ var _bindCallbackInternals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindCallbackInternals */ 8419);

function bindCallback(callbackFunc, resultSelector, scheduler) {
  return (0,_bindCallbackInternals__WEBPACK_IMPORTED_MODULE_0__.bindCallbackInternals)(false, callbackFunc, resultSelector, scheduler);
}

/***/ }),

/***/ 8419:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/bindCallbackInternals.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallbackInternals": () => (/* binding */ bindCallbackInternals)
/* harmony export */ });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ 9867);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/subscribeOn */ 4317);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/observeOn */ 8728);
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AsyncSubject */ 7367);






function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function (...args) {
        return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
      };
    }
  }
  if (scheduler) {
    return function (...args) {
      return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_2__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_3__.observeOn)(scheduler));
    };
  }
  return function (...args) {
    const subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
    let uninitialized = true;
    return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
      const subs = subject.subscribe(subscriber);
      if (uninitialized) {
        uninitialized = false;
        let isAsync = false;
        let isComplete = false;
        callbackFunc.apply(this, [...args, (...results) => {
          if (isNodeStyle) {
            const err = results.shift();
            if (err != null) {
              subject.error(err);
              return;
            }
          }
          subject.next(1 < results.length ? results : results[0]);
          isComplete = true;
          if (isAsync) {
            subject.complete();
          }
        }]);
        if (isComplete) {
          subject.complete();
        }
        isAsync = true;
      }
      return subs;
    });
  };
}

/***/ }),

/***/ 4370:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEventPattern": () => (/* binding */ fromEventPattern)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ 2971);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);



function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__.mapOneOrManyArgs)(resultSelector));
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
    const retValue = addHandler(handler);
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(removeHandler) ? () => removeHandler(handler, retValue) : undefined;
  });
}

/***/ }),

/***/ 3167:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/flatMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatMap": () => (/* binding */ flatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ 1353);

const flatMap = _mergeMap__WEBPACK_IMPORTED_MODULE_0__.mergeMap;

/***/ }),

/***/ 5462:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/sample.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sample": () => (/* binding */ sample)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 9635);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);




function sample(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
    }));
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, () => {
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    }, _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
  });
}

/***/ }),

/***/ 7260:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skip": () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 116);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}

/***/ }),

/***/ 8951:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 9635);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 3305:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "agm-map {\n  height: 100%;\n}\n\n.socialButtons {\n  width: auto;\n}\n\n.MapFaButton {\n  width: 112px;\n  height: 44px;\n  padding: 0px;\n  margin-left: -28.5px;\n  color: var(--ion-card-background-2);\n  border: 1px solid var(--ion-text-color-2);\n  border-radius: 8px;\n  background-color: var(--ion-text-color);\n  --color: var(--ion-card-background-2);\n  --background: var(--ion-text-color);\n  --border-radius: 8px;\n  --box-shadow: none;\n}\n.MapFaButton ion-icon {\n  font-size: 18px;\n  margin-right: 6px;\n  margin-top: -1px;\n}\n.MapFaButton ion-label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.backImg2 {\n  height: 62px;\n  background-position: center !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n}\n\n.listingCard {\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  width: 90% !important;\n  left: 5%;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n}\n\n.dot {\n  border-radius: 50%;\n  animation: dot-grow 2s infinite;\n}\n\n@keyframes dot-grow {\n  from {\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16), 0 0 0 0 var(--ion-color-gold);\n  }\n  to {\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16), 0 0 0 32px transparent;\n  }\n}\n.rotating {\n  animation: spin 4s linear infinite;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/mapa/mapa.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,mCAAA;EACA,yCAAA;EACA,kBAAA;EACA,uCAAA;EACA,qCAAA;EACA,mCAAA;EACA,oBAAA;EACA,kBAAA;AACF;AAEE;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AAAJ;AAGE;EACE,eAAA;EACA,gBAAA;AADJ;;AAKA;EACE,YAAA;EACA,sCAAA;EAIA,iCAAA;EACA,kBAAA;EACA,gBAAA;AAFF;;AAKA;EACE,eAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;EACA,QAAA;EACA,0DAAA;AAFF;;AAQA;EACE,kBAAA;EACA,+BAAA;AALF;;AAQA;EACC;IACC,2EAAA;EALA;EAOD;IACC,oEAAA;EALA;AACF;AAQA;EAGI,kCAAA;AANJ;AAcA;EACI;IAEI,yBAAA;EADN;AACF","sourcesContent":["agm-map {\n  height: 100%;\n}\n\n.socialButtons {\n  width: auto;\n}\n\n.MapFaButton {\n  width: 112px;\n  height: 44px;\n  padding: 0px;\n  margin-left: -28.5px;\n  color: var(--ion-card-background-2);\n  border: 1px solid var(--ion-text-color-2);\n  border-radius: 8px;\n  background-color: var(--ion-text-color); \n  --color: var(--ion-card-background-2);\n  --background: var(--ion-text-color); \n  --border-radius: 8px;\n  --box-shadow: none;\n\n  \n  ion-icon {\n    font-size: 18px;\n    margin-right: 6px;\n    margin-top: -1px;\n  }\n\n  ion-label {\n    font-size: 14px;\n    font-weight: 600;\n  }\n}\n\n.backImg2 {\n  height: 62px;\n  background-position: center !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  background-size: cover !important;\n  position: relative;\n  overflow: hidden;\n}\n\n.listingCard{\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  width: 90% !important;\n  left: 5%;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n}\n\n\n\n\n.dot {\n  border-radius: 50%;\n  animation: dot-grow 2s infinite;\n}\n\n@keyframes dot-grow {\n\tfrom {\n\t\tbox-shadow: 4px 4px 10px rgba(0,0,0,.16),0 0 0 0 var(--ion-color-gold);\n\t}\n\tto {\n\t\tbox-shadow: 4px 4px 10px rgba(0,0,0,.16),0 0 0 32px transparent;\n\t}\n}\n\n.rotating {\n    -webkit-animation: spin 4s linear infinite;\n    -moz-animation: spin 4s linear infinite;\n    animation: spin 4s linear infinite;\n}\n@-moz-keyframes spin { \n    100% { -moz-transform: rotate(360deg); } \n}\n@-webkit-keyframes spin { \n    100% { -webkit-transform: rotate(360deg); } \n}\n@keyframes spin { \n    100% { \n        -webkit-transform: rotate(360deg); \n        transform: rotate(360deg); \n    } \n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5119:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content style=\"overflow: hidden;\">\n\n  <!-- WYJDŹ --> \n  <ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\" [routerLink]=\"['/' + settings.langCode]\">\n    <ion-fab-button class=\"MapFaButton\">\n      <ion-icon name=\"book\"></ion-icon>\n      <ion-label>{{'LEGENDS' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <!-- Loading\n  <div *ngIf=\"!this.legendy.length && loadingLegenda\" style=\"text-align: center !important; width: 100%; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\n    <ion-spinner style=\"display: block; margin-left: auto; margin-right: auto;\" name=\"lines\"></ion-spinner>\n    <ion-label style=\"font-weight: 500; font-size: 12pt; line-height: 16pt;\">{{'LOADING' | translate}}</ion-label>\n  </div> -->\n      <!-- *ngIf=\"this.legendy.length && !loadingLegenda\" --> \n  <agm-map [styles]=\"this.settings.mapStyle\" [disableDefaultUI]='true' [latitude]=\"mapLat\" [longitude]=\"mapLng\" [zoom]=\"zoom\" [minZoom]=\"5\" (centerChange)=\"centerChanged($event)\" (mapClick)=\"mapClick()\">\n\n    <agm-overlay *ngFor=\"let post of settings.legends\" [latitude]=\"post?.Lat\" [longitude]=\"post?.Long\" style=\"z-index: 10;\">\n           <div class=\"imgMapPin\">\n               <ion-icon name=\"fish-outline\" style=\"cursor: pointer; font-size: 16px; color: #ffffff; background-color: #242527; border-radius: 50%;\"></ion-icon>\n           </div>\n    </agm-overlay>\n\n    <agm-marker [latitude]=\"myLat\" [longitude]=\"myLng\" [iconUrl]= \"{url: '../../../assets/imgs/pin.svg', labelOrigin: {x: 22.5, y: 22.5, equals}, scaledSize: {height: 80, width: 80, equals}}\" [zIndex]=\"10\" (markerClick)=markerClick(iw)>\n      <agm-info-window #iw>\n        <div class=\"ion-activatable ripple-parent\" style=\"border-radius: 4px; padding: 8px; width: 100%; background-color: var(--ion-card-background) !important;\">\n          <div style=\"padding: 6px;\">\n            <ion-label style=\"font-size: 11pt; font-weight: 500;\">{{'THIS_IS_YOU' | translate}}</ion-label>\n            <!-- <p>{{myLat}}, {{myLng}}</p> -->\n          </div>\n        </div>\n      </agm-info-window>\n    </agm-marker>\n    \n    <agm-marker-cluster [averageCenter]=\"true\" [minimumClusterSize]=\"2\" clusterClass=\"clusterMap\" [styles]=\"clusterMarker\">\n      <agm-marker *ngFor=\"let post of settings.legends\" [latitude]=\"post?.Lat\" [longitude]=\"post?.Long\" [markerDraggable]=\"false\" [iconUrl]=\"{url: '../../../assets/imgs/marker.svg', labelOrigin: {x: 22, y: 22, equals}, scaledSize: {height: 50, width: 50, equals}}\" (markerClick)=markerClick(iw)>\n        <agm-info-window #iw>\n\n\n          <!-- POSTS -->\n          <ion-card [routerLink]=\"['/' + settings.langCode,'legenda',post?.Slug]\" class=\"ion-activatable ripple-parent\" style=\"--ripple-color: var(--ion-border-color-2) !important; border: 0px solid var(--ion-border-color); margin: 0px !important; box-shadow: none; border-radius: 0px;\">\n            <ion-card-content style=\"padding: 0px;\">\n              <img loading=\"lazy\" width=\"1200\" height=\"670\" style=\"width: 100%; height: auto;\" src=\"{{post?.FeaturedImage}}\" alt=\"{{post?.Title}}\"/>\n            \n              <div style=\"margin: -46px 0px 0px -1px;\">\n                <div class=\"postChip\">\n                  <ion-label style=\"font-weight: 500; font-size: 8pt;\">· {{post?.Date}} ·</ion-label>\n                </div>\n              </div>\n            </ion-card-content>\n        \n            <ion-card-content style=\"text-align: left; padding: 18px 8px 8px 8px;\">\n              <ion-label style=\"font-weight: bold; font-size: 16px; line-height: 18px;\" [innerHTML]=\"post?.Title\"></ion-label>\n              <p style=\"font-size: 10px; line-height: 10px; font-weight: 500; padding-top: 5px;\" [innerHTML]=\"post?.Excerpt\"></p>\n            </ion-card-content>\n          <ion-ripple-effect></ion-ripple-effect>\n          </ion-card>\n\n        </agm-info-window>\n      </agm-marker>\n    </agm-marker-cluster>\n\n  </agm-map>\n</ion-content>\n\n\n<ion-footer class=\"map ion-no-border\" style=\"\">\n<div class=\"footer-div\">\n      <button (click)=\"myPosition()\" style=\"color: var(--ion-card-background-2); border: 1px solid var(--ion-text-color-2); background-color: var(--ion-text-color); box-shadow: none; font-size: 26px;\" class=\"headerButton ion-activatable ripple-parent\">\n        <ion-icon *ngIf=\"locationActive && !locationLoading\" class=\"rotating\" name=\"locate\" style=\"margin-bottom: -3px;\"></ion-icon>\n        <ion-icon *ngIf=\"locationActive && !locationLoading\" class=\"dot\" name=\"ellipse\" style=\"font-size: 7px; color: var(--ion-card-background-2) !important; position: absolute; top: 17px; left: 17.5px;\"></ion-icon>\n        <ion-icon *ngIf=\"!locationActive && !locationLoading\" name=\"locate-outline\" style=\"margin-bottom: -4px;\"></ion-icon>\n        <ion-spinner *ngIf=\"locationLoading\" style=\"color: var(--ion-background-color); margin-bottom: -3.5px;\" name=\"lines\"></ion-spinner>\n      <ion-ripple-effect type=\"bounded\" style=\"border-radius: 50%;\"></ion-ripple-effect>\n      </button>\n</div>\n\n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_mapa_mapa_module_ts.js.map
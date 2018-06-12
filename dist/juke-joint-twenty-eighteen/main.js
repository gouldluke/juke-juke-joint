(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-area {\n    padding: 10px\n}\n\n.top-row {\n    padding-bottom: 50px\n}\n\nh1 {\n    font-size: 3.5rem;\n    margin-bottom: 0rem;\n    padding-right: 20px\n}\n\n.descriptive-text {\n    color: black;\n    font-size: 1.75rem;\n    font-weight: 500;\n    line-height: 1.2;\n}\n\n.detail-info {\n    max-width: 500px;\n}\n\n.tickets-here {\n    color: #9AD6D5;\n}\n\n.black-music-history {\n    max-width: 400px;\n    padding-left: 20px;\n}\n\n.with-music-by {\n    font-style: italic;\n}\n\n.artist-list {\n    max-width: 400px;\n}\n\n.musician {\n    color: black;\n}\n\nfooter {\n    background-color: #CCD93E;\n}\n\n.footer-section {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-area d-flex flex-column\">\n    <div class=\"d-flex flex-row justify-content-between top-row\">\n        <div class=\"detail-info\">\n            <a href=\"{{eventbriteLink}}\" class=\"descriptive-text\">saturday / june 30 / seven pm / mahalls / lakewood / ten dollars / </a>\n            <a href=\"{{eventbriteLink}}\" class=\"descriptive-text tickets-here\">tickets here</a>\n        </div>\n        <a align=\"right\" href=\"{{blackMusicHistoryLink}}\" class=\"black-music-history descriptive-text\">a fundraiser celebrating black music history month</a>\n    </div>\n    <div class=\"d-flex flex-row justify-content-between align-items-end\">\n        <h1>juke joint</h1>\n        <div align=\"right\" class=\"d-flex flex-column\">\n            <div class=\"with-music-by descriptive-text\">with music by:</div>\n            <div class=\"artist-list descriptive-text\">\n                <span><a href=\"{{danteAndTayLink}}\" class=\"musician\">dante & tay</a></span><span> / </span>\n                <span><a href=\"{{adabLink}}\" class=\"musician\">adab</a></span><span> / </span>\n                <span><a href=\"{{fanaLink}}\" class=\"musician\">fana</a></span><span> / </span>\n                <span><a href=\"{{mazLink}}\" class=\"musician\">maz</a></span><span> / </span>\n                <span><a href=\"{{shirtlessLink}}\" class=\"musician\">shirtless</a></span><span> / </span>\n                <span><a href=\"{{smokescreenLink}}\" class=\"musician\">smokescreen</a></span>\n            </div>\n        </div>\n    </div>\n</div>\n<a href=\"{{ampLink}}\">\n    <img src=\"../assets/jukejoint.jpg\" class=\"img-fluid\" alt=\"juke joint flyer\">\n</a>\n<footer class=\"d-flex flex-row justify-content-between\">\n    <div class=\"d-flex flex-column footer-section\">\n        <h5>Put on by:</h5>\n        <a href=\"{{ampLink}}\">Amp BIPOC NEO</a>\n        NODS Network\n    </div>\n    <div class=\"d-flex flex-column footer-section\" align=\"right\">\n        <h5>More links:</h5>\n        <a href=\"{{eventbriteLink}}\">Eventbrite (for tickets)</a>\n        <a href=\"{{facebookEventLink}}\">Facebook Event</a>\n        <a href=\"{{instagramLink}}\">Instagram</a>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.eventbriteLink = "https://www.eventbrite.com/e/june-juke-joint-tickets-46057809147";
        this.ampLink = "https://www.facebook.com/AmpNEO/";
        this.blackMusicHistoryLink = "???";
        this.facebookEventLink = "https://www.facebook.com/events/228436367921490/";
        this.instagramLink = "https://www.instagram.com/ampbipocneo/";
        this.adabLink = "https://soundcloud.com/adab/heaven-is-in-you-adab-wxcu-mix";
        this.danteAndTayLink = "???";
        this.fanaLink = "https://soundcloud.com/daisychain_podcast/daisychain-004-fana";
        this.mazLink = "https://soundcloud.com/tendertones/sets/pale-moon";
        this.shirtlessLink = "https://soundcloud.com/asiandopeboys/adbmix-shirtless-adb-misery-mix";
        this.smokescreenLink = "https://soundcloud.com/smoke_screen/smoke-screen-ice-cold-water-01";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lukegould/Development/juke-joint-twenty-eighteen/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
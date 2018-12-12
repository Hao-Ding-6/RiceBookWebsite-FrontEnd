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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adapter.service.ts":
/*!************************************!*\
  !*** ./src/app/adapter.service.ts ***!
  \************************************/
/*! exports provided: AdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterService", function() { return AdapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdapterService = /** @class */ (function () {
    function AdapterService() {
        this.shouldUpdatePosts = false;
        this.shouldUpdateFollowers = false;
        this.userLogin = "";
        this.postsList = [];
        this.searchPostsList = [];
        this.afterSearch = false;
    }
    /** Set login user **/
    AdapterService.prototype.setUser = function (userLogin) {
        this.userLogin = userLogin;
    };
    /** Get login user **/
    AdapterService.prototype.getUser = function () {
        return this.userLogin;
    };
    /** Set Json info **/
    AdapterService.prototype.setJson = function (jsonStr) {
        this.jsonStr = jsonStr;
    };
    /** Get Json info **/
    AdapterService.prototype.getJson = function () {
        return this.jsonStr;
    };
    /** Set post list **/
    AdapterService.prototype.setPostsList = function (postsList) {
        this.postsList = postsList;
    };
    /** Get post list **/
    AdapterService.prototype.getPostsList = function () {
        return this.postsList;
    };
    /** Set followers list **/
    AdapterService.prototype.setFollowersList = function (followersList) {
        this.followersList = followersList;
    };
    /** Get followers list **/
    AdapterService.prototype.getFollowersList = function () {
        return this.followersList;
    };
    /** Set search posts list **/
    AdapterService.prototype.setSearchPostsList = function (searchPostsList) {
        this.searchPostsList = searchPostsList;
        this.afterSearch = true;
    };
    /** Get sarch post list **/
    AdapterService.prototype.getSearchPostsList = function () {
        return this.searchPostsList;
    };
    AdapterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /** This service is used to store profile info as Json string. **/
        ,
        __metadata("design:paramtypes", [])
    ], AdapterService);
    return AdapterService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*fake css for submit*/\r\ndiv {\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<app-auth></app-auth>-->\n<router-outlet></router-outlet>\n"

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
        this.title = 'hw4';
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
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/headline/headline.component */ "./src/app/main/headline/headline.component.ts");
/* harmony import */ var _main_following_following_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/following/following.component */ "./src/app/main/following/following.component.ts");
/* harmony import */ var _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [{ path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"] }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_11__["HeadlineComponent"],
                _main_following_following_component__WEBPACK_IMPORTED_MODULE_12__["FollowingComponent"],
                _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_13__["PostsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  height: 136%;\r\n  background: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-686013.png) no-repeat fixed;\r\n  background-size: cover;\r\n}\r\n\r\nmat-toolbar{\r\n  font-size: 150%;\r\n}\r\n\r\n#registration-layout {\r\n  float: left;\r\n  margin-left:10%;\r\n  margin-top:5%;\r\n}\r\n\r\n#login-layout {\r\n  float: right;\r\n  margin-right:10%;\r\n  margin-top:5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"author\" content=\"Hao Ding(netID: hd25)\">\n  </head>\n\n  <body>\n    <mat-toolbar color=\"primary\"> Welcome to Rice Book! </mat-toolbar>\n    <app-registration id=\"registration-layout\"></app-registration>\n    <app-login id=\"login-layout\"></app-login>\n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\n.loginDiv {\r\n  margin:20px auto;\r\n  padding:10px 60px 10px 60px;\r\n  background-color:rgba(255, 255, 255, 0.6);\r\n  border-color:#ffffcc;\r\n}\r\n\r\n#google-btn {\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginDiv\">\n  <h2> LOGIN IN </h2>\n  <form #loginForm=\"ngForm\" [formGroup]=\"formLogin\" name=\"loginForm\" method=\"GET\" action=\"/main\">\n    <p>ACCOUNT NAME:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"login-accountName\" name=\"accountName\" placeholder=\"Hao Ding\" formControlName=\"accountControl\" [formControl]=\"accountFormControl\" required>\n        <mat-error *ngIf=\"accountFormControl.hasError('pattern')\">\n          Please enter a valid account name\n        </mat-error>\n        <mat-error *ngIf=\"accountFormControl.hasError('required')\">\n          Account Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>PASSWORD:\n      <mat-form-field>\n        <input matInput type=\"password\" id=\"login-password\" name=\"password\" formControlName=\"passwordControl\" [formControl]=\"passwordFormControl\" required>\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n          Password is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>\n      <input mat-button (click)=\"isRegistered()\" class=\"mat-raised-button mat-accent\" type=\"submit\" value=\"Login\" id=\"loginBtn\"\n                        [disabled]=\"!loginForm.valid\">\n\n      <button class=\"mat-raised-button\" id=\"google-btn\" mat-button color=\"accent\" (click)=\"GoogleLogin()\"> <mat-icon>person_outline</mat-icon> Login with Google </button>\n    </p>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ "./src/app/auth/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getRegisteredJson().subscribe(function (response) { _this.registeredUserList = response['registered_user']; });
        this.accountFormControl = this.loginService.getAccountControl();
        this.passwordFormControl = this.loginService.getPasswpordControl();
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            accountControl: this.accountFormControl,
            passwordControl: this.passwordFormControl
        });
    };
    /** check if accountName and password are in registered list **/
    LoginComponent.prototype.isRegistered = function () {
        this.loginService.isRegistered(this.formLogin.value.accountControl, this.formLogin.value.passwordControl);
    };
    /** login with facebook **/
    LoginComponent.prototype.GoogleLogin = function () {
        window.location.href = 'https://ricebook-hd25.herokuapp.com/login/auth/google';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http, adapter, router) {
        this.http = http;
        this.adapter = adapter;
        this.router = router;
        this.accountFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?![0-9])[a-zA-Z0-9]+$/)
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        // this.http.get('assets/registered_user.json').subscribe(response => {this.registered_user = response['registered_user']});
    }
    LoginService.prototype.getAccountControl = function () {
        return this.accountFormControl;
    };
    LoginService.prototype.getPasswpordControl = function () {
        return this.passwordFormControl;
    };
    LoginService.prototype.getRegisteredJson = function () {
        return this.http.get('assets/registered_user.json');
    };
    LoginService.prototype.isRegistered = function (accountName, password) {
        var _this = this;
        var body = { accountName: accountName, password: password };
        this.http.post('https://ricebook-hd25.herokuapp.com/login', body, { withCredentials: true }).subscribe(function (response) {
            localStorage.setItem("accountName", accountName);
            _this.router.navigate(["/main"]);
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _adapter_service__WEBPACK_IMPORTED_MODULE_3__["AdapterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\n.registerDiv {\r\n  margin:20px auto;\r\n  padding:10px 60px 10px 60px;\r\n  background-color:rgba(255, 255, 255, 0.6);\r\n  border-color:#ffffcc;\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-right: 10px;\r\n}\r\n\r\n.errorDiv {\r\n  color: #f44336;\r\n  font-size: 75%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registerDiv\">\n  <h2> REGISTRATION </h2>\n\n  <form #registerForm=\"ngForm\" [formGroup]=\"formRegister\" name=\"registerForm\" method=\"GET\" action=\"/main\">\n    <p>ACCOUNT NAME:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"accountName\" name=\"accountName\" placeholder=\"Hao Ding\" formControlName=\"accountControl\" [formControl]=\"accountFormControl\" required>\n        <mat-error *ngIf=\"accountFormControl.hasError('pattern')\">\n          Please enter a valid account name\n        </mat-error>\n        <mat-error *ngIf=\"accountFormControl.hasError('required')\">\n          Account Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>DISPLAY NAME:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"displayName\" name=\"displayName\" placeholder=\"Hao-Ding-6\" formControlName=\"displayControl\" [formControl]=\"displayFormControl\">\n      </mat-form-field>\n    </p>\n\n    <p>EMAIL ADDRESS:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"emailAddress\" name=\"emailAddress\" placeholder=\"xxx@xxx.com\" formControlName=\"emailControl\" [formControl]=\"emailFormControl\" required>\n        <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>DATE OF BIRTH:\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" id=\"birthday\" name=\"birthday\" placeholder=\"Choose your birth date\" formControlName=\"birthdayControl\" [formControl]=\"birthdayFormControl\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error *ngIf=\"birthdayFormControl.hasError('required')\">\n          Date of birth is <strong>required</strong>\n        </mat-error>\n        <div class=\"errorDiv\" *ngIf=\"!isAdult()\">\n          You should be more than 18\n        </div>\n      </mat-form-field>\n    </p>\n\n    <p>PHONE NUMBER:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"123-123-1234\"  formControlName=\"phonenumControl\" [formControl]=\"phonenumFormControl\" required>\n        <mat-error *ngIf=\"phonenumFormControl.hasError('pattern')\">\n          Please enter a valid phone number\n        </mat-error>\n        <mat-error *ngIf=\"phonenumFormControl.hasError('required')\">\n          Phone Number is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>ZIP CODE:\n      <mat-form-field>\n        <input matInput type=\"text\" id=\"zipCode\" name=\"zipCode\" placeholder=\"77030\" formControlName=\"zipcodeControl\" [formControl]=\"zipcodeFormControl\" required>\n        <mat-error *ngIf=\"zipcodeFormControl.hasError('pattern')\">\n          Please enter a valid zipcode\n        </mat-error>\n        <mat-error *ngIf=\"zipcodeFormControl.hasError('required')\">\n          Zipcode is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>PASSWORD:\n      <mat-form-field>\n        <input matInput type=\"password\" id=\"password\" name=\"password\" formControlName=\"passwordControl\" [formControl]=\"passwordFormControl\" required>\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n          Password is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </p>\n\n    <p>PASSWORD CONFIRMATION:\n      <mat-form-field>\n        <input matInput type=\"password\" id=\"passwordConfirm\" name=\"passwordConfirm\" formControlName=\"passwordconfirmControl\" [formControl]=\"passwordconfirmFormControl\" required>\n        <mat-error *ngIf=\"passwordconfirmFormControl.hasError('required')\">\n          Password Confirmation is <strong>required</strong>\n        </mat-error>\n        <div class=\"errorDiv\" *ngIf=\"!passwordMatch()\">\n          Password confirmation should be equal to password above\n        </div>\n      </mat-form-field>\n    </p>\n\n    <p>\n      <input mat-button (click)=\"submitForm()\" class=\"mat-raised-button mat-accent\" type=\"submit\" value=\"Submit\" id=\"registerBtn\"\n                        [disabled]=\"!registerForm.valid || !isAdult() || !passwordMatch()\">\n      <input mat-button class=\"mat-raised-button mat-accent\" type=\"reset\" value=\"Clear\">\n    </p>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/registration.service */ "./src/app/auth/registration/registration.service.ts");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(registerService, adapterService, router) {
        this.registerService = registerService;
        this.adapterService = adapterService;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.accountFormControl = this.registerService.getAccountControl();
        this.displayFormControl = this.registerService.getDisplayControl();
        this.emailFormControl = this.registerService.getEmailControl();
        this.birthdayFormControl = this.registerService.getBirthdayControl();
        this.phonenumFormControl = this.registerService.getPhonenumControl();
        this.zipcodeFormControl = this.registerService.getZipcodeControl();
        this.passwordFormControl = this.registerService.getPasswordControl();
        this.passwordconfirmFormControl = this.registerService.getPasswordconfirmControl();
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            accountControl: this.accountFormControl,
            displayControl: this.displayFormControl,
            emailControl: this.emailFormControl,
            birthdayControl: this.birthdayFormControl,
            phonenumControl: this.phonenumFormControl,
            zipcodeControl: this.zipcodeFormControl,
            passwordControl: this.passwordFormControl,
            passwordconfirmControl: this.passwordconfirmFormControl
        });
    };
    RegistrationComponent.prototype.submitForm = function () {
        var accountName = this.formRegister.value.accountControl;
        var displayName = this.formRegister.value.displayControl;
        var emailAddress = this.formRegister.value.emailControl;
        var selectedDate = new Date(this.formRegister.value.birthdayControl);
        var birthday = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
        var phoneNumber = this.formRegister.value.phonenumControl;
        var zipCode = this.formRegister.value.zipcodeControl;
        var password = this.formRegister.value.passwordControl;
        this.jsonStr = '{"profile":[' + '{"accountName":"' + accountName + '","displayName":"' + displayName + '","emailAddress":"' +
            emailAddress + '","birthday":"' + birthday + '","phoneNumber":"' + phoneNumber + '","zipCode":"' + zipCode + '","password":"' + password +
            '","avatar":"' + "https://tomli.blog/wp-content/plugins/stronger-github-widget//img/octocat_big.png" +
            '","headline":"' + "I'm a new user, cool." + '"}' + ']}';
        console.log(this.jsonStr);
        this.adapterService.setJson(this.jsonStr);
        /** send register info to db **/
        this.registerService.registerInfo2DB(accountName, displayName, emailAddress, birthday, phoneNumber, zipCode, password);
        // this.router.navigate(["/main"]); // new user can not log in
    };
    RegistrationComponent.prototype.isAdult = function () {
        var selectedDate = new Date(this.formRegister.value.birthdayControl);
        var birthYear = selectedDate.getFullYear();
        var birthMonth = selectedDate.getMonth() + 1;
        var birthDay = selectedDate.getDate();
        var curTime = new Date();
        var curYear = curTime.getFullYear();
        var curMonth = curTime.getMonth() + 1;
        var curDay = curTime.getDate();
        if (curYear - birthYear < 18) {
            return false;
        }
        else if (curYear - birthYear === 18) {
            if (curMonth - birthMonth < 0) {
                return false;
            }
            else if (curMonth - birthMonth === 0) {
                if (curDay - birthDay < 0) {
                    return false;
                }
            }
        }
        return true;
    };
    RegistrationComponent.prototype.passwordMatch = function () {
        var password1 = this.formRegister.value.passwordControl;
        var password2 = this.formRegister.value.passwordconfirmControl;
        if (password1 !== password2) {
            return false;
        }
        return true;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/auth/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_registration_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"], _adapter_service__WEBPACK_IMPORTED_MODULE_2__["AdapterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/registration/registration.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
        this.accountFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?![0-9])[a-zA-Z0-9]+$/)
        ]);
        this.displayFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
        ]);
        this.birthdayFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.phonenumFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        ]);
        this.zipcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9]{5}(-[0-9]{4})?/)
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.passwordconfirmFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
    }
    RegistrationService.prototype.getAccountControl = function () {
        return this.accountFormControl;
    };
    RegistrationService.prototype.getDisplayControl = function () {
        return this.displayFormControl;
    };
    RegistrationService.prototype.getEmailControl = function () {
        return this.emailFormControl;
    };
    RegistrationService.prototype.getBirthdayControl = function () {
        return this.birthdayFormControl;
    };
    RegistrationService.prototype.getPhonenumControl = function () {
        return this.phonenumFormControl;
    };
    RegistrationService.prototype.getZipcodeControl = function () {
        return this.zipcodeFormControl;
    };
    RegistrationService.prototype.getPasswordControl = function () {
        return this.passwordFormControl;
    };
    RegistrationService.prototype.getPasswordconfirmControl = function () {
        return this.passwordconfirmFormControl;
    };
    RegistrationService.prototype.registerInfo2DB = function (accountName, displayName, emailAddress, birthday, phoneNumber, zipCode, password) {
        var body = { accountName: accountName,
            displayName: displayName,
            emailAddress: emailAddress,
            birthday: birthday,
            phoneNumber: phoneNumber,
            zipCode: zipCode,
            password: password,
            avatar: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-710595.png",
            headline: "I'm a new user, cool." };
        this.http.post('https://ricebook-hd25.herokuapp.com/register', body).subscribe(function (response) { });
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/main/following/following.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/following/following.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\nmat-card {\r\n  /*width: 330px;*/\r\n  width: 100%\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n}\r\n\r\n#addButtonCard {\r\n  width: 330px;\r\n}\r\n\r\n.errorDiv {\r\n  color: #f44336;\r\n  font-size: 75%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/following/following.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/following/following.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--User's follower HTML-->\n<div>\n  <mat-card>\n    <h2>Followers</h2>\n    <!--Use mat-card to contain info of followers-->\n    <mat-card-header *ngFor=\"let follower of followersList\"> <!--followerList contains info from follower.json, assigned in following.component.ts file-->\n      <!--Follower's avatar, name and headline-->\n      <img mat-card-avatar src=\"{{follower.avatar}}\">\n      <mat-card-title>{{follower.accountName}}</mat-card-title>\n      <mat-card-subtitle>{{follower.headline}}</mat-card-subtitle>\n\n      <!--Button to unfollow(remove)-->\n      <button id=\"remove-btn\" mat-mini-fab (click)=\"removeFollower(follower.accountName)\">\n        <mat-icon>remove</mat-icon>\n      </button>\n\n    </mat-card-header>\n\n    <!--Button to add follower-->\n    <mat-card-header id=\"addButtonCard\">\n      <form #addfollowerForm=\"ngForm\" [formGroup]=\"formAddfollower\" method=\"GET\">\n\n        <!--<mat-card-subtitle>________________________________________________</mat-card-subtitle>-->\n        <mat-form-field>\n          <input matInput type=\"text\" name=\"followerName\" placeholder=\"Name of new follower\" formControlName=\"followernameControl\" [formControl]=\"followernameFormControl\" [(ngModel)]=\"addfollower_clear\">\n          <div class=\"errorDiv\" *ngIf=\"!checkFollower()\">\n            User must be registered and not exist in follower list.\n          </div>\n        </mat-form-field>\n\n        <button mat-mini-fab color=\"warn\" (click)=\"addFollower()\">\n          <mat-icon>add</mat-icon> <!--Angular Material button icon-->\n        </button>\n\n      </form>\n\n    </mat-card-header>\n\n\n  </mat-card>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/main/following/following.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/following/following.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./following.service */ "./src/app/main/following/following.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/main/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(http, followingService, adapterService, postService) {
        this.http = http;
        this.followingService = followingService;
        this.adapterService = adapterService;
        this.postService = postService;
        this.followersList = [];
        this.postsList = [];
        this.addfollower_clear = '';
    }
    FollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/accountname', { withCredentials: true }).subscribe(function (response) {
            localStorage.setItem("accountName", response['accountName']);
            if (localStorage.getItem("accountName") !== null) {
                _this.accountName = localStorage.getItem("accountName");
            }
            _this.loadFollower();
            // this.followingService.getFollowerJson().subscribe(response => {
            //   this.followersList = response['followers'];
            // });
            // this.followingService.getFollowerJson().subscribe(response => {
            //   this.adapter.setFollowersList(response['followers']);
            // });
            // this.followingService.getRegisteredJson().subscribe(response => {this.registeredUserList = response['registered_user']});
            // this.followingService.getPostJson().subscribe(response => {this.postsList = response['articles']});
        });
        this.followernameFormControl = this.followingService.getFollowernameControl();
        this.formAddfollower = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            followernameControl: this.followernameFormControl
        });
    };
    FollowingComponent.prototype.loadFollower = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/following/' + this.accountName, { withCredentials: true }).subscribe(function (response) {
            var following = response['following'].join(',');
            if (following === null || following === "") {
                _this.followersList = [];
            }
            else {
                _this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + following, { withCredentials: true }).subscribe(function (response_avatar) {
                    _this.http.get('https://ricebook-hd25.herokuapp.com/headlines/' + following, { withCredentials: true }).subscribe(function (response_headline) {
                        _this.followersList = _this.followingService.makeFollowerList(response_avatar['avatar'], response_headline['headline']);
                    });
                });
            }
        });
    };
    FollowingComponent.prototype.checkFollower = function () {
        return this.followingService.checkFollower(this.formAddfollower.value.followernameControl, this.followersList);
    };
    /** Add new follower **/
    FollowingComponent.prototype.addFollower = function () {
        var _this = this;
        this.followingService.addFollower(this.accountName, this.formAddfollower.value.followernameControl, this.followersList).subscribe(function (response) {
            if (response['status'] === 404) {
                return;
            }
            var user2Add = _this.formAddfollower.value.followernameControl;
            var follower = {};
            follower['accountName'] = user2Add;
            _this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + user2Add, { withCredentials: true }).subscribe(function (response) {
                follower['avatar'] = response['avatar'][0]['avatar'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/headlines/' + user2Add, { withCredentials: true }).subscribe(function (response) {
                follower['headline'] = response['headline'][0]['headline'];
            });
            _this.followersList.push(follower);
            _this.loadFollower();
            /** reload articles **/
            _this.http.get('https://ricebook-hd25.herokuapp.com/articles/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.postsList = response['articles'];
                _this.postsList.forEach(function (post) {
                    post['editable'] = false;
                    post['comments'].forEach(function (comment) {
                        comment['editable'] = false;
                    });
                });
                _this.adapterService.setPostsList(_this.postsList);
            });
        });
        /** Clear input area after adding follower **/
        this.addfollower_clear = '';
    };
    /** sort posts by time **/
    FollowingComponent.prototype.sort = function () {
        this.postsList.sort(function (post1, post2) {
            return (post1['date'] < post2['date']) ? 1 : -1;
        });
    };
    /** Delete follower from followerList **/
    FollowingComponent.prototype.removeFollower = function (user2Delete) {
        var _this = this;
        this.followingService.removeFollower(this.accountName, user2Delete, this.followersList).subscribe(function (response) {
            _this.loadFollower();
        });
        /** update post list cache **/
        var postsList = this.adapterService.getPostsList();
        for (var i = 0; i < postsList.length;) {
            if (postsList[i]['author'] === user2Delete) {
                postsList.splice(i, 1);
            }
            else {
                i++;
            }
        }
        this.adapterService.setPostsList(postsList);
        // this.adapter.shouldUpdatePosts = true;
    };
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/main/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/main/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _following_service__WEBPACK_IMPORTED_MODULE_2__["FollowingService"], _adapter_service__WEBPACK_IMPORTED_MODULE_4__["AdapterService"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/main/following/following.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/following/following.service.ts ***!
  \*****************************************************/
/*! exports provided: FollowingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingService", function() { return FollowingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowingService = /** @class */ (function () {
    function FollowingService(http, adapterService) {
        this.http = http;
        this.adapterService = adapterService;
        this.followernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []);
        this.postsList = [];
    }
    FollowingService.prototype.getFollowernameControl = function () {
        return this.followernameFormControl;
    };
    FollowingService.prototype.getFollowerJson = function () {
        return this.http.get('assets/follower.json');
    };
    FollowingService.prototype.getRegisteredJson = function () {
        return this.http.get('assets/registered_user.json');
    };
    FollowingService.prototype.getPostJson = function () {
        return this.http.get('assets/articles.json');
    };
    FollowingService.prototype.makeFollowerList = function (avatars, headlines) {
        var followerList = [];
        for (var i = 0; i < avatars.length; i++) {
            var follower = {};
            follower['accountName'] = avatars[i]['accountName'];
            follower['avatar'] = avatars[i]['avatar'];
            follower['headline'] = headlines[i]['headline'];
            followerList.push(follower);
        }
        return followerList;
    };
    FollowingService.prototype.checkFollower = function (name, followersList) {
        if (name === "")
            return true;
        if (followersList == null)
            return true;
        /** check if to-be-added user already exists in followersList **/
        for (var i = 0; i < followersList.length; i++) {
            if (followersList[i]['accountName'] === name)
                return false;
        }
        return true;
    };
    FollowingService.prototype.addFollower = function (accountName, user2Add, followersList) {
        if (!this.checkFollower(user2Add, followersList)) {
            return;
        }
        if (user2Add === null || user2Add === "") {
            return;
        }
        // var follower = {};
        // follower['accountName'] = user2Add;
        // this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + user2Add, {withCredentials: true}).subscribe(response => {
        //   follower['avatar'] = response['avatar'][0]['avatar'];
        // });
        //
        // this.http.get('https://ricebook-hd25.herokuapp.com/headlines/' + user2Add, {withCredentials: true}).subscribe(response => {
        //   follower['headline'] = response['headline'][0]['headline'];
        // });
        // followersList.push(follower);
        return this.http.put('https://ricebook-hd25.herokuapp.com/following/' + user2Add + ',' + accountName, {}, { withCredentials: true });
    };
    FollowingService.prototype.removeFollower = function (accountName, user2Delete, followersList) {
        for (var i = 0; i < followersList.length; i++) {
            if (followersList[i]['accountName'] === name) {
                if (followersList.length === 1) {
                    followersList = [];
                }
                else {
                    followersList.splice(i, 1);
                }
                break;
            }
        }
        return this.http.delete('https://ricebook-hd25.herokuapp.com/following/' + user2Delete + ',' + accountName, { withCredentials: true });
        // var postsList = this.adapterService.getPostsList();
        // for (var i = 0; i < postsList.length;) {
        //   if (postsList[i]['author'] === name) {
        //     postsList.splice(i, 1);
        //     this.adapterService.afterSearch = false;
        //   }
        //   else {
        //     i++;
        //   }
        // }
        // this.adapterService.setPostsList(postsList);
    };
    FollowingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _adapter_service__WEBPACK_IMPORTED_MODULE_3__["AdapterService"]])
    ], FollowingService);
    return FollowingService;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/headline/headline.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\n/*.user-avatar {*/\r\n\r\n/*background-image: url('https://scontent-sea1-1.cdninstagram.com/vp/65a953a1d3330a19b8864afddae6a285/5C2D0AE8/t51.2885-15/e35/11356926_954110691316269_659282159_n.jpg?ig_cache_key=MTAzNDU1Mzg4MzU5MzQ2NzgxOQ%3D%3D.2');*/\r\n\r\n/*background-size: cover;*/\r\n\r\n/*}*/\r\n\r\n/*.user-card {*/\r\n\r\n/*float: left;*/\r\n\r\n/*}*/\r\n\r\nmat-card {\r\n  /*width: 330px;*/\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/headline/headline.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card class=\"user-card\">\n    <h2> User Info </h2>\n    <!--Use mat-card to contain info of user-->\n    <mat-card-header>\n      <!--<div mat-card-avatar class=\"user-avatar\"></div>-->\n      <img mat-card-avatar src={{avatar}}>\n      <mat-card-title> {{accountName}} </mat-card-title>\n      <mat-card-subtitle>\n        <span id=\"headlineContent\">{{ headlineContent }}</span> <br> <!--Assigned in headline.component.ts file-->\n\n        <!--Field and button to update user's headline-->\n        <mat-form-field floatPlaceholder=\"never\">\n          <input matInput #headline placeholder=\"Update Headline\" [(ngModel)]=\"headline_clear\" id=\"headlineInput\">\n        </mat-form-field>\n        <button mat-button id=\"headlineBtn\" color=\"primary\" (click)=\"updateHeadline(headline.value)\"> <mat-icon>update</mat-icon> </button>\n\n      </mat-card-subtitle>\n\n    </mat-card-header>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/headline/headline.component.ts ***!
  \*****************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _headline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headline.service */ "./src/app/main/headline/headline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadlineComponent = /** @class */ (function () {
    function HeadlineComponent(http, headlineService) {
        this.http = http;
        this.headlineService = headlineService;
        this.headline_clear = '';
    }
    HeadlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** get account name from local storage **/
        this.http.get('https://ricebook-hd25.herokuapp.com/accountname', { withCredentials: true }).subscribe(function (response) {
            localStorage.setItem("accountName", response['accountName']);
            if (localStorage.getItem("accountName") !== null) {
                _this.accountName = localStorage.getItem("accountName");
            }
            /** get avatar from db **/
            // this.avatar = "https://tomli.blog/wp-content/plugins/stronger-github-widget//img/octocat_big.png";
            _this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.avatar = response['avatar'][0]['avatar'];
            });
            /** get headline from db according to account name **/
            _this.http.get('https://ricebook-hd25.herokuapp.com/headlines/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.headlineContent = response['headline'][0]['headline'];
            });
        });
    };
    /** Update headline value **/
    HeadlineComponent.prototype.updateHeadline = function (newHeadline) {
        if (newHeadline !== null && newHeadline !== "") {
            this.headlineContent = newHeadline;
            this.headlineService.updateHeadline(this.accountName, this.headlineContent);
            /** Clear input area after updating. **/
            this.headline_clear = '';
        }
    };
    HeadlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/main/headline/headline.component.html"),
            styles: [__webpack_require__(/*! ./headline.component.css */ "./src/app/main/headline/headline.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _headline_service__WEBPACK_IMPORTED_MODULE_2__["HeadlineService"]])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/headline/headline.service.ts ***!
  \***************************************************/
/*! exports provided: HeadlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineService", function() { return HeadlineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadlineService = /** @class */ (function () {
    function HeadlineService(http) {
        this.http = http;
    }
    HeadlineService.prototype.getAvatar = function () {
        return this.http.get('http://localhost:3000/avatar/hd25', { withCredentials: true });
    };
    HeadlineService.prototype.updateHeadline = function (accountName, headline) {
        var body = { accountName: accountName, headline: headline };
        this.http.put('https://ricebook-hd25.herokuapp.com/headline/', body, { withCredentials: true }).subscribe(function (response) { });
    };
    HeadlineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeadlineService);
    return HeadlineService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n  font-size: 150%;\r\n\r\n  /*position: fixed;*/\r\n  /*top: 0;*/\r\n  /*z-index: 2;*/\r\n\r\n}\r\n\r\n#toProfile {\r\n  margin-left: 80%;\r\n}\r\n\r\n#toAuth {\r\n  margin-left: 10px;\r\n}\r\n\r\n#leftDiv {\r\n  float: left;\r\n  width: 22%;\r\n}\r\n\r\n#headline-layout {\r\n  /*float: left;*/\r\n  /*width: 13%;*/\r\n}\r\n\r\n#following-layout {\r\n  /*float: left;*/\r\n  /*height: 100%;*/\r\n  /*width: 10%;*/\r\n}\r\n\r\n#posts-layout {\r\n  float: right;\r\n  width: 72%;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"author\" content=\"Hao Ding(netID: hd25)\">\n  </head>\n\n  <body>\n    <mat-toolbar color=\"primary\">\n      <h1> Main Page </h1>\n      <input mat-button (click)=\"toProfile()\" class=\"mat-raised-button mat-accent\" id=\"toProfile\" value=\"Profile\">\n      <input mat-button (click)=\"toAuth()\" class=\"mat-raised-button mat-accent\" id=\"toAuth\" value=\"Log Out\">\n\n    </mat-toolbar>\n\n    <div id=\"leftDiv\">\n      <app-headline id=\"headline-layout\"></app-headline> <br>\n      <app-following id=\"following-layout\"></app-following>\n    </div>\n\n    <div id=\"rightDiv\">\n      <app-posts id=\"posts-layout\"></app-posts>\n    </div>\n\n    <br>\n    <mat-toolbar></mat-toolbar>\n\n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(router, mainService, http) {
        this.router = router;
        this.mainService = mainService;
        this.http = http;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.toProfile = function () {
        // this.router.navigate(["/profile"]);
        this.mainService.toProfile(this.router);
    };
    MainComponent.prototype.toAuth = function () {
        // this.router.navigate(["/auth"]);
        // this.mainService.toAuth(this.router);
        this.http.put('https://ricebook-hd25.herokuapp.com/logout', {}, { withCredentials: true }).subscribe(function (response) { });
        this.router.navigate(["/auth"]);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapter.service */ "./src/app/adapter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = /** @class */ (function () {
    function MainService(adapterService) {
        this.adapterService = adapterService;
    }
    MainService.prototype.toProfile = function (router) {
        router.navigate(["/profile"]);
    };
    MainService.prototype.toAuth = function (router) {
        this.adapterService.setUser("");
        router.navigate(["/auth"]);
    };
    MainService.prototype.logOut = function () {
        this.adapterService.setUser("");
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_adapter_service__WEBPACK_IMPORTED_MODULE_1__["AdapterService"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/main/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\r\n  height:120px;\r\n  resize: none;\r\n\r\n  /*border:0;*/\r\n  /*background-color:transparent;*/\r\n  /*!*scrollbar-arrow-color:yellow;*/\r\n  /*scrollbar-base-color:lightsalmon;*/\r\n  /*overflow: hidden;*!*/\r\n  /*color: #666464;*/\r\n  /*!*height: auto;*!*/\r\n}\r\n\r\n.posts-card {\r\n  width: 45%;\r\n  height: 405px;\r\n  float: left;\r\n  overflow-y: auto;\r\n}\r\n\r\n.author-avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n#selectImg {\r\n  display: none;\r\n}\r\n\r\n.writeForm {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.writeField {\r\n  width: 100%;\r\n}\r\n\r\n.searchDiv {\r\n  float: right;\r\n  margin-right: 3%;\r\n  margin-top: 20%;\r\n  width: 33%\r\n}\r\n\r\n#searchInput {\r\n  width: 60%;\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-right: 10px;\r\n}\r\n\r\nimg {\r\n  width: 80%;\r\n  /*height: 300px;*/\r\n  /*width: 400px;*/\r\n}\r\n\r\nmat-chip {\r\n  width: 60%;\r\n  font-size: 100%;\r\n}\r\n\r\n#edit-post-btn {\r\n  margin-left: 10px;\r\n}\r\n\r\n#submit-post-btn {\r\n  margin-left: 30px;\r\n}\r\n\r\n#comment-area {\r\n  margin-right: 30px;\r\n  width: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- search posts by author or content -->\n<div class=\"searchDiv\">\n  <mat-form-field id=\"searchInput\">\n    <input matInput #keyWord placeholder=\"Search posts here. ^_^\" id=\"searchArea\">\n  </mat-form-field>\n  <!--Button to call search function in posts.component.ts file-->\n  <button mat-button id=\"searchBtn\" color=\"primary\" (click)=\"search(keyWord.value)\"> <mat-icon>search</mat-icon> SEARCH</button>\n</div>\n\n<!-- post articles -->\n<div class=\"writeDiv\">\n  <h2>Post New Article</h2>\n  <form class=\"writeForm\" [formGroup]=\"formPost\">\n    <!--Field to write posts-->\n    <mat-form-field class=\"writeField\">\n      <textarea matInput id=\"postTextArea\" placeholder=\"Write your post here. ^_^\" formControlName=\"postControl\" [(ngModel)]=\"postArea\"></textarea>\n    </mat-form-field>\n\n    <input mat-button class=\"mat-raised-button mat-accent\" value=\"Post\" type=\"submit\" (click)=\"addPosts()\" id=\"postBtn\">\n    <input mat-button class=\"mat-raised-button mat-accent\" value=\"Cancel\" type=\"reset\">\n\n    <!--Button to upload image, use a mat-button to call click function in a file input button that will not be sen,-->\n    <a mat-button class=\"mat-raised-button mat-accent\" onclick=\"document.getElementById('selectImg').click()\"> Upload Img </a>\n    <input id=\"selectImg\" name=\"file\" type=\"file\" accept=\"image/*\" (change)=\"postImg($event)\">\n  </form>\n</div>\n\n<!--Line to separate up and down part-->\n<br>\n<mat-toolbar></mat-toolbar>\n\n<!-- show user's posts -->\n<div id=\"previousArticle\">\n  <h2> Posts </h2>\n  <!--Use mat-card to contain posts-->\n  <mat-card *ngFor=\"let article of postsList\" class=\"posts-card\" id=\"postsList\"> <!--articleList contains info from articles.json, assigned in posts.component.ts-->\n\n    <!--Author's info: avatar, userId, name and post-date-->\n    <mat-card-header>\n      <img mat-card-avatar src=\"{{article.avatar}}\" class=\"author-avatar\">\n      <mat-card-title>{{article.author}}</mat-card-title>\n      <mat-card-subtitle>id: {{article._id}}</mat-card-subtitle>\n      <mat-card-subtitle>date: {{article.date}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <!--Content text and image of posts-->\n    <mat-card-content attr.contenteditable={{article.editable}} #articleText id=\"articleText\">\n      {{article.text}}\n    </mat-card-content>\n    <img md-card-iamge src=\"{{article.img}}\">\n\n    <br><br>\n\n    <!--Edit article and submit changes-->\n    <mat-card-actions>\n      <button id=\"edit-post-btn\" mat-button class=\"mat-raised-button mat-accent\" [disabled]=\"article.author != accountName\" (click)=\"can_edit(article)\"> <mat-icon>edit</mat-icon> EDIT POST </button>\n      <button id=\"submit-post-btn\" mat-button class=\"mat-raised-button mat-accent\" [disabled]=\"article.author != accountName\" (click)=\"submit_edit_post(article, articleText.innerHTML)\"> <mat-icon>done</mat-icon> SUBMIT CHANGE </button>\n    </mat-card-actions>\n\n    <!--Write comment here and submit-->\n    <mat-form-field id=\"comment-area\">\n      <input matInput placeholder=\"Comment here\" #commentArea>\n    </mat-form-field>\n    <button mat-button class=\"mat-raised-button mat-accent\" (click)=\"post_comment(article, commentArea.value)\"> <mat-icon>comment</mat-icon> POST COMMENT </button>\n\n\n    <mat-list *ngFor=\"let comment of article['comments']\">\n      <mat-list-item>\n        <mat-icon matListIcon>comment</mat-icon>\n        {{comment['author']}}: &nbsp;&nbsp;\n        <span attr.contenteditable={{comment.editable}} #commentText> {{comment['text']}} </span>\n        <button id=\"edit-comment-btn\" mat-button [disabled]=\"comment.author != accountName\" (click)=\"can_edit_comment(comment)\"> <mat-icon>edit</mat-icon> EDIT </button>\n        <button id=\"submit-changed-btn\" mat-button [disabled]=\"comment.author != accountName\" (click)=\"submit_edit_comment(comment['commentId'], article, comment, commentText.innerHTML)\"> <mat-icon>done</mat-icon> SUBMIT </button>\n\n      </mat-list-item>\n    </mat-list>\n\n\n    <!--Comments from users-->\n    <!--<mat-chip-list *ngFor=\"let comment of article['comments']\">-->\n      <!--<mat-chip color=\"accent\" selected=\"true\">-->\n        <!--{{comment}}-->\n      <!--</mat-chip>-->\n    <!--</mat-chip-list>-->\n\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.service */ "./src/app/main/posts/posts.service.ts");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsComponent = /** @class */ (function () {
    function PostsComponent(http, postService, adapterService) {
        this.http = http;
        this.postService = postService;
        this.adapterService = adapterService;
        this.postArea = '';
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/accountname', { withCredentials: true }).subscribe(function (response) {
            localStorage.setItem("accountName", response['accountName']);
            if (localStorage.getItem("accountName") !== null) {
                _this.accountName = localStorage.getItem("accountName");
            }
            _this.loadPosts();
            /** get avatar from db **/
            // this.avatar = "https://tomli.blog/wp-content/plugins/stronger-github-widget//img/octocat_big.png";
            _this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.avatar = response['avatar'][0]['avatar'];
            });
            // console.log(this.postsList);
            // this.postService.getPostJson().subscribe(response => {
            //   this.postsList = response['articles'];
            //   this.postsList_dummy = this.postsList;
            // });
            //
            // this.postService.getPostJson().subscribe(response => {
            //   this.adapterService.setPostsList(response['articles']);
            // });
        });
        this.postFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.formPost = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            postControl: this.postFormControl
        });
        // setInterval(() => {
        //   if (this.adapterService.shouldUpdatePosts === true) {
        //     console.log('hi');
        //     for (var i = 0; i < 10; i ++) {
        //       this.loadPosts();
        //     }
        //     this.adapterService.shouldUpdatePosts = false;
        //   }
        // }, 100);
        setInterval(function () { _this.updatePostList(); }, 100);
        // setInterval(this.f(), 1000);
    };
    /** get posts list from db and sort by date **/
    PostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/articles/' + this.accountName, { withCredentials: true }).subscribe(function (response) {
            _this.postsList = response['articles'];
            _this.postsList.forEach(function (post) {
                post['editable'] = false;
                post['comments'].forEach(function (comment) {
                    comment['editable'] = false;
                });
            });
            console.log(_this.postsList);
            _this.adapterService.setPostsList(_this.postsList);
        });
        // this.http.get('https://ricebook-hd25.herokuapp.com/following/' + this.accountName, {withCredentials: true}).subscribe(response => {
        //   var temp = [];
        //   response['following'].forEach(following => {
        //     this.http.get('https://ricebook-hd25.herokuapp.com/articles/' + following, {withCredentials: true}).subscribe(response_post => {
        //       temp = this.postService.loadPosts(response_post['articles'], temp);
        //       this.postsList = temp;
        //       this.sort();
        //       /** save posts list to cache **/
        //       this.adapterService.setPostsList(this.postsList);
        //     });
        //   });
        //
        // });
    };
    /** sort posts by time **/
    PostsComponent.prototype.sort = function () {
        this.postsList.sort(function (post1, post2) {
            return (post1['date'] < post2['date']) ? 1 : -1;
        });
    };
    /** Add new post, including author, avatar, time, content **/
    PostsComponent.prototype.addPosts = function () {
        var _this = this;
        this.postService.addPosts(this.accountName, this.avatar, this.img, this.formPost.value.postControl, this.postsList).subscribe(function (response) {
            _this.loadPosts();
        });
        /** Clear the textarea after posting **/
        this.postArea = '';
    };
    /** Search posts by arthor or content **/
    PostsComponent.prototype.search = function (keyWord) {
        this.postsList_dummy = this.postsList;
        this.postService.search(keyWord, this.postsList, this.postsList_dummy);
    };
    PostsComponent.prototype.updatePostList = function () {
        if (this.adapterService.afterSearch) {
            this.postsList = this.adapterService.getSearchPostsList();
        }
        else {
            this.postsList = this.adapterService.getPostsList();
        }
    };
    PostsComponent.prototype.postImg = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var result = event.target.result;
                _this.postService.postImg(result).subscribe(function (response) {
                    _this.img = response['url'];
                });
            };
            console.log(event.target.files[0]);
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    PostsComponent.prototype.can_edit = function (article) {
        article['editable'] = true;
    };
    PostsComponent.prototype.submit_edit_post = function (article, text) {
        article['editable'] = false;
        var body = { _id: article._id, text: text };
        this.http.put('https://ricebook-hd25.herokuapp.com/articles/' + article._id, body, { withCredentials: true }).subscribe(function (response) { });
    };
    PostsComponent.prototype.post_comment = function (article, text) {
        var _this = this;
        var body = { commentId: -1, text: text };
        console.log(body);
        console.log(article);
        this.http.put('https://ricebook-hd25.herokuapp.com/articles/' + article._id, body, { withCredentials: true }).subscribe(function (response) {
            _this.loadPosts();
        });
    };
    PostsComponent.prototype.can_edit_comment = function (comment) {
        comment['editable'] = true;
    };
    PostsComponent.prototype.submit_edit_comment = function (commentId, article, comment, text) {
        var _this = this;
        comment['editable'] = false;
        var body = { commentId: commentId, text: text };
        this.http.put('https://ricebook-hd25.herokuapp.com/articles/' + article._id, body, { withCredentials: true }).subscribe(function (response) {
            _this.loadPosts();
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/main/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/main/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], _adapter_service__WEBPACK_IMPORTED_MODULE_4__["AdapterService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/main/posts/posts.service.ts ***!
  \*********************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../adapter.service */ "./src/app/adapter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(http, adapterService) {
        this.http = http;
        this.adapterService = adapterService;
    }
    PostsService.prototype.getPostJson = function () {
        return this.http.get('assets/articles.json');
    };
    PostsService.prototype.loadPosts = function (posts, temp) {
        // temp = [];
        posts.forEach(function (post) {
            temp.push(post);
        });
        return temp;
    };
    PostsService.prototype.addPosts = function (author, avatar, img, text, postsList) {
        if (!((text === null || text === "") && (img === null || img === ""))) {
            var body = { author: author, avatar: avatar, img: img, text: text };
            console.log(body);
            return this.http.post('https://ricebook-hd25.herokuapp.com/article/', body, { withCredentials: true });
        }
    };
    PostsService.prototype.fetchUsersPost = function (name, postsList) {
        /** add posts according to name **/
        var usersPost = [];
        for (var i = 0; i < postsList.length; i++) {
            if (postsList[i]['author'] === name) {
                usersPost.push(postsList[i]);
            }
        }
        return usersPost;
    };
    PostsService.prototype.search = function (keyWord, postsList, postsList_dummy) {
        // console.log(postsList);
        var temp = postsList_dummy;
        postsList = postsList_dummy.filter(function (ariticle) { return ariticle['author'].indexOf(keyWord) !== -1 || ariticle['text'].indexOf(keyWord) !== -1; });
        postsList_dummy = temp;
        this.adapterService.setSearchPostsList(postsList);
    };
    // upload image in post
    PostsService.prototype.postImg = function (result) {
        var body = { "file": result, "upload_preset": "dyxq9b9o" };
        return this.http.post('https://api.cloudinary.com/v1_1/rice-university/image/upload', body);
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _adapter_service__WEBPACK_IMPORTED_MODULE_2__["AdapterService"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  height: 136%;\r\n  background: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-689263.jpg) no-repeat fixed;\r\n  background-size: cover;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.infoDiv {\r\n  float: left;\r\n  margin-left:6%;\r\n  margin-top:5%;\r\n  width: 18%;\r\n\r\n  background-color:rgba(255, 255, 255, 0.8);\r\n  border-color:#ffffcc;\r\n  padding:10px 80px 30px 60px;\r\n}\r\n\r\n.updateDiv {\r\n  float: left;\r\n  margin-top:5%;\r\n  margin-left: 5%;\r\n  width: 18%;\r\n\r\n  background-color:rgba(255, 255, 255, 0.8);\r\n  border-color:#ffffcc;\r\n  padding:10px 60px 10px 60px;\r\n}\r\n\r\n.linkDiv {\r\n  float: right;\r\n  margin-top:5%;\r\n  margin-right: 5%;\r\n\r\n  background-color:rgba(255, 255, 255, 0.9);\r\n  border-color:#ffffcc;\r\n  padding:10px 60px 10px 60px;\r\n}\r\n\r\nform {\r\n  /*margin:20px auto;*/\r\n  /*padding:10px 60px 10px 60px;*/\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-right: 10px;\r\n}\r\n\r\n#profilePicInput {\r\n  display: none;\r\n}\r\n\r\nmat-chip {\r\n  font-size: 110%;\r\n}\r\n\r\n#toMain {\r\n  margin-left: 80%;\r\n}\r\n\r\n#link-account, #link-password {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"author\" content=\"Hao Ding(netID: hd25)\">\n  </head>\n\n  <body>\n    <mat-toolbar color=\"primary\">\n      <h1> Profile </h1>\n      <a mat-button (click)=\"toMain()\" class=\"mat-raised-button mat-accent\" id=\"toMain\"> Return to Main </a>\n    </mat-toolbar>\n\n    <div class=\"infoDiv\">\n      <h2>\n        CURRENT INFORMATION\n      </h2>\n\n      <img src={{avatar}} height=\"100px\" width=\"100px\"><br>\n      <a mat-button class=\"mat-raised-button mat-warn\" onclick=\"document.getElementById('profilePicInput').click()\"> Update New Photo </a>\n      <input id=\"profilePicInput\" name=\"file\" type=\"file\" accept=\"image/*\" (change)=\"postImg($event)\">\n      <!--<input id=\"selectImg\" name=\"file\" type=\"file\" accept=\"image/*\" (change)=\"postImg($event)\">-->\n\n      <br><br>\n\n      <mat-chip-list class=\"mat-chip-list-stacked\" aria-orientation=\"vertical\">\n        Account name:\n        <mat-chip selected=\"true\" color=\"accent\"> {{accountName}} </mat-chip><br>\n\n        Display name:\n        <mat-chip selected=\"true\" color=\"accent\"> {{displayName}} </mat-chip><br>\n\n        E-mail Address:\n        <mat-chip selected=\"true\" color=\"accent\"> {{emailAddress}} </mat-chip><br>\n\n        Date of Birth:\n        <mat-chip selected=\"true\" color=\"accent\"> {{birthday}} </mat-chip><br>\n\n        Phone Number:\n        <mat-chip selected=\"true\" color=\"accent\"> {{phoneNumber}} </mat-chip><br>\n\n        Zipcode:\n        <mat-chip selected=\"true\" color=\"accent\"> {{zipCode}} </mat-chip><br>\n\n        Password:\n        <mat-chip selected=\"true\" color=\"accent\"> {{password}} </mat-chip><br>\n      </mat-chip-list>\n    </div>\n\n    <div class=\"updateDiv\">\n      <h2> UPDATE INFORMATION </h2>\n      <form #updateForm=\"ngForm\" [formGroup]=\"formUpdate\" name=\"registerForm\" method=\"GET\" action=\"/main\">\n        <p>ACCOUNT NAME:\n          <mat-form-field>\n            <input matInput type=\"text\" name=\"accountName\" placeholder=\"Hao Ding\" formControlName=\"accountControl\" [formControl]=\"accountFormControl\" [(ngModel)]=\"account_clear\">\n            <mat-error *ngIf=\"accountFormControl.hasError('pattern')\">\n              Please enter a valid account name\n            </mat-error>\n            <mat-error *ngIf=\"accountFormControl.hasError('required')\">\n              Account Name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>DISPLAY NAME:\n          <mat-form-field>\n            <input matInput type=\"text\" name=\"displayName\" placeholder=\"Hao-Ding-6\" formControlName=\"displayControl\" [formControl]=\"displayFormControl\" [(ngModel)]=\"display_clear\">\n          </mat-form-field>\n        </p>\n\n        <p>EMAIL ADDRESS:\n          <mat-form-field>\n            <input matInput type=\"text\" name=\"emailAddress\" placeholder=\"xxx@xxx.com\" formControlName=\"emailControl\" [formControl]=\"emailFormControl\" [(ngModel)]=\"email_clear\">\n            <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>DATE OF BIRTH:\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" name=\"birthday\" placeholder=\"Choose your birth date\" formControlName=\"birthdayControl\" [formControl]=\"birthdayFormControl\" [(ngModel)]=\"birthday_clear\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngIf=\"birthdayFormControl.hasError('required')\">\n              Date of birth is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>PHONE NUMBER:\n          <mat-form-field>\n            <input matInput type=\"text\" name=\"phoneNumber\" placeholder=\"123-123-1234\"  formControlName=\"phonenumControl\" [formControl]=\"phonenumFormControl\" [(ngModel)]=\"phone_clear\">\n            <mat-error *ngIf=\"phonenumFormControl.hasError('pattern')\">\n              Please enter a valid phone number\n            </mat-error>\n            <mat-error *ngIf=\"phonenumFormControl.hasError('required')\">\n              Phone Number is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>ZIP CODE:\n          <mat-form-field>\n            <input matInput type=\"text\" name=\"zipCode\" placeholder=\"77030\" formControlName=\"zipcodeControl\" [formControl]=\"zipcodeFormControl\" [(ngModel)]=\"zipcode_clear\">\n            <mat-error *ngIf=\"zipcodeFormControl.hasError('pattern')\">\n              Please enter a valid zipcode\n            </mat-error>\n            <mat-error *ngIf=\"zipcodeFormControl.hasError('required')\">\n              Zipcode is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>PASSWORD:\n          <mat-form-field>\n            <input matInput type=\"password\" name=\"password\" formControlName=\"passwordControl\" [formControl]=\"passwordFormControl\" [(ngModel)]=\"password_clear\">\n            <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p>\n          <input mat-button (click)=\"submitForm()\"  class=\"mat-raised-button mat-accent\" type=\"submit\" value=\"Submit\"\n                 [disabled]=\"!updateForm.valid\">\n          <input mat-button class=\"mat-raised-button mat-accent\" type=\"reset\" value=\"Clear\">\n        </p>\n      </form>\n    </div>\n\n    <div class=\"linkDiv\">\n      <h2>Link Account</h2>\n      <mat-form-field id=\"link-account\">\n        <input #linkAccount matInput placeholder=\"Input the account name you want to link\">\n      </mat-form-field>\n      <br>\n      <mat-form-field id=\"link-password\">\n        <input type=\"password\" #linkPassword matInput placeholder=\"Input the correct password\">\n      </mat-form-field>\n      <br>\n      <button class=\"mat-raised-button mat-primary\" mat-button color=\"primary\" (click)=\"link(linkAccount.value, linkPassword.value)\"><mat-icon>person_outline</mat-icon>Link Account</button>\n      <button class=\"mat-raised-button mat-warn\" mat-button color=\"warn\" (click)=\"unlink()\"><mat-icon>person_outline</mat-icon>Unlink Account</button>\n    </div>\n\n\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adapter.service */ "./src/app/adapter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, adapterService, router, http) {
        this.profileService = profileService;
        this.adapterService = adapterService;
        this.router = router;
        this.http = http;
        this.account_clear = '';
        this.display_clear = '';
        this.email_clear = '';
        this.birthday_clear = '';
        this.phone_clear = '';
        this.zipcode_clear = '';
        this.password_clear = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/accountname', { withCredentials: true }).subscribe(function (response) {
            localStorage.setItem("accountName", response['accountName']);
            if (localStorage.getItem("accountName") !== null) {
                _this.accountName = localStorage.getItem("accountName");
            }
            _this.http.get('https://ricebook-hd25.herokuapp.com/avatar/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.avatar = response['avatar'][0]['avatar'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/display/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.displayName = response['displayName'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/email/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.emailAddress = response['emailAddress'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/dob/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.birthday = response['birthday'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/phone/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.phoneNumber = response['phoneNumber'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/zipcode/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.zipCode = response['zipCode'];
            });
            _this.http.get('https://ricebook-hd25.herokuapp.com/password/' + _this.accountName, { withCredentials: true }).subscribe(function (response) {
                _this.password = response['password'];
            });
        });
        /** default value, if not register. **/
        // const temp = this.profileService.getProfileJson().subscribe(response => {this.profileList = response['profile'];});
        // const default_profile = JSON.parse(this.profileList);
        // this.accountName = "Hao Ding";
        // this.displayName = "HaoDing6";
        // this.emailAddress = "qwe@qwe.com";
        // this.birthday = "1996-04-11";
        // this.phoneNumber = "123-123-1234";
        // this.zipCode = "77030";
        // this.password = "qweasd";
        //
        // /** If registered, read info from Json adapter. **/
        // this.jsonStr = this.adapterService.getJson();
        // if (this.jsonStr != null) {
        //   // const profile = JSON.parse(this.jsonStr).profile[0];
        //   const profile = this.profileService.getProfileJson();
        //   this.accountName = profile.accountName;
        //   this.displayName = profile.displayName;
        //   this.emailAddress = profile.emailAddress;
        //   this.birthday = profile.birthday;
        //   this.phoneNumber = profile.phoneNumber;
        //   this.zipCode = profile.zipCode;
        //   this.password = profile.password;
        // }
        /** From control part **/
        this.accountFormControl = this.profileService.getAccountControl();
        this.displayFormControl = this.profileService.getDisplayControl();
        this.emailFormControl = this.profileService.getEmailControl();
        this.birthdayFormControl = this.profileService.getBirthdayControl();
        this.phonenumFormControl = this.profileService.getPhonenumControl();
        this.zipcodeFormControl = this.profileService.getZipcodeControl();
        this.passwordFormControl = this.profileService.getPasswordControl();
        this.formUpdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            accountControl: this.accountFormControl,
            displayControl: this.displayFormControl,
            emailControl: this.emailFormControl,
            birthdayControl: this.birthdayFormControl,
            phonenumControl: this.phonenumFormControl,
            zipcodeControl: this.zipcodeFormControl,
            passwordControl: this.passwordFormControl,
        });
    };
    ProfileComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.formUpdate.value.accountControl !== "") {
            this.accountName = this.formUpdate.value.accountControl;
            this.account_clear = '';
        }
        if (this.formUpdate.value.displayControl !== "") {
            this.displayName = this.formUpdate.value.displayControl;
            this.display_clear = '';
        }
        if (this.formUpdate.value.emailControl !== "") {
            var body = { accountName: this.accountName, emailAddress: this.formUpdate.value.emailControl };
            this.http.put('https://ricebook-hd25.herokuapp.com/email/', body, { withCredentials: true }).subscribe(function (response) {
                _this.emailAddress = response['emailAddress'];
            });
            this.email_clear = '';
        }
        if (this.formUpdate.value.birthdayControl !== "") {
            var selectedDate = new Date(this.formUpdate.value.birthdayControl);
            var birthday = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
            this.birthday = birthday;
            this.birthday_clear = '';
        }
        if (this.formUpdate.value.phonenumControl !== "") {
            this.phoneNumber = this.formUpdate.value.phonenumControl;
            this.phone_clear = '';
        }
        if (this.formUpdate.value.zipcodeControl !== "") {
            var body = { accountName: this.accountName, zipCode: this.formUpdate.value.zipcodeControl };
            this.http.put('https://ricebook-hd25.herokuapp.com/zipcode/', body, { withCredentials: true }).subscribe(function (response) {
                _this.zipCode = response['zipCode'];
            });
            this.zipcode_clear = '';
        }
        if (this.formUpdate.value.passwordControl !== "") {
            var body = { accountName: this.accountName, password: this.formUpdate.value.passwordControl };
            this.http.put('https://ricebook-hd25.herokuapp.com/password/', body, { withCredentials: true }).subscribe(function (response) {
                _this.password = response['password'];
            });
            this.password_clear = '';
        }
        /** Store changed info to Json adapter **/
        var accountName = this.accountName;
        var displayName = this.displayName;
        var emailAddress = this.emailAddress;
        var selectedDate = new Date(this.birthday);
        var birthday = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
        var phoneNumber = this.phoneNumber;
        var zipCode = this.zipCode;
        var password = this.password;
        this.jsonStr = '{"profile":[' + '{"accountName":"' + accountName + '","displayName":"' + displayName + '","emailAddress":"' + emailAddress + '","birthday":"' + birthday + '","phoneNumber":"' + phoneNumber + '","zipCode":"' + zipCode + '","password":"' + password + '"}' + ']}';
        this.adapterService.setJson(this.jsonStr);
    };
    ProfileComponent.prototype.toMain = function () {
        this.router.navigate(["/main"]);
    };
    ProfileComponent.prototype.postImg = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var result = event.target.result;
                _this.profileService.postImg(result).subscribe(function (response) {
                    _this.avatar = response['url'];
                    /** update database **/
                    var body = { accountName: _this.accountName, avatar: _this.avatar };
                    _this.http.put('https://ricebook-hd25.herokuapp.com/avatar/', body, { withCredentials: true }).subscribe(function (response) { });
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ProfileComponent.prototype.link = function (accountName, password) {
        var _this = this;
        var body = { accountName: accountName, password: password };
        this.http.post('https://ricebook-hd25.herokuapp.com/link/', body, { withCredentials: true }).subscribe(function (response) {
            _this.http.put('https://ricebook-hd25.herokuapp.com/logout', {}, { withCredentials: true }).subscribe(function (response) { });
            _this.router.navigate(["/auth"]);
        });
    };
    ProfileComponent.prototype.unlink = function () {
        var _this = this;
        this.http.get('https://ricebook-hd25.herokuapp.com/unlink/', { withCredentials: true }).subscribe(function (response) {
            _this.http.put('https://ricebook-hd25.herokuapp.com/logout', {}, { withCredentials: true }).subscribe(function (response) { });
            _this.router.navigate(["/auth"]);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"], _adapter_service__WEBPACK_IMPORTED_MODULE_2__["AdapterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapter.service */ "./src/app/adapter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http, adapterService) {
        this.http = http;
        this.adapterService = adapterService;
        this.accountFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?![0-9])[a-zA-Z0-9]+$/)
        ]);
        this.displayFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
        ]);
        this.birthdayFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []);
        this.phonenumFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        ]);
        this.zipcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9]{5}(-[0-9]{4})?/)
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []);
    }
    ProfileService.prototype.getAccountControl = function () {
        return this.accountFormControl;
    };
    ProfileService.prototype.getDisplayControl = function () {
        return this.displayFormControl;
    };
    ProfileService.prototype.getEmailControl = function () {
        return this.emailFormControl;
    };
    ProfileService.prototype.getBirthdayControl = function () {
        return this.birthdayFormControl;
    };
    ProfileService.prototype.getPhonenumControl = function () {
        return this.phonenumFormControl;
    };
    ProfileService.prototype.getZipcodeControl = function () {
        return this.zipcodeFormControl;
    };
    ProfileService.prototype.getPasswordControl = function () {
        return this.passwordFormControl;
    };
    ProfileService.prototype.postImg = function (result) {
        var body = { "file": result, "upload_preset": "dyxq9b9o" };
        return this.http.post('https://api.cloudinary.com/v1_1/rice-university/image/upload', body);
    };
    ProfileService.prototype.getProfileJson = function () {
        return JSON.parse(this.adapterService.getJson()).profile[0];
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _adapter_service__WEBPACK_IMPORTED_MODULE_3__["AdapterService"]])
    ], ProfileService);
    return ProfileService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Graduate-at-Rice\Graduate Fall 2018\COMP 531\Homework\TestArea\HW6-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
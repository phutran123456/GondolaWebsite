"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let homeGondolaPage = class homeGondolaPage {
    constructor() {
        this.lnkLogin = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
        this.lnkSignUp = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Sign Up']";
        this._homePageUrl = "https://gondolatest.com/en/";
    }
    async navigateTo() {
        await gondolajs_1.gondola.navigate(this._homePageUrl);
        await gondolajs_1.gondola.maximize();
    }
    async login() {
        await gondolajs_1.gondola.waitForElement(this.lnkLogin);
        await gondolajs_1.gondola.click(this.lnkLogin);
    }
    async signup() {
        await gondolajs_1.gondola.waitForElement(this.lnkSignUp);
        await gondolajs_1.gondola.click(this.lnkSignUp);
    }
};
__decorate([
    gondolajs_1.locator
], homeGondolaPage.prototype, "lnkLogin", void 0);
__decorate([
    gondolajs_1.locator
], homeGondolaPage.prototype, "lnkSignUp", void 0);
__decorate([
    gondolajs_1.action("open website Gondola", "Navigate to home page")
], homeGondolaPage.prototype, "navigateTo", null);
__decorate([
    gondolajs_1.action("select login tab")
], homeGondolaPage.prototype, "login", null);
__decorate([
    gondolajs_1.action("select Sign Up tab")
], homeGondolaPage.prototype, "signup", null);
homeGondolaPage = __decorate([
    gondolajs_1.page
], homeGondolaPage);
exports.homeGondolaPage = homeGondolaPage;
;
exports.default = new homeGondolaPage();
//# sourceMappingURL=HomeGondola.js.map
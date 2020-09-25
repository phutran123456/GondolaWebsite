"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let understandingGondolaPage = class understandingGondolaPage {
    constructor() {
        this.txttitle = "//h1[@id='understanding-gondola']";
    }
    async checkUnderstandingGondolaPage() {
        await gondolajs_1.gondola.waitForElement(this.txttitle, 30);
        await gondolajs_1.gondola.checkControlExist(this.txttitle);
    }
};
__decorate([
    gondolajs_1.locator
], understandingGondolaPage.prototype, "txttitle", void 0);
understandingGondolaPage = __decorate([
    gondolajs_1.page
], understandingGondolaPage);
exports.understandingGondolaPage = understandingGondolaPage;
exports.default = new understandingGondolaPage();
//# sourceMappingURL=understandingGondolaPage.js.map
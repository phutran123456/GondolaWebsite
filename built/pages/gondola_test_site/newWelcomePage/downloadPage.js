"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let downloadPage = class downloadPage {
    constructor() {
        this.btInstall = "//button[@class='ms-Button ux-button install ms-Button--default root-39']";
    }
    async checkDownloadPage() {
        await gondolajs_1.gondola.waitForElement(this.btInstall, 30);
        await gondolajs_1.gondola.checkControlExist(this.btInstall);
    }
};
__decorate([
    gondolajs_1.locator
], downloadPage.prototype, "btInstall", void 0);
downloadPage = __decorate([
    gondolajs_1.page
], downloadPage);
exports.downloadPage = downloadPage;
exports.default = new downloadPage();
//# sourceMappingURL=downloadPage.js.map
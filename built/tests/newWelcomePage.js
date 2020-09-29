"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/thankyouPage"));
const downloadPage_1 = __importDefault(require("../pages/gondola_test_site/downloadPage"));
const understandingGondolaPage_1 = __importDefault(require("../pages/gondola_test_site/understandingGondolaPage"));
gondolajs_1.TestModule("New welcome page");
/**
* Testcase 01: Check Thank you displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. Register account
* 3. check GUI Thank You Page
* 4. Open install Gondola page
*
*/
gondolajs_1.TestCase("Testcase 01: Check GUI thank you page displayed correctly", async () => {
    await thankyouPage_1.default.navigateTo();
    //  await homeGondolaPage.signup();
    //  await registerPage.infoUser(datatest.firstname, datatest.lastname, datatest.username_nonactive, datatest.password_nonactive, datatest.password_nonactive);
    //  await registerPage.onelaststep(datatest.titlename, datatest.company, datatest.country, datatest.state,datatest.phone);
    await thankyouPage_1.default.checkGUI();
    await thankyouPage_1.default.checkUsernameonHeader();
});
/**
* Testcase 02: Verify open links on thank you page
*
* 1. Navigate to gondolatest.com
* 2. Login inactive account
* 3. Open link download
* 4. Open link Understanding Gondola page
*
*/
gondolajs_1.TestCase("Testcase 02: Verify open links on thank you page ", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openDownloadPage();
    await gondolajs_1.gondola.switchBrowserTab("next");
    await downloadPage_1.default.checkDownloadPage();
    await gondolajs_1.gondola.closeCurrentTab();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkUnderstandingGondola);
    await understandingGondolaPage_1.default.checkUnderstandingGondolaPage();
});
//# sourceMappingURL=newWelcomePage.js.map
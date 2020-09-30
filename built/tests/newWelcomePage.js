"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const HomeGondola_1 = __importDefault(require("../pages/gondola_test_site/HomeGondola"));
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/newWelcomePage/thankyouPage"));
const registerPage_1 = __importDefault(require("../pages/gondola_test_site/registerPage"));
const downloadPage_1 = __importDefault(require("../pages/gondola_test_site/newWelcomePage/downloadPage"));
const datatest_1 = require("../data/datatest");
const understandingGondolaPage_1 = __importDefault(require("../pages/gondola_test_site/newWelcomePage/understandingGondolaPage"));
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
    let count = await Math.floor(Math.random() * 10000) + 1;
    let emailaddress = await datatest_1.datatest.email + count + "@temp.com";
    let firstname = datatest_1.datatest.firstname + count;
    await gondolajs_1.gondola.report("firstname: " + firstname);
    await gondolajs_1.gondola.report("email: " + emailaddress);
    await thankyouPage_1.default.navigateTo();
    await HomeGondola_1.default.signup();
    await registerPage_1.default.InputInfoUser(datatest_1.datatest.firstname, datatest_1.datatest.lastname, datatest_1.datatest.username, datatest_1.datatest.password, datatest_1.datatest.password);
    await registerPage_1.default.InputOneLastStep(datatest_1.datatest.titlename, datatest_1.datatest.company, datatest_1.datatest.country, datatest_1.datatest.state, datatest_1.datatest.phone);
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
gondolajs_1.TestCase("Testcase 03: random thank you page ", async () => {
    let count = await Math.floor(Math.random() * 10000) + 1;
    let emailaddress = await datatest_1.datatest.email + count + "@temp.com";
    let firstname = datatest_1.datatest.firstname + count;
    await gondolajs_1.gondola.report("firstname: " + firstname);
    await gondolajs_1.gondola.report("email: " + emailaddress);
});
//# sourceMappingURL=newWelcomePage.js.map